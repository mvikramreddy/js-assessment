if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['jquery'], function ($) {
    return {
         then: function(callback){
          callback(true);
        }
        },

        manipulateRemoteData: function (url) {
           
            var request = new XMLHttpRequest();
              return {
                then: function(callback) {
                  request.onreadystatechange = function(){
                    if (request.readyState == 4 && request.status >= 200 && request.status < 400) {
                      var result = JSON.parse(request.responseText);
                      return callback(result);
                    }
                  }
                  request.open("GET", url, true);
                  request.send();


        }
    };
});
