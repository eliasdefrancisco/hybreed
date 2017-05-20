import _ from  'underscore' 
import $ from 'jquery'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import Broker from 'backbone.radio'
import Hybreed from 'mhyc'
import Snap from 'snapjs'  // Slide left panel TODO: remove
import ionRangeslider from 'ion-rangeslider'  // Slides bars TODO: remove
import Global from '~/src/modules/global'

window.$ = window.jQuery = global.jQuery = $
window._ = _
window.Backbone = Backbone
window.Marionette = Marionette
window.Broker = Broker
window.Hybreed = Hybreed
window.Global = Global

export {
    _,
    Backbone,
    Marionette,
    Broker,
    Hybreed,
    Snap, // Slide left panel TODO: remove
    ionRangeslider, // Slides bars TODO: remove
    Global
}
