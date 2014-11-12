'use strict';
/*
 *  Notes:
 *  No need for the array of divisors to contain numbers below 11
 *  because they are all factors of numbers between 11 and 20. 
 */


module.exports = function(){

  var arr = [20,19,18,17,16,15,14,13,11]; 
  var x = 20;
  var isEvenlyDivisible = false;

  while(!isEvenlyDivisible){
    x += 20; 
    for(var k = 0; k < arr.length; k++){
       if(x % arr[k] !== 0){
         isEvenlyDivisible = false;
         break;
       }else{
         isEvenlyDivisible = true;
       }
    }
  }
  console.log('Solution: ' + x);
  return x;
};
