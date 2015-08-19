if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        listFiles: function (data, dirName) {

            var files = [];
            var directories = [];

            function GetFiles(dir) {

                directories.push(dir.dir);
                if (undefined != dir && dir.files.length > 0) {
                    for (int = 0; i < dir.files.length; i++) {
                        if (typeof dir.files[i] === 'string') {

                            if (directories.indexOf(dirName)) {
                                files.push(dir.files[i])
                            }
                        }
                        else {
                            GetFiles(dir.files[i])
                        }
                    }
                }

                directories.pop()
            }

            return files;
        },

        permute: function (arr) {
            // no idea
        }
    };
});
