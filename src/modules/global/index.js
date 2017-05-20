import {Broker} from '~/src/vendor/libs';

// Here there are stuff accesible for all the project by Broker

function hello() {
  console.log('hello!')
}

function hello2() {
  console.log('hello again!');
}





// API definition
const API = {
  hello,
  hello2
}
Broker.channel('global').reply(API)
export default API
