if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var add = 0, index = 0;
        for (index = 0; index < arr.length; index++) {
            add += arr[index];
        }
        return add;
    },

    remove : function(arr, item) {
        var cleanArr = arr;
        while (arr.indexOf(item) > -1) {
            cleanArr.splice(arr.indexOf(item), 1);
        }
        return cleanArr;
    },
    
    removeWithoutCopy : function(arr, item) {
        return this.remove(arr, item);
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        arr1 = arr1.join(',');
        arr2 = arr2.join(',');

        return (arr1 + ',' + arr2).split(',');

    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        return arr.length - arr.filter(function (value) { return value !== item; }).length;
    },

    duplicates : function(arr) {
        var index, dups = [];
        for (index = 0; index < arr.length; index++) {
            if (this.count(arr, arr[index]) > 1) {
                dups.push(arr[index]);
                arr = this.remove(arr, arr[index]);
            }
        }

        return dups;
    },

    square : function(arr) {
        var index = 0;

        for (index = 0; index < arr.length; index++) {
            arr[index] = arr[index] * arr[index];
        }

        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var positions = [];
        for (var index = 0; index < arr.length; index++) {
            if  ((arr[index] === target) &&  (this.count(arr, target) > 1)) {
                positions.push(index);
            }
        }

        return positions;
    }
  };
});
