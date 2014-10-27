'use strict';
/**
 *  Math Convenience Methods
 *      - getFactorsOf
 *      - isFactorOf
 *      - getFactorsOf
 *      - isNaturalNumber
 */

module.exports = function(){

  this.getFactorsOf = function(n){
    var factors = [];
    for(var k = 1; k <= Math.sqrt(n); k++){
      if(n % k === 0){
        factors.push(k);
        factors.push(n/k);
      }
    }
    return factors;

  };

  this.isFactorOf = function(n, x){
    if( !this.isNaturalNumber([n,x]) ){
      throw new TypeError('invalid argument type');
    }
    if( x % n === 0 ) return true;
    else return false;
  };

  this.isPrime = function(n){
    if( !this.isNaturalNumber(n) ){
      throw new TypeError('invalid argument type');
    }
    for(var k = 2; k < n; k++){
      if(n % k === 0) return false;
    }
    return true;
  };

  this.isNaturalNumber = function(x){
    var n = Array.isArray(x) ? x : [x];
    for(var k = 0; k < n.length; k++){
      if(n[k] !== Math.abs(parseInt(n[k]))) return false;
    }
    return true;
  };

};
