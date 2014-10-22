'use strict';
/*  
 * Playing around with testing primes
 */

 module.exports = function(){

    this.isPrime = function(num){
      if(num < 3) return false;
      if(num % 2 === 0) return false;
      for(var k = 3; k < num/2; k = k+2){
        if(num % k === 0) return false;
      }
      return true;
    };

    // main routine

    this.getLargestPrime = function(max){
      var primes = [];
      for(var k = 3; k < max; k = k+2 ){
        if(this.isPrime(k)) primes.push(k);
      }
      return primes[primes.length-1];
    };


 };