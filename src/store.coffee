import { guid } from './utils'

export class LoveStore
  constructor: (@conn, @name='') ->
    return
  _getTable: ->
    return @conn.getSchema().table(@name)
  save: ->
    console.warn "lovefield save NOT IMPLEMENTED"
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
    keys = Object.keys data
    q = @conn.update(table)
    keys.forEach (key) ->
      q = q.set(table[key], data[key])
    q = q.where(table.id.eq(data.id))
    return q.exec()
  find: (model) ->
    table = @_getTable()
    q = @conn.select().from(table).where(table.id.eq(model.id))
    .exec()
    return q
  findAll: ->
    table = @_getTable()
    return @conn.select().from(table).exec()
  destroy: (model) ->
    table = @_getTable()
    return @conn.delete().from(table).where(table.id.eq(model.id)).exec()
    
    
