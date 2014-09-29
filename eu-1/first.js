'use strict'

// solution to problem 1

var Solution = function(){
  this.multiples = [];
  this.sum = 0;
  this.rules = {min: 0, max: 1000};
};

Solution.prototype.sumUpTo = function(limit){

  if( !this.validate(limit) ) return false;

   for(var k = 0; k < limit; k++){
    if ( k % 3 === 0 ) this.retain( k );
    else if ( k % 5 === 0 ) this.retain ( k );
  }

  this.sum = this.multiples.reduce(function(a, b){
    return a + b;
  });

  return this.sum;

};

Solution.prototype.retain = function(num){
  if( this.multiples.indexOf(num) === -1) this.multiples.push(num);
};

Solution.prototype.validate = function(limit){
  if ( typeof limit != 'number') return false;
  if ( limit < this.rules.min ) return false;
  if ( limit > this.rules.max ) return false;
  if ( limit != parseInt(limit) ) return false;
  return true;
};

module.exports = Solution;


