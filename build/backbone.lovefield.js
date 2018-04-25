(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("backbone"), require("lovefield"), require("underscore"));
	else if(typeof define === 'function' && define.amd)
		define(["backbone", "lovefield", "underscore"], factory);
	else if(typeof exports === 'object')
		exports["Backbone.LoveField"] = factory(require("backbone"), require("lovefield"), require("underscore"));
	else
		root["Backbone.LoveField"] = factory(root["Backbone"], root["lf"], root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_backbone__, __WEBPACK_EXTERNAL_MODULE_lovefield__, __WEBPACK_EXTERNAL_MODULE_underscore__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/driver.coffee":
/*!***************************!*\
  !*** ./src/driver.coffee ***!
  \***************************/
/*! exports provided: LoveStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! backbone */ "backbone");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sync */ "./src/sync.coffee");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store.coffee");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoveStore", function() { return _store__WEBPACK_IMPORTED_MODULE_2__["LoveStore"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.coffee");

/** Get the local or ajax sync call
 * @param {Model} model - Model to sync
 * @param {object} options - Options to pass, takes ajaxSync
 * @returns {function} The sync method that will be called
 */
var ajaxSync, getSyncMethod;









backbone__WEBPACK_IMPORTED_MODULE_0___default.a.LoveStore = _store__WEBPACK_IMPORTED_MODULE_2__["LoveStore"];

ajaxSync = backbone__WEBPACK_IMPORTED_MODULE_0___default.a.sync;

getSyncMethod = function(model, options = {}) {
  var forceAjaxSync, hasLoveStore;
  forceAjaxSync = options.ajaxSync;
  hasLoveStore = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getLoveStore"])(model);
  if (!forceAjaxSync && hasLoveStore) {
    return _sync__WEBPACK_IMPORTED_MODULE_1__["sync"];
  } else {
    return ajaxSync;
  }
};

backbone__WEBPACK_IMPORTED_MODULE_0___default.a.sync = function(method, model, options) {
  return getSyncMethod(model, options).apply(this, [method, model, options]);
};




/***/ }),

/***/ "./src/store.coffee":
/*!**************************!*\
  !*** ./src/store.coffee ***!
  \**************************/
/*! exports provided: LoveStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoveStore", function() { return LoveStore; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lovefield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lovefield */ "lovefield");
/* harmony import */ var lovefield__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lovefield__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.coffee");






var LoveStore = class LoveStore {
  constructor(conn, name = '') {
    this.conn = conn;
    this.name = name;
    return;
  }

  _getTable() {
    return this.conn.getSchema().table(this.name);
  }

  create(model) {
    var data, row, table;
    table = this._getTable();
    if (!model.id && model.id !== 0) {
      model.id = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["guid"])();
      model.set(model.idAttribute, model.id);
    }
    data = model.toJSON();
    row = table.createRow(data);
    return this.conn.insert().into(table).values([row]).exec();
  }

  update(model) {
    var data, q, table;
    table = this._getTable();
    data = model.toJSON();
    q = this.conn.update(table);
    Object.keys(data).forEach(function(key) {
      return q = q.set(table[key], data[key]);
    });
    q = q.where(table.id.eq(data.id));
    return q.exec();
  }

  find(model, options) {
    var id, idAttribute, q, table;
    table = this._getTable();
    idAttribute = Object(underscore__WEBPACK_IMPORTED_MODULE_0__["result"])(model, 'idAttribute');
    id = Object(underscore__WEBPACK_IMPORTED_MODULE_0__["result"])(model, idAttribute);
    return q = this.conn.select().from(table).where(table.id.eq(id)).exec().then(function(results) {
      model.set(results[0]);
      return model;
    });
    return q;
  }

  findAll(model, options) {
    var filters, q, table;
    table = this._getTable();
    q = this.conn.select().from(table);
    if (options.data) {
      filters = [];
      Object.keys(options.data).forEach(function(key) {
        var clause;
        clause = table[key].eq(options.data[key]);
        return filters.push(clause);
      });
      if (filters.length > 1) {
        q = q.where(lovefield__WEBPACK_IMPORTED_MODULE_1___default.a.op.and(filters));
      } else {
        q = q.where(filters[0]);
      }
    }
    return q.exec().then(function(results) {
      if (model instanceof Backbone.Collection) {
        return model.set(results);
      } else {
        // FIXME throw error if more
        // than one result for model
        return model.set(results[0]);
      }
    });
  }

  destroy(model, options) {
    var table;
    table = this._getTable();
    return this.conn.delete().from(table).where(table.id.eq(model.id)).exec();
  }

};


/***/ }),

/***/ "./src/sync.coffee":
/*!*************************!*\
  !*** ./src/sync.coffee ***!
  \*************************/
/*! exports provided: sync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sync", function() { return sync; });
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! backbone */ "backbone");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.coffee");

