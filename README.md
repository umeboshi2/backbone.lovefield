# backbone.lovefield
[lovefield](https://google.github.io/lovefield/) backend for 
[backbone](http://backbonejs.org/).

This adapter is inspired by 
[backbone.localStorage](https://github.com/jeromegn/Backbone.localStorage) 
and [backbone-indexeddb](https://github.com/superfeedr/indexeddb-backbonejs-adapter).  I wanted to use more than localStorage, yet backbone-indexeddb 
wouldn't play well with [backbone.validation](https://github.com/thedersen/backbone.validation).

```javascript
import Backbone from 'backbone';
import lf from 'lovefield';
import {LoveStore} from 'backbone.lovefield';

// Create schema and make sure connection
// is available before defining models and collections.
// sb = lf.schema.create('dbname', 1);
// conn = undefined;
// sb.connect().then(function (db){conn=db;})

const TableStore = new LoveStore(conn, 'tablename');

const MyModel = Backbone.Model.extend({
	loveStore: TableStore
});

const MyCollection = Backbone.Collection.extend({
	loveStore: TableStore,
	model: MyModel
});

```

