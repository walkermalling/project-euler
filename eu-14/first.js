'use strict';

/** 
 *  Problem 14: Longest Collatz Sequence
 *  Description: What number under One Million generates 
 *  the longest hailstone sequence?
 *  http://en.wikipedia.org/wiki/Collatz_conjecture
 */

var Solution = function(){

  var memo = [];
  var repeats = 0;

  function hailstone(x){
    var count = 0;
    var n = x;

    if(memo[n]){
      repeats++;
      return memo[n];
    }

    while(n > 1){
      if(memo[n]){
        count += memo[n];
        break;
      } else {
        count++;
        if( (x & (x - 1)) === 0 ){
          count += Math.log(x) / Math.log(2);
          n = 1;
        } else if (n % 2 === 0) {
          n = n/2;
        } else {
          n = 3 * n + 1;
        }
      }
    }

    memo[x] = count;
    return count;
    
  };

  this.solve = function(n){
    console.log('\nSolving for ' + n);
    var time = Date.now();
    var max = n || 1000000
      , longest = hailstone(1)
      , temp;

    for(var x = 2; x < max; x++){
      temp = hailstone(x);
      if(temp > longest) longest = temp;
    }

    console.log( Date.now() - time + 'ms');
    console.log('Longest: ' + longest);
    console.log('Repeats: ' + repeats);
    return longest;
  };

};

module.exports = Solution;




