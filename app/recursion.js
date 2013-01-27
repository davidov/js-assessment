if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    var results = [];
  return {
    listFiles: function(data, dirName) {
        for (var prop in data) {            
            if ((prop !== 'dir') && (typeof data[prop] === 'string')) {
                results.push(data[prop]);
            } else {
                if (data.files !== undefined) {
                    this.listFiles(data.files, data.dir);
                } else {
                    if (data[prop].files !== undefined) {
                        this.listFiles(data[prop].files, data[prop].dir);
                    }
                }
            }
        }

        return results;
    },

    permute: function(arr) {

    }
  };
});
