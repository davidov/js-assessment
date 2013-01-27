if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var numSplit = num.toString(2).split('').reverse();
        return parseInt(numSplit[bit - 1], 10);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var divided = num, quotient = divided, reminder, binary = [], result = '';

        while (quotient > 0) {
            reminder = quotient % 2;
            quotient = Math.floor(quotient / 2);
            binary.unshift(reminder);
        }

        result = binary.join('');

        while (result.length < 8) {
            result = '0' + result;
        }

        return result;
    },

    multiply: function(a, b) {
        return parseFloat((a * b).toPrecision(2));
    }
  };
});

