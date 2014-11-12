'use strict';

/**
 * First attempt at problem 13
 *   solves by addition of long integers (e.g. 100 50-digit numbers)
 *   by simulating long-addition!
 *   that is, adding each place individually
 *   and writing the sum of each place to a string
 *
 *   - can sum numbers of uneven lengths as well
 */

var fs = require('fs');
var rootPath = require('app-root-path');

var Solution = function(){
  this.data = this.parseFile(); 
  this.solution = this.solveFor();
};

Solution.prototype.solveFor = function(arr){
  var data = arr || this.data;
  var temp = 0, solution = '', maxlen;

  maxlen = data.reduce(function(prev,next){ // length of longest number
    return prev.length > next.length ? prev : next;
  }).length;

  for(var j = 0; j < maxlen; j++){ // the length of the number

    for(var k = 0; k < data.length; k++){ // the number of numbers
      if( !!data[k][j] ){
        temp += parseInt( data[k][data[k].length-j-1]);
      }
    }

    // write last digit of temp to solution
    solution = (temp % 10) + solution;

    // seed temp with carried value
    temp = parseInt(temp / 10);

  }
  
  if( temp > 0 )  solution = temp + solution;

  console.log(solution);
  return solution;
};

Solution.prototype.parseFile = function(){
  var data = [];
  var file = fs.readFileSync(rootPath+'/eu-13/data.txt')
              .toString()
              .split('\n');
  for(var k = 0; k < file.length; k++){
    data.push(file[k].split(''));
  }
  return data;
};

module.exports = Solution;
