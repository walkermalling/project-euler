'use strict';
/*  Project Euler 3
 *  "Largets Prime Factor"
 *
 *  What is the largest prime factor of the number 600851475143 ?
 */

 module.exports = function(){

  this.getLargestPrimeFactorOf = function(num){
    var factors = [];
    var primes = [];

    var numerator = num;
    var denominator = 2;

    console.log('\n\tSolving for ' + num);

    while(denominator <= numerator){
      var quotient = numerator / denominator;
      if(quotient % 1 === 0){
        factors.push(quotient);
        primes.push(denominator);
        numerator = quotient;
      } else {
        denominator++;
      }
    }

    console.log('\t' + primes);

    return primes[primes.length-1] || false;

  };

 };