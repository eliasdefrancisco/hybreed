function start() {
    // if(Broker.channel('login').request('getUserLogged')) {
    //     Broker.channel('itemsList').request('start')
    // } else {
    //     Broker.channel('login').request('start')
    // }
    Broker.channel('demoMaterialize').request('start')
}


// API definition
const API = {
  start
}
Broker.channel('main').reply(API)
export default API
