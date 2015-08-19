if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function () {
    return {
        globals: function () {
            var myObject = {
                name: 'Jory'
            };

            return myObject;
        },

        functions: function (flag) {

           var getValue =  function (flag) {
                if (flag) {
                    return 'a';
                }
                else {
                    return 'b';
                }
            }

            return getValue;
        },

        parseInt: function (num) {
            return Integer.parseInt(num, 10);
        },

        identity: function (val1, val2) {
            if (val1 === val2) {
                console.log(val1 + ' is the same as ' + val2);
                return true;
            } else if (typeof val1 === 'object' && typeof val2 === 'object'
                    && val1 !== null && val2 !== null) {
                var val1Keys = Object.keys(val1);
                var val2Keys = Object.keys(val2);

                var arr1Length = val1Keys.length;
                if (arr1Length === val2Keys.length) {
                    for (var i = 0; i < arr1Length; i++) {
                        console.log('Looking at key ' + val1Keys[i]);
                        if (val1Keys[i] === val2Keys[i]) {
                            console.log('Checking whether ' + val1[val1Keys[i]] +
                                ' is the same as ' + val2[val2Keys[i]]);
                            if (!deepEqual(val1[val1Keys[i]], val2[val2Keys[i]])) {
                                return false;
                            }
                        } else {
                            // not the same value for the current key
                            return false;
                        }
                    }
                } else {
                    // not the same length of keys
                    return false;
                }

                return true;
            } else {
                // they're either not objects or null
                return false;
            }
        }
    };
});
