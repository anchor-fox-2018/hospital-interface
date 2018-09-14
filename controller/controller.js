const Employee = require('../model/model.js');
const View = require('../view/view.js')

class Controller {
  constructor() {}

  static register(objData) {
    Employee.register(objData, (objData, fetchData) => {
      View.register(objData, fetchData);
    })
  }

  static login(objLogin) {
    Employee.login(objLogin, (status, objLogin) => {
      View.login(status, objLogin)
    })
  }

}// end class controller

module.exports = Controller
