import { guid } from './utils'

export class LoveStore
  constructor: (@conn, @name='') ->
    return
  _getTable: ->
    return @conn.getSchema().table(@name)
  create: (model) ->
    table = @_getTable()
    if not model.id and model.id isnt 0
      model.id = guid()
      model.set(model.idAttribute, model.id)
    data = model.toJSON()
    row = table.createRow data
    return @conn.insert().into(table).values([row]).exec()
  update: (model) ->
    table = @_getTable()
    data = model.toJSON()
    q = @conn.update(table)
    Object.keys(data).forEach (key) ->
      q = q.set(table[key], data[key])
    q = q.where(table.id.eq(data.id))
    return q.exec()
  find: (model, options) ->
    table = @_getTable()
    return q = @conn.select().from(table).where(table.id.eq(model.id))
    .exec().then (results) ->
      model.set results[0]
      return model
    return q
  findAll: (collection, options) ->
    table = @_getTable()
    return @conn.select().from(table).exec().then (results) ->
      return collection.set results
  destroy: (model, options) ->
    table = @_getTable()
    return @conn.delete().from(table).where(table.id.eq(model.id)).exec()
    
    
