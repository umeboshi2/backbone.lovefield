import Bb from 'backbone'
import { isUndefined, result } from 'underscore'
import { getLoveStore } from './utils'
###* Get the Deferred status from $ if we have jQuery, otherwise use Backbone's
#  @returns {boolean} - Whether the request was deferred
###
getDeferred = ->
  if Bb.$
    return result(Bb.$, 'Deferred', false)
  return result(Bb, 'Deferred', false)


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
  syncDfd = getDeferred()
  try
    switch (method)
      when 'read'
        resp = if model.id then store.find(model, options) else store.findAll(model, options) #noqa
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
    if options.success
      options.success.call model, resp, options
    if syncDfd
      syncDfd.resolve resp
  else
    errorMessage = if errorMessage then errorMessage else "Record Not Found"
    if options.error
      options.error.call model, errorMessage, options
    if syncDfd
      syncDfd.reject errorMessage

  # add compatibility with $.ajax
  # always execute callback for success and error
  if options.complete
    options.complete.call model, resp

  return syncDfd and syncDfd.promise()
