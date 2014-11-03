'use strict'

// solution to problem 1

module.exports = function(limit){

  var multiples = []
  , sum = 0;

  function retain(num){
    if(multiples.indexOf(num) === -1) multiples.push(num);
  }

  for(var k = 0; k < limit; k++){
    if ( k % 3 === 0 ) retain(k);
    else if ( k % 5 === 0 ) retain(k);
  }

  sum = multiples.reduce(function(a, b){
    return a + b;
  });

  return sum;

};




