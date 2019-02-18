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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
	g = g || new Function("return this")();
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoveStore = undefined;

var _backbone = __webpack_require__(/*! backbone */ "backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _sync = __webpack_require__(/*! ./sync */ "./src/sync.coffee");

var _store = __webpack_require__(/*! ./store */ "./src/store.coffee");

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.coffee");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Get the local or ajax sync call
 * @param {Model} model - Model to sync
 * @param {object} options - Options to pass, takes ajaxSync
 * @returns {function} The sync method that will be called
 */
var ajaxSync, getSyncMethod;

_backbone2.default.LoveStore = _store.LoveStore;

ajaxSync = _backbone2.default.sync;

getSyncMethod = function getSyncMethod(model) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var forceAjaxSync, hasLoveStore;
  forceAjaxSync = options.ajaxSync;
  hasLoveStore = (0, _utils.getLoveStore)(model);
  if (!forceAjaxSync && hasLoveStore) {
    return _sync.sync;
  } else {
    return ajaxSync;
  }
};

_backbone2.default.sync = function (method, model, options) {
  return getSyncMethod(model, options).apply(this, [method, model, options]);
};

exports.LoveStore = _store.LoveStore;

/***/ }),

/***/ "./src/store.coffee":
/*!**************************!*\
  !*** ./src/store.coffee ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoveStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = __webpack_require__(/*! underscore */ "underscore");

var _lovefield = __webpack_require__(/*! lovefield */ "lovefield");

var _lovefield2 = _interopRequireDefault(_lovefield);

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.coffee");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoveStore = exports.LoveStore = function () {
  function LoveStore(conn) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, LoveStore);

    this.conn = conn;
    this.name = name;
    return;
  }

  _createClass(LoveStore, [{
    key: '_getTable',
    value: function _getTable() {
      return this.conn.getSchema().table(this.name);
    }
  }, {
    key: 'create',
    value: function create(model) {
      var data, row, table;
      table = this._getTable();
      if (!model.id && model.id !== 0) {
        model.id = (0, _utils.guid)();
        model.set(model.idAttribute, model.id);
      }
      data = model.toJSON();
      row = table.createRow(data);
      return this.conn.insert().into(table).values([row]).exec();
    }
  }, {
    key: 'update',
    value: function update(model) {
      var data, q, table;
      table = this._getTable();
      data = model.toJSON();
      q = this.conn.update(table);
      Object.keys(data).forEach(function (key) {
        return q = q.set(table[key], data[key]);
      });
      q = q.where(table.id.eq(data.id));
      return q.exec();
    }
  }, {
    key: 'find',
    value: function find(model, options) {
      var id, idAttribute, q, table;
      table = this._getTable();
      idAttribute = (0, _underscore.result)(model, 'idAttribute');
      id = (0, _underscore.result)(model, idAttribute);
      return q = this.conn.select().from(table).where(table.id.eq(id)).exec().then(function (results) {
        model.set(results[0]);
        return model;
      });
      return q;
    }
  }, {
    key: 'findAll',
    value: function findAll(model, options) {
      var filters, q, table;
      table = this._getTable();
      q = this.conn.select().from(table);
      if (options.data) {
        filters = [];
        Object.keys(options.data).forEach(function (key) {
          var clause;
          clause = table[key].eq(options.data[key]);
          return filters.push(clause);
        });
        if (filters.length > 1) {
          q = q.where(_lovefield2.default.op.and(filters));
        } else {
          q = q.where(filters[0]);
        }
      }
      return q.exec().then(function (results) {
        if (model instanceof Backbone.Collection) {
          return model.set(results);
        } else {
          // FIXME throw error if more
          // than one result for model
          return model.set(results[0]);
        }
      });
    }
  }, {
    key: 'destroy',
    value: function destroy(model, options) {
      var table;
      table = this._getTable();
      return this.conn.delete().from(table).where(table.id.eq(model.id)).exec();
    }
  }]);

  return LoveStore;
}();

/***/ }),

/***/ "./src/sync.coffee":
/*!*************************!*\
  !*** ./src/sync.coffee ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sync = undefined;

var _backbone = __webpack_require__(/*! backbone */ "backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _underscore = __webpack_require__(/*! underscore */ "underscore");

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.coffee");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Get the Deferred status from $ if we have jQuery, otherwise use Backbone's
 *  @returns {boolean} - Whether the request was deferred
 */
var getDeferred;

getDeferred = function getDeferred() {
  if (_backbone2.default.$) {
    return (0, _underscore.result)(_backbone2.default.$, 'Deferred', false);
  }
  return (0, _underscore.result)(_backbone2.default, 'Deferred', false);
};

/** Override Backbone's `sync` method to run against localStorage
 * @param {string} method - One of read/create/update/delete
 * @param {Model} model - Backbone model to sync
 * @param {Object} options - Options object, use `ajaxSync: true` to run the
 *  operation against the server in which case, options will also be passed into
 *  `jQuery.ajax`
 * @returns {undefined}
 */
var sync = exports.sync = function sync(method, model) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var error, errorMessage, id, idAttribute, resp, store;
  store = (0, _utils.getLoveStore)(model);
  resp = void 0;
  try {
    switch (method) {
      case 'read':
        idAttribute = (0, _underscore.result)(model, 'idAttribute');
        id = (0, _underscore.result)(model, idAttribute);
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLoveStore = exports.getWindow = exports.getTableName = exports.getLoveConnection = exports.guid = undefined;

var _underscore = __webpack_require__(/*! underscore */ "underscore");

var s4;

s4 = function s4() {
  var rand;
  rand = (1 + Math.random()) * 0x10000;
  return (rand | 0).toString(16).substring(1);
};

var guid = exports.guid = function guid() {
  return '' + s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

var getLoveConnection = exports.getLoveConnection = function getLoveConnection(model) {
  var conn;
  conn = (0, _underscore.result)(model, 'loveConnection');
  return conn || (0, _underscore.result)(model.collection, 'loveConnection');
};

var getTableName = exports.getTableName = function getTableName(model) {
  var tableName;
  tableName = (0, _underscore.result)(model, 'tableName');
  return tableName || (0, _underscore.result)(model.collection, 'tableName');
};

var getWindow = exports.getWindow = function getWindow() {
  if ((0, _underscore.isUndefined)(window)) {
    return global;
  } else {
    return window;
  }
};

var getLoveStore = exports.getLoveStore = function getLoveStore(model) {
  var store;
  store = (0, _underscore.result)(model, 'loveStore');
  return store || (0, _underscore.result)(model.collection, 'loveStore');
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