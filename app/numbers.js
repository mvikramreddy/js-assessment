if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        valueAtBit: function (num, bit) {
            // i could do parseint(num, 2) to get the bits then return just the index

            return parseInt(num, 2)[bit];
        },

        base10: function (str) {
            return parseInt(str); //default base 10
        },

        convertToBinary: function (num) {
            if (dec >= 0) {
                return dec.toString(2);
            }
            else {
                return (~dec).toString(2);
            }
        },

        multiply: function (a, b) {
            return a * b;
        }
    };
});

