if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        containsNumber: function (str) {
            var pattern = "/^\d+$/";
            return pattern.test(str);
        },

        containsRepeatingLetter: function (str) {
            var pattern = "/([a-zA-Z]).*?\1/";
            return pattern.test(str);
        },

        endsWithVowel: function (str) {
            var pattern = "/[aeiou]/";
            return pattern.test(str[str.length - 1]);
        },

        captureThreeNumbers: function (str) {

        },

        matchesPattern: function (str) {
            var pattern = "????";
            return pattern.test(str);
        },
        isUSD: function (str) {
           var pattern = "^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$";
            return pattern.test(str); 
        }
    };
});
