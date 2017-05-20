import LoginView from './views/login'

var loginView

function start() {
    showLoginView()
}

function showLoginView() {

    loginView = new LoginView()

    Broker.channel('screen').trigger('start', {
        type: 'no-header',
        contentView: loginView
    })

    loginView.on({
        login(user, password) {
            console.log(`Login with ${user} ${password}`)
            localStorage.login = user
            Broker.channel('itemsList').trigger('start')
        }
    })
}

function getUserLogged() {
    return localStorage.login
}

function logout() {
    delete localStorage.login
    showLoginView()
}



// API definition
const API = {
  start,
  getUserLogged,
  logout
}
Broker.channel('login').reply(API)
export default API
