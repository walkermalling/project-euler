'use strict';

/*
 *  find the sides of the pythagorean triangle such that
 *  a + b + c = 1000
 *
 *
 */

module.exports = function(){

  var a,b,c;
  for(c = 1; c < 500; c++){
    for(a = 1; a < 500; a++){   
      b = Math.sqrt( Math.pow(c,2) - Math.pow(a,2) );
      if( b === parseInt(b) ){
        console.log('b is an integer' + [a,b,c]);
        if(a + b + c === 1000){
          console.log([a,b,c]);
          return a * b * c;
        } else {
          console.log('but sum is ' + (a+b+c) );
        }
      }
    }
  }
  return false;

};
