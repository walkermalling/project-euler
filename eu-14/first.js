'use strict';

/** 
 *  Problem 14: Longest Collatz Sequence
 *  Description: What number under One Million generates 
 *  the longest hailstone sequence?
 *  http://en.wikipedia.org/wiki/Collatz_conjecture
 */

var Solution = function(){

  this.Hailstone = function(n){
    this.seed = n;
    this.sequence = [];
    this.length = 0;
    while(n > 1){
      this.sequence.push(n);
      if(n % 2 === 0) n = n/2;
      else n = 3 * n + 1;
    }
    this.length = this.sequence.length;
  };

  this.solve = function(n){
    var time = Date.now();
    var max = n || 1000000
      , longest = new this.Hailstone(1)
      , temp;

    for(var x = 2; x < max; x++){
      if( (x & (x - 1)) === 0 ){
        temp = Math.log(x) / Math.log(2); 
      }
      else{
        temp = new this.Hailstone(x);
      }
      if( temp.length > longest.length ) longest = temp;
    }
    console.dir( Date.now() - time + 'ms');
    return longest;
  };

};

module.exports = Solution;




