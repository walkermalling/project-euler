'use strict';
/* First attempt at problem 16 */

var Solution = function () {
  // hello!
};

Solution.prototype.solve = function (power) {
  var count = 1;
  var arr = [2];
  var limit = power || 1000;
  var sum = 0;

  while (count < limit) {
    count++;
    arr = this.multiplyArray(arr);
  }

  sum = this.sumOfDigits(arr);

  return sum;
};

/**
 * Given an array of integers, return the sum 
 */
Solution.prototype.sumOfDigits = function (arrayOfIntegers) {
  // clone array so original object isn't modified
  var arr = arrayOfIntegers.slice(0); 
  var sum = 0;
  while (arr.length > 0) {
    sum += arr.shift();
  }
  return sum;
}

/**
 * Given an integer, create an array with a single digit of that integer in each index
 * 
 * @return array
 */
Solution.prototype.castNumberToArray = function (num) {
  var n = num;
  var result = [];
  while (n !== 0) {
    result.unshift(n % 10); // 
    n = (n - (n % 10)) / 10; // remove last digit
  }
  return result;
};

/**
 * Multiply a number stored as an array
 *
 * Strategy: 
 * 
 * @return Array
 */
Solution.prototype.multiplyArray = function (arr) {
  var result = [];
  var current = null;
  var count = 0;
  var remainder = 0;
  while (arr.length > 0) {
    count++;
    // double the current digit 
    current = arr.pop() * 2 + remainder;
    remainder = 0;
    // unshift this next digit onto result
    if (current % 10 === current) {
      result.unshift(current);
    } else {
      remainder = 1; 
      result.unshift(current % 10);
    }
  }
  if (remainder === 1) result.unshift(1);
  return result;
};

module.exports = Solution;
