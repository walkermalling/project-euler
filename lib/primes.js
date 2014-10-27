'use strict';
/**
 *  Convenience Methods
 *  
 */

module.exports = function(){

  this.isMultipleOf = function(n, x){
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
      if(n % k === 0){
        return false;
      }
    }
    return true;
  };

  this.isNaturalNumber = function(n){
    if(typeof n === 'object'){
      for(var k = 0; k < n.length; k++){
        if(invalid(n[k])) return false;
      }
    } else {
      if(invalid(n)) return false;
    }
    return true;

    function invalid(n){
      if(n === Math.abs(parseInt(n))) return false;
      else return true;
    }
  };

};
