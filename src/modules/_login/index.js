import LoginView from './views/login'

var loginView


function start() {
    showLoginView()
}

function showLoginView() {

    loginView = new LoginView()

    Broker.channel('screen').request('start', {
        type: 'no-header',
        contentView: loginView
    })

    loginView.on({
        login(user, password) {
            console.log(`Login with ${user} ${password}`)
            localStorage.login = user
            Broker.channel('main').request('start')
        }
    })
}

function getUserLogged() {
    return localStorage.login
}

function logout() {
    console.log('logout .....');
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
