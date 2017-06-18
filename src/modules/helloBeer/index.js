import MainView from './views/main'

let mainView

function start() {
  console.log('Hello Beers Started')
  showMain()
}

function showMain() {

  mainView = new MainView()

  Broker.channel('screen').request('start', {
    type: 'snap',
    contentView: mainView,
    title: 'Beers on fire!',
    menuView: Broker.channel('menu').request('getView')
  })

  mainView.on({
    showMeBeers(numBeers) {
      console.log(`Here you are, ${numBeers} cool beers!`)
      alert(`Here you are, ${numBeers} cool beers!`)
    }
  })
}


// API definition
const API = {
  start
}
Broker.channel('helloBeer').reply(API)
export default API
