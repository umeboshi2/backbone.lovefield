import { isUndefined, result } from 'underscore'

export getLoveConnection = (model) ->
  conn = result(model, 'loveConnection')
  return conn or result(model.collection, 'loveConnection')

export getTableName = (model) ->
  tableName = result(model, 'tableName')
  return tableName or result(model.collection, 'tableName')
  
export getWindow = ->
  return if isUndefined(window) then global else window
  
