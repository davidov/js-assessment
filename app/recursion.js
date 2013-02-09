if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, scanDir) {
        var files = [], dirs = [];

        function browseToSelectedDir(data) {
            for (var prop in data) {
                var data_files = data.files || data[prop].files,
                    data_dir = data.dir || data[prop].dir;
                if (data_files) {
                    if ((data_dir === scanDir) && (dirs.indexOf(data_dir) === -1)) {
                        dirs.push(scanDir);
                        return listDirsAndFiles(data_files, data_dir);
                    } else {
                        browseToSelectedDir(data.files);
                    }
                }
            }

            return files;
        }

        function listDirsAndFiles (data, dirName) { 
            function wasDirScaned (dirName) {
                return (dirs.indexOf(dirName) > -1);
            }

            for (var prop in data) {            
                if ((prop !== 'dir') && (typeof data[prop] === 'string')) {
                    if (wasDirScaned(dirName)) {
                        files.push(data[prop]);
                    }
                } else {
                    var data_files = data.files || data[prop].files,
                        data_dir = data.dir || data[prop].dir;
                    if (data_files) {
                        if (scanDir) {
                            if (dirs.indexOf(scanDir) === 0) {
                                dirs.push(data_dir);
                                listDirsAndFiles(data_files, data_dir);                                
                            }
                        } else {
                            if (!wasDirScaned(data_dir)) {
                                dirs.push(data_dir);
                                listDirsAndFiles(data_files, data_dir);
                            }
                        }
                    }
                }
            }
            return files;
        }

        if (scanDir) {
            return browseToSelectedDir(data); 
        } else {
            return listDirsAndFiles(data);
        }
    },

    permute: function(arr) {
        var permArr = [], usedChars = [];
        
        function permuteArray(input) {
           var i, ch;
            for (i = 0; i < input.length; i++) {
                ch = input.splice(i, 1)[0];
                usedChars.push(ch);
                if (input.length === 0) {
                    permArr.push(usedChars.slice());
                }
                permuteArray(input);
                input.splice(i, 0, ch);
                usedChars.pop();
            }
            return permArr;
        }

        return permuteArray(arr);
    }
  };
});
