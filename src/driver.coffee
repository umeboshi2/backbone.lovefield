import Backbone from 'backbone'
import {sync as localSync } from './sync'
import { LoveStore } from './store'

ajaxSync = Backbone.sync

###* Get the local or ajax sync call
# @param {Model} model - Model to sync
# @param {object} options - Options to pass, takes ajaxSync
# @returns {function} The sync method that will be called
###
getSyncMethod = (model, options={}) ->
  forceAjaxSync = options.ajaxSync
  return ajaxSync

Backbone.sync = (method, model, options) ->
  return getSyncMethod(model, options).apply(@, [method, model, options])

