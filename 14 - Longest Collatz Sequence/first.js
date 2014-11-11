'use strict';

/** 
 *  Problem 14: Longest Collatz Sequence
 *  Description: What number under One Million generates 
 *  the longest hailstone sequence?
 *  http://en.wikipedia.org/wiki/Collatz_conjecture
 */

var Solution = function(){

  var memo = [];
  var reminded = 0;

  function hailstone(x){
    var count = 0;
    var n = x;

    if(memo[n]) return memo[n];
    
    while(n > 1){

      if(memo[n]){
        count += memo[n];
        reminded++;
        break;
      }
      
      if( isPowerOfTwo(n) ){
        count += Math.log(n) / Math.log(2);
        break;
      } else {
        count++;
        n = applyCollatzRulesTo(n);
      }
      
    }

    memo[x] = count;
    return count;
    
  };

  function applyCollatzRulesTo(n){
    if (n % 2 === 0) return n/2;
    else return 3 * n + 1;
  }

  function isPowerOfTwo(n){
    // bitwise check
    return (n & (n - 1)) === 0;
  }


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

    // report
    console.log( Date.now() - time + 'ms');
    console.log('Longest: ' + longest);
    console.log('Calls: ' + reminded);

    return longest;
  };

};

module.exports = Solution;




