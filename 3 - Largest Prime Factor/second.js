'use strict';

 module.exports = function(num){

  var factors = []
    , primes = []
    , numerator = num
    , denominator = 2;

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

  return primes[primes.length-1] || 0;

 };