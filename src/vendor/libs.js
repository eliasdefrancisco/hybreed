import _ from  'underscore'
import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import Broker from 'backbone.radio'
import Hybreed from 'mhyc'
import Snap from 'snapjs'
import Global from '~/src/modules/_global'
import CMS from '~/src/modules/_cms'

window.$ = window.jQuery = global.jQuery = $
window._ = _
window.Backbone = Backbone
window.Marionette = Marionette
window.Broker = Broker
window.Hybreed = Hybreed
window.Global = Global
window.CMS = CMS



// API
export {
    _,
    Backbone,
    Marionette,
    Broker,
    Hybreed,
    Snap,
    Global,
    CMS
}