/** Get the Deferred status from $ if we have jQuery, otherwise use Backbone's
 *  @returns {boolean} - Whether the request was deferred
 */
var getDeferred;







getDeferred = function() {
  if (backbone__WEBPACK_IMPORTED_MODULE_0___default.a.$) {
    return Object(underscore__WEBPACK_IMPORTED_MODULE_1__["result"])(backbone__WEBPACK_IMPORTED_MODULE_0___default.a.$, 'Deferred', false);
  }
  return Object(underscore__WEBPACK_IMPORTED_MODULE_1__["result"])(backbone__WEBPACK_IMPORTED_MODULE_0___default.a, 'Deferred', false);
};

/** Override Backbone's `sync` method to run against localStorage
 * @param {string} method - One of read/create/update/delete
 * @param {Model} model - Backbone model to sync
 * @param {Object} options - Options object, use `ajaxSync: true` to run the
 *  operation against the server in which case, options will also be passed into
 *  `jQuery.ajax`
 * @returns {undefined}
 */
var sync = function(method, model, options = {}) {
  var error, errorMessage, id, idAttribute, resp, store;
  store = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getLoveStore"])(model);
  resp = void 0;
  try {
    switch (method) {
      case 'read':
        idAttribute = Object(underscore__WEBPACK_IMPORTED_MODULE_1__["result"])(model, 'idAttribute');
        id = Object(underscore__WEBPACK_IMPORTED_MODULE_1__["result"])(model, idAttribute);
        resp = id ? store.find(model, options) : store.findAll(model, options); //noqa
        break;
      case 'create':
        resp = store.create(model, options);
        break;
      case 'patch':
      case 'update':
        resp = store.update(model, options);
        break;
      case 'delete':
        resp = store.destroy(model, options);
    }
  } catch (error1) {
    error = error1;
    if (error.code === 22) {
      errorMessage = 'Private browsing is unsupported';
    } else {
      errorMessage = error.message;
    }
  }
  if (resp) {
    // compatibility with $.ajax
    resp.done = resp.then;
    resp.fail = resp.catch;
    if (options.success) {
      options.success.call(model, resp, options);
    }
  } else {
    errorMessage = errorMessage ? errorMessage : "Record Not Found";
    if (options.error) {
      options.error.call(model, errorMessage, options);
    }
  }
  // add compatibility with $.ajax
  // always execute callback for success and error
  if (options.complete) {
    options.complete.call(model, resp);
  }
  return resp;
};


/***/ }),

/***/ "./src/utils.coffee":
/*!**************************!*\
  !*** ./src/utils.coffee ***!
  \**************************/
/*! exports provided: guid, getLoveConnection, getTableName, getWindow, getLoveStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return guid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoveConnection", function() { return getLoveConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTableName", function() { return getTableName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoveStore", function() { return getLoveStore; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
var s4;



s4 = function() {
  var rand;
  rand = (1 + Math.random()) * 0x10000;
  return (rand | 0).toString(16).substring(1);
};

var guid = function() {
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

var getLoveConnection = function(model) {
  var conn;
  conn = Object(underscore__WEBPACK_IMPORTED_MODULE_0__["result"])(model, 'loveConnection');
  return conn || Object(underscore__WEBPACK_IMPORTED_MODULE_0__["result"])(model.collection, 'loveConnection');
};

var getTableName = function(model) {
  var tableName;
  tableName = Object(underscore__WEBPACK_IMPORTED_MODULE_0__["result"])(model, 'tableName');
  return tableName || Object(underscore__WEBPACK_IMPORTED_MODULE_0__["result"])(model.collection, 'tableName');
};

var getWindow = function() {
  if (Object(underscore__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window)) {
    return global;
  } else {
    return window;
  }
};

var getLoveStore = function(model) {
  var store;
  store = Object(underscore__WEBPACK_IMPORTED_MODULE_0__["result"])(model, 'loveStore');
  return store || Object(underscore__WEBPACK_IMPORTED_MODULE_0__["result"])(model.collection, 'loveStore');
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/driver.coffee ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/driver.coffee */"./src/driver.coffee");


/***/ }),

/***/ "backbone":
/*!**************************************************************************************************!*\
  !*** external {"amd":"backbone","commonjs":"backbone","commonjs2":"backbone","root":"Backbone"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_backbone__;

/***/ }),

/***/ "lovefield":
/*!***********************************************************************************************!*\
  !*** external {"amd":"lovefield","commonjs":"lovefield","commonjs2":"lovefield","root":"lf"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lovefield__;

/***/ }),

/***/ "underscore":
/*!*************************************************************************************************!*\
  !*** external {"amd":"underscore","commonjs":"underscore","commonjs2":"underscore","root":"_"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_underscore__;

/***/ })

/******/ });
});
//# sourceMappingURL=backbone.lovefield.js.map