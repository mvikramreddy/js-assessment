if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        indexOf: function (arr, item) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == item) return i;
            }
            return -1;
        },

        sum: function (arr) {
            var total = 0;
            for (var i = 0; i < arr.length; i++) {
                total += arr[i];
            }
            return total;
        },

        remove: function (arr, item) {
            var ret = [];

            for (var i = 0, len = arr.length; i < len; i++) {
              if (arr[i] !== item) {
                ret.push(arr[i]);
              }
            }

            return ret;
        },

        removeWithoutCopy: function (arr, item) {
            var index = arr.indexOf(item);

            if (index > -1) {
                arr.splice(index, 1);
            }

            return arr;
        },

        append: function (arr, item) {
            arr.push(item);
            return arr; //return arr.splice(arr.length, 0, item); // or arr.push(item);
        },

        truncate: function (arr) {
            arr.pop();
            return arr; // or arr.length = 0; 
        },

        prepend: function (arr, item) {
            arr.unshift(item);
            return arr; //return arr.splice(0, 0, item); // arr.unshift(item);
        },

        curtail: function (arr) {
            arr.shift(arr);
            return arr;
        },

        concat: function (arr1, arr2) {
            return arr1.concat(arr2);
        },

        insert: function (arr, item, index) {
            return arr.splice(index, 0, item);
        },

        count: function (arr, item) {
            var count = 0;

            for (var i = 0, len = arr.length; i < len; i++) {
              if (arr[i] === item) {
                count++;
              }
            }

            return count;
        },

        duplicates: function (arr) {
            var duplicateArr = [];
            arr = arr.sort();

            for (var i = index; i < arr.length - 1; i++) {
                if (arr[i] === itema[i + 1]) {
                    duplicateArr.push(arr[i]);
                }
            }

            return duplicateArr;
        },

        square: function (arr) {
            squareArr = [];

            for (var i = 0; i < arr.length; i++) {
                squareArr.push(arr[i] * arr[i]);
            }

            return squareArr;
        },

        findAllOccurrences: function (arr, target) {
            var indexes = [], i = -1;
            while ((i = arr.indexOf(target, i + 1)) != -1) {
                indexes.push(i);
            }
            return indexes;
        }
    };
});
