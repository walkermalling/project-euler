'use strict';
/*  Project Euler 2 
 *  "Even Fibonacci numbers"
 *  
 *  This solution exploits the "odd, odd, even" pattern
 *  of fibonacci sequences that begin with odd numbers
 */

module.exports = function(max){
  var queue = [1,1]
    , count = 1
    , evensTotal = 0;

  while(queue[0] < max){

    count ++;
    queue.push( queue.shift() + queue[0] );

    if (count === 2){ 
      count = -1;
      evensTotal += queue[1];
    }

  }

  return evensTotal;
};
