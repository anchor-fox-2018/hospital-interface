let Controller = require('./controller/controller.js');

let command = process.argv[2];
let objData = {
  username: process.argv[3],
  password: process.argv[4],
  role: process.argv[5]
}

if (command === 'register') {
  Controller.register(objData);
} else {
  console.log('An error occured');
}
