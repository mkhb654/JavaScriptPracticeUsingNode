///**
// * Created by mkaleem on 9/27/14.
// */
//var assert = require ('assert');
//var selenium-server-standalone-2.42.2jar = require ('server-standalone');
//  test= require('selenium-server);
//      webdriver =require('selenium-webdriver');
//
//
//
//test.describe('google search', function(){
//    test.it('should work', function )
//}
var webdriver = require('selenium-webdriver'),
    SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;

var server = new SeleniumServer(pathToSeleniumJar, {
    port: 4444
});

server.start();

var driver = new webdriver.Builder().
    usingServer(server.address()).
    withCapabilities(webdriver.Capabilities.firefox()).
    build();
// ...
