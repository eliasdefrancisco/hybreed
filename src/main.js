import '~/src/vendor/libs'
import '~/src/modules/modules'
import App from '~/src/common/app'

$(document).ready(() => {
    Hybreed.start(true)
      .then(() => {
          App.start()
          Broker.channel('main').trigger('start')
      })
})
