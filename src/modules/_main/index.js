function start() {
    if(Broker.channel('login').request('getUserLogged')) {
        Broker.channel('helloBeer').request('start')
    } else {
        Broker.channel('login').request('start')
    }
}


// API definition
const API = {
  start
}
Broker.channel('main').reply(API)
export default API
