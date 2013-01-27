if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var test = str.match(/\d/g);
        return (test !== null);
    },

    containsRepeatingLetter : function(str) {
        return (/([A-Za-z])\1/.test(str));
    },

    endsWithVowel : function(str) {
        var test = str.toLowerCase().match(/[a, e, i, o, u]$/);
        return (test !== null ? test.length > 0 : false);  
    },

    captureThreeNumbers : function(str) {
        var test = str.match(/([0-9]){3}/);

        return (test ? test[0] : false);
    },

    matchesPattern : function(str) {
        var test = str.match(/^\d{3,3}-\d{3,3}-\d{4,4}$/);

        return (test !== null);
    },
    isUSD : function(str) {
        var test = str.match(/^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/);

        return (test !== null);
    }
  };
});
