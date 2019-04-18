const fs = require("fs")
const resemble = require("node-resemble-js")
const helper = require("./test-helper")

module.exports = {
  'Testing Login with successful validation - text' : function (browser) {
      helper.login(browser,{username : "admin", password : "12345", url : 'http://testing-ground.scraping.pro/login'})
      .assert.containsText('#case_login', 'WELCOME')
      .end();
  },

  'Testing Login with successful validation - image' : function (browser) {
       helper.login(browser,{username : "admin", password : "12345", url : 'http://testing-ground.scraping.pro/login'})
      .getLocationInView('#case_login')
      .saveScreenshot('./pages/login.png')
      .end(() => {
        resemble("./pages/login.png").compareTo("./pages/loginmanual.png").onComplete(function(data){
          console.log(data);
        });
      });
    },

  'Testing Login with invalid credential validation - text' : function (browser) {
      helper.login(browser,{username : "username", password : "password", url : 'http://testing-ground.scraping.pro/login'})
      .assert.containsText('.error', 'ACCESS DENIED!')
      .end();
  },
  'Testing Login with invalid credential validation - image' : function (browser) {
       helper.login(browser,{username : "username", password : "password", url : 'http://testing-ground.scraping.pro/login'})
      .getLocationInView('.error')
      .saveScreenshot('./pages/accessdenied.png')
      .end(() => {

        resemble("./pages/accessdeniedmanual.png").compareTo("./pages/accessdenied.png").onComplete(function(data){
          console.log(data);
        });

      });
  },


};
