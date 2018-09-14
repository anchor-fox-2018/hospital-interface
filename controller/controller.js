const Employee = require('../model/model.js');
const View = require('../view/view.js')

class Controller {
  constructor() {}

  static register(objData) {
    Employee.register(objData, (objData, fetchData) => {
      View.register(objData, fetchData);
    })
  }
}

module.exports = Controller
