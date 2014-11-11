'use strict';

var solution = function(){

  // test if a number is a palindrome

  this.isPalindrome = function(num){
    var store = [];
    while(num > 0){
      store.push(num % 10);
      num = Math.floor(num / 10);
    }
    while(store.length > 1){
      if(store.shift() !== store.pop()) return false;
    }
 
    return true;
  }; 

  // iterate down from products of 3 digit numbers


  this.findLargestPalindrome = function(digits){
    console.time('timer');
    var start = Math.pow(10,digits) - 1; // start at 9s
    var store = [];

    for(var k = start; k > 0; k--){
      for(var m = start; m > 0; m--){
        if(this.isPalindrome(k*m)){
          store.push(k*m);
          break;
        }
      }
    }
    
    // select largest palindrome
    var max = store.reduce(function(a,b){
      if(a > b) return a;
      else return b;
    }); 
    console.timeEnd('timer');
    return max;
  };

  
};

module.exports = solution;
