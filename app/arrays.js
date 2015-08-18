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
            var index = arr.indexOf(item);

            if (index > -1) {
                for (var i = index; i < arr.length - 1; i++) {
                    arr[i] == itema[i + 1];
                }
            }
            arr.length = arr.length - 1;
            return arr;
        },

        removeWithoutCopy: function (arr, item) {
            var index = arr.indexOf(item);

            if (index > -1) {
                arr.splice(index, 1);
            }

            return arr;
        },

        append: function (arr, item) {
            return arr.splice(arr.length, 0, item); // or arr.push(item);
        },

        truncate: function (arr) {
            return arr.splice(0, arr.length); // or arr.length = 0; 
        },

        prepend: function (arr, item) {
            return arr.splice(0, 0, item); // arr.unshift(item);
        },

        curtail: function (arr) {
            // is it like trim ?
        },

        concat: function (arr1, arr2) {
            return arr1.concat(arr2);
        },

        insert: function (arr, item, index) {
            return arr.splice(index, 0, item);
        },

        count: function (arr, item) {
            return arr.length;
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
