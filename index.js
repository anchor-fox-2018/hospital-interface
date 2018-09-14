let Controller = require('./controller/controller.js');

let command = process.argv[2];

if (command === 'register') {
  let objData = {
    username: process.argv[3],
    password: process.argv[4],
    role: process.argv[5]
  }
  Controller.register(objData);
} else if (command === 'login') {
  let objLogin = {
    username: process.argv[3],
    password: process.argv[4]
  }
  Controller.login(objLogin);
}else {
  console.log('An error occured');
}
