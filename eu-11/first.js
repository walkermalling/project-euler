'use strict';
/* First attempt at problem 11 */

var fs = require('fs');
var rootPath = require('app-root-path');

var Solution = function(){
  this.data = this.parseFile(); 
  // this.largestAdjacency = this.findMax(); 
};

Solution.prototype.findMax = function(){
  var prev = 0;
  var current;
  for(var k = 0; k < 20; k++){
    for(var j = 0; j < 20; j++){
      current = this.getAdjacency(k,j);
      if(current > prev) prev = current;
    }
  } 
  console.log(prev);
  return prev;
};

Solution.prototype.getAdjacency = function(x,y){
  var adjacencies = [
    this.getHorizontal(x,y),
    this.getVertical(x,y),
    this.getForwardDiagonal(x,y),
    this.getBackwardDiagonal(x,y)
  ];
  return adjacencies.reduce(function(a,b){
    return a > b ? a : b;
  });
};

Solution.prototype.getCell = function(x,y){
  if( x < 0 || y < 0 || x > 19 || y > 19 ){
    return 1; // equivalent of no value
  } else {
    return this.data[x][y];
  }
};

Solution.prototype.getForwardDiagonal = function(x,y){
  var row = x;
  var column = y;
  var store = [];
  for(var k = 0; k < 4; k++){
    store.push(this.getCell(row-k, column+k));
  }
  return store.reduce(function(a,b){
    return a * b;
  }); 
};

Solution.prototype.getBackwardDiagonal = function(x,y){
  var row = x;
  var column = y;
  var store = [];
  for(var k = 0; k < 4; k++){
    store.push(this.getCell(row-k, column-k));
  }
  return store.reduce(function(a,b){
    return a * b;
  }); 
}

Solution.prototype.getHorizontal = function(x,y){
  var row = x;
  var column = y;
  var store = []; 
  for(var k = 0; k < 4; k++){
    store.push(this.getCell(row, column+k));
  }
  return store.reduce(function(a,b){
    return a * b;
  });

};

Solution.prototype.getVertical = function(x,y){
  var row = x;
  var column = y;
  var store = []; 
  for(var k = 0; k < 4; k++){
    store.push(this.getCell(row + k, column));
  }
  return store.reduce(function(a,b){
    return a * b;
  });

};

Solution.prototype.parseFile = function(){
  var file = fs.readFileSync(rootPath + '/eu-11/data.txt').toString();
  var arr = file.split(' ');
  var x = [];
  
  var column = -1;
  for(var k = 0; k < arr.length; k++){
    if(k % 20 === 0){
      column++;
      x[column] = [];
    }
    x[column].push(parseInt(arr[k]));   
  };
  return x;
};

module.exports = Solution;
