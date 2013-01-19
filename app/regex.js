if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var test = str.match(/\d/g);
        return (test !== null);
    },

    containsRepeatingLetter : function(str) {
        var test = str.match(/[a-z,A-Z]/g);
        return (test !== null ? test.length > 1 : false);
    },

    endsWithVowel : function(str) {
        var test = str.toLowerCase().match(/[a, e, i, o, u]$/);
        return (test !== null ? test.length > 1 : false);  
    },

    captureThreeNumbers : function(str) {

    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
