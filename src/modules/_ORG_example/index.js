import ExampleView from './views/example'

var exampleView

function start(model) {
    showExampleView(model)
}

function showExampleView(model) {

    exampleView = new ExampleView({
        model: model
    })

    Broker.channel('screen').request('start', {
        type: 'normal',
        title: 'Example',
        leftButtonOpts: {
            class: 'fa fa-chevron-left',
            callback() {
                Broker.channel('itemsList').trigger('start')
            }
        },
        contentView: exampleView
    })
}


// API definition
const API = {
  start
}
Broker.channel('example').on(API)
export default API
