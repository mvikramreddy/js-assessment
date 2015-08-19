if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
        return {
        name: str1,
        department: str2,
        printme : function(){
          return "" + this.name + ", test";
        }
      }
    }
  };
});

