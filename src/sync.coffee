import { result } from 'lodash'
import { getLoveStore } from './utils'

###* Override Backbone's `sync` method to run against localStorage
# @param {string} method - One of read/create/update/delete
# @param {Model} model - Backbone model to sync
# @param {Object} options - Options object, use `ajaxSync: true` to run the
#  operation against the server in which case, options will also be passed into
#  `jQuery.ajax`
# @returns {undefined}
###
export sync = (method, model, options={}) ->
  store = getLoveStore model
  resp = undefined
  try
    switch (method)
      when 'read'
        idAttribute = result(model, 'idAttribute')
        id = result(model, idAttribute)
        resp = if id then store.find(model, options) else store.findAll(model, options) #noqa
      when 'create'
        resp = store.create(model, options)
      when 'patch', 'update'
        resp = store.update(model, options)
      when 'delete'
        resp = store.destroy(model, options)
  catch error
    if error.code == 22
      errorMessage = 'Private browsing is unsupported'
    else
      errorMessage = error.message

  if resp
    # compatibility with $.ajax
    resp.done = resp.then
    resp.fail = resp.catch
    if options.success
      options.success.call model, resp, options
  else
    errorMessage = if errorMessage then errorMessage else "Record Not Found"
    if options.error
      options.error.call model, errorMessage, options

  # add compatibility with $.ajax
  # always execute callback for success and error
  if options.complete
    options.complete.call model, resp

  return resp
  
