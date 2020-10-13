import { result } from 'lodash'

s4 = ->
  rand = (1 + Math.random()) * 0x10000
  return (rand | 0).toString(16).substring(1)

export guid = ->
  return "#{s4()}#{s4()}-#{s4()}-#{s4()}-#{s4()}-#{s4()}#{s4()}#{s4()}"

export getLoveConnection = (model) ->
  conn = result(model, 'loveConnection')
  return conn or result(model.collection, 'loveConnection')

export getTableName = (model) ->
  tableName = result(model, 'tableName')
  return tableName or result(model.collection, 'tableName')
  
export getLoveStore = (model) ->
  store = result(model, 'loveStore')
  return store or result(model.collection, 'loveStore')
  
