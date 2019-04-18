module.exports = {
  login : function(browser,creds){
    browser
      .url(creds.url)
      .waitForElementVisible('body')
      .setValue('input[name=usr]', creds.username)
      .setValue('input[name=pwd]', creds.password)
      .waitForElementVisible('input[type=submit]')
      .click('input[type=submit]')
      .pause(1000)
      return browser;
  },
}
