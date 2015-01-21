'use strict';
/* First attempt at problem 17 */

var Solution = function () {
  
  function accumulate (min, max) {
    // iterate up to the designated number
    // keep an array of results for testing purposes
    var series = []
    for (var k = 1; k <= max; k++) {
      series[k] = process(k);
    }

    var letterCount = 0;
    for (var k = 1;  k < series.length; k++) {
      letterCount += series[k];
    }
    return letterCount;
  }

  /**
   * Process a given number
   *   
   * @return integer
   */
  function process (number) {
    return count( assemble(number) );
  }


  function assemble (number) {
    var n = number;
    var name = '';

    if (n > 999) {
      name += spellSingleDigit( leadDigitOf(n) );
      name += ' thousand';
      n = n % 1000;
    }

    if (n > 99) {
      name += spellSingleDigit( leadDigitOf(n) );
      name += ' hundred';
      n = n % 100;
    }
        
    if (n > 0) {
      // use conjuction if necessary
      if (name !== '') name += ' and ';
      name += spellDoubleDigit(n);
    }

    return name;
  }

  /**
   * Count removes spaces and dashes in the number name 
   * Return the length of the resulting string
   */
  function count (name) {
    if (!typeof name === 'string') throw Error('invalid argument');
    var str = name.replace(/\s|-/g, '');
    return str.length;
  }

  /**
   * Spell Single Digit Number will return and empty string if supplied
   * a zero
   * 
   * @return string
   */
  function spellSingleDigit (number) {
    validate(number, 0, 9);
    var arr = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 
      'eight', 'nine'
    ];
    return arr[number];
  }

  /**
   * Spell Double Digit Number will gracefully fall back if the argument is 
   * a single digit number, or zero.
   * 
   * @return string
   */
  function spellDoubleDigit (number) {
    validate(number);
    // re-route if single digit value
    if (number < 10) return spellSingleDigit(number);

    var teens = [];
    var deca = [];
    teens[10] = 'ten';
    teens[11] = 'eleven';
    teens[12] = 'twelve';
    teens[13] = 'thirteen';
    teens[14] = 'fourteen';
    teens[15] = 'fifteen';
    teens[16] = 'sixteen';
    teens[17] = 'seventeen';
    teens[18] = 'eighteen';
    teens[19] = 'nineteen';

    deca[20] = 'twenty';
    deca[30] = 'thirty';
    deca[40] = 'forty';
    deca[50] = 'fifty';
    deca[60] = 'sixty';
    deca[70] = 'seventy';
    deca[80] = 'eighty';
    deca[90] = 'ninety';

    var result = '';
    if (number < 20) {
      result = teens[number];
    } if (number >= 20) {
      result = deca[number - number % 10];
      if (number % 10 > 0) {
        result += '-' + spellSingleDigit(number % 10);
      }
    }
    return result;
  }

  // strip to a given digit
  function strip (number, mod) {
    return (number - (number % mod)) / mod;
  }

  /**
   * Get the lead digit of a number
   * @return integer 
   */
  function leadDigitOf (number) { 
    // return if single digit
    if (number < 10) return 0;

    var leadDigit;
    var mod = 10;

    // loop until we get a power of ten with the same digits as the number
    while (true) {
      leadDigit = strip(number, mod);
      if (leadDigit > 9)
        mod = mod * 10;
      else 
        break;
    }

    var leadDigit = strip(number, mod);
    // e.g: 425 - (425 % 100 = 25) / 100 = 4
    
    return leadDigit;
  }

  

  /**
   * Validation Helper
   *
   * Given an number and a range, validate that the number is range, and 
   * that it is of correct type
   */
  function validate (number, min, max) {
    // if no range is provided, just check if it is an integer
    if (!min || !max) return isInteger(number);
    // otherwise, validate range parameters
    if (validate(min) && validate(max)) {
      // throw error if number is not in range
      if (number < min || number > max || !isInteger(number)) {
        throw Error('number argument not in range');
      } else {
        return true;
      }
    }
    return false;
  }

  function isInteger (number) {
    return typeof number === 'number' && number === parseInt(number);
  }

  /**
   * Expose Methods for Testing
   */
  this.methods = {
    'spellSingleDigit': spellSingleDigit,
    'spellDoubleDigit': spellDoubleDigit,
    'process': process,
    'accumulate' : accumulate
  }

};

module.exports = Solution;