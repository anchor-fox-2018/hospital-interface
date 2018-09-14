class View {
  static register(objData, fetchData) {
    console.log(`You just register ${JSON.stringify(objData)}. Total employee: ${fetchData.length}`);
  }

  static login(status, objLogin) {
    if (status === true) {
      console.log(`User ${objLogin.username} logged in successfully`);
    } else if (status === false){
      console.log(`Username / password wrong`);
    }
  }


} // end class view

module.exports = View
