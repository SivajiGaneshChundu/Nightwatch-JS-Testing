module.exports = function (browser)
{
  this.openBrowser = function()
  {
    browser
    .WindowMaximize()
    .url('http://testing-ground.scraping.pro/login')
    .waitForElementVisible('body',1000);
    return browser
  };
  this.adminLogin = function ()
  {
    browser
    .setValue ('#usr' , 'admin')
    .setValue ('#pwd', '12345')
    .click( '#case_login > form > input[type="submit"]:nth-child(5)')
  };
  return this;
  }
