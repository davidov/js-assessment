if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    var shift = Array.prototype.shift,
        _args = [];

  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function inner (str1) {
            return str + ', ' + str1;
        };
    },

    makeClosures : function(arr, fn) {
        var results = [];

        var makeFunc = function (fn, value) {
            return function () { return fn(value);  };
        };

        for (var index = 0; index < arr.length; index++) {
            results.push(makeFunc(fn, arr[index]));
        }

        return results;
    },

    partial : function(fn, str1, str2) {
        return fn.bind(null , str1, str2);
    },

    useArguments : function() {
        var sum = 0;

        for (var index = 0; index < arguments.length; index ++) {
            sum += arguments[index];
        }

        return sum;
    },

    callIt : function(fn) {
        var func = shift.call(arguments);

        return func.apply(func, arguments);
    },

    partialUsingArguments : function(fn) {
        var preserveFn = fn;
        function toArray(args) {
            return Array.prototype.slice.call(args, 0);
        }
        if (arguments.length > 0) {
            preserveFn = shift.call(arguments);
            _args = toArray(arguments);
        }
        return function func () {
            var fArgs = toArray(arguments);
            if (_args.length > 0) {
                _args = (_args.join(',') + ',' + fArgs.join(',')).split(',');
            } else {
                _args = fArgs;
            }
            return preserveFn.apply(this, _args);
        };
    },

    curryIt : function(fn) {
        function toArray(args) {
            return Array.prototype.slice.call(args);
        }
 
        Function.prototype.curry = function() {
            if (arguments.length<1) {
                return this; //nothing to curry with - return function
            }

            var __method = this;
            var args = toArray(arguments);
            
            return function() {
                return __method.apply(this, args.concat(toArray(arguments)));
            };
        };

        return fn.curry(arguments);
    }
  };
});
