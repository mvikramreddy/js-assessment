if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        argsAsArray: function (fn, arr) {
            return fn.apply(fn, arr);
        },

        speak: function (fn, obj) {
            return fn.call(obj);
        },

        functionFunction: function (str) {
            return function (str2) {
                return str + ", " + str2;
            }
        },

        makeClosures: function (arr, fn) {
          return arr.map(function(item){
            return (function(item){
              return function(){
                return fn(item);
              }
            })(item);
          });
        },

        partial: function (fn, str1, str2) {
            var str3 = str1 + ", " + str2;
            return function (str4) {
                return str3 + str4;
            }
        },

        useArguments: function () {
            var args = [];
            for (var i in arguments) {
            args.push(arguments[i])
            }
      
            return args.reduce(function(prev, current){
            return prev  + current;
            });
        },

        callIt: function (fn) {
            return fn.apply(fn, Array.prototype.slice.call(arguments, 1));
        },

        partialUsingArguments: function (fn) {
             var str3 = str1 + ", " + str2;
              return function(str4){
                return str3 + str4;
              }
        },

        curryIt: function (fn) {
            var args = Array.prototype.slice.call(arguments, 1);

            return function(){
            var _args = args.concat(Array.prototype.slice.call(arguments));
            return fn.apply(null, _args);
            }
        }
    };
});
