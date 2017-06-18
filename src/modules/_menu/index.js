import MenuView from './views/menu'

function getView() {

    var menuView = new MenuView()

    menuView.on({
        logoutPressed() {
          if(confirm('Are you sure you want to logout?')) {
              console.log('confirm == true');
              Broker.channel('login').request('logout')
          }
        },

        helloBeerPressed() {
          Broker.channel('helloBeer').request('start')
        }
    })

    return menuView
}



// API definition
const API = {
  getView
}
Broker.channel('menu').reply(API)
export default API
