import { result } from 'underscore'
import lf from 'lovefield'
import { guid } from './utils'

export class LoveStore
  constructor: (@conn, @name='') ->
    return
  _getTable: ->
    return @conn.getSchema().table(@name)
  create: (model) ->
    table = @_getTable()
    idAttribute = result(model, 'idAttribute')
    id = result(model, idAttribute)
    if not id and id isnt 0
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
    idAttribute = result(model, 'idAttribute')
    id = result(model, idAttribute)
    return q = @conn.select().from(table).where(table.id.eq(id))
    .exec().then (results) ->
      model.set results[0]
      return model
    return q
  findAll: (model, options) ->
    table = @_getTable()
    q = @conn.select().from(table)
    if options.data
      filters = []
      Object.keys(options.data).forEach (key) ->
        clause = table[key].eq(options.data[key])
        filters.push clause
      if filters.length > 1
        q = q.where(lf.op.and(filters))
      else
        q = q.where(filters[0])
    return q.exec().then (results) ->
      if model instanceof Backbone.Collection
        return model.set results
      else
        # FIXME throw error if more
        # than one result for model
        return model.set results[0]
  destroy: (model, options) ->
    table = @_getTable()
    return @conn.delete().from(table).where(table.id.eq(model.id)).exec()
    
    
