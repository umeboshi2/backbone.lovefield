import Backbone from 'backbone'

import {sync as localSync } from './sync'
import { LoveStore } from './store'
import { getLoveStore } from './utils'

Backbone.LoveStore = LoveStore
ajaxSync = Backbone.sync

###* Get the local or ajax sync call
# @param {Model} model - Model to sync
# @param {object} options - Options to pass, takes ajaxSync
# @returns {function} The sync method that will be called
###
getSyncMethod = (model, options={}) ->
  forceAjaxSync = options.ajaxSync
  hasLoveStore = getLoveStore(model)
  return if not forceAjaxSync and hasLoveStore then localSync else ajaxSync
  
Backbone.sync = (method, model, options) ->
  return getSyncMethod(model, options).apply(@, [method, model, options])

export { LoveStore }
