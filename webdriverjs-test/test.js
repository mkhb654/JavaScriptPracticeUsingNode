/**
 * Created by mkaleem on 9/27/14.
 */

var webdriverio = require('webdriverio');

var options = {
    desiredCapabilites: {
        browerName: 'firefox'

    }
};

webdriverio
   .remote(options)
   .init()
   .url('http://www.google.com')
   .title(function (err, res){
        console.log('Title was: ' + res.value);

    })
     .end();