import DemoView from './views/demo'

function start() {
    showDemoView()
}

function showDemoView() {

    const demoView = new DemoView()

    Broker.channel('screen').request('start', {
        type: 'snap',
        title: 'Materialize Demo',
        contentView: demoView,
        menuView: Broker.channel('menu').request('getView')
    })
}


// API definition
const API = {
  start
}
Broker.channel('demoMaterialize').reply(API)
export default API
