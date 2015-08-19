if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['jquery'], function ($) {
  
  async : function(value) {
      //register multiple callbacks into callback queues
    var dfd = $.Deferred();
    setTimeout(function() {
      dfd.resolve(value);
    }, 10);
    return dfd.promise();
  }

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
