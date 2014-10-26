'use strict';

/* 
 *  First attempt at problem 11 
 *  
 *  Ontology:
 *    The grid of data contains cells,
 *    Each cell is the origin of four adjacencies:
 *    horizontal, vertical, forwardDiagonal, backwardDiagonal
 *     
 */

var fs = require('fs');
var rootPath = require('app-root-path');

var Solution = function(){
  this.data = this.parseFile(); 
  this.largestProduct = this.findLargestProduct(); 
};

Solution.prototype.findLargestProduct = function(){
  var largestProduct = 0;
  var current;
  for(var k = 0; k < 20; k++){
    for(var j = 0; j < 20; j++){
      current = this.getLargestAdjacency(k,j);
      if(current > largestProduct) 
        largestProduct = current;
    }
  } 
  return largestProduct;
};

// return the value of a cell if it is within bounds
Solution.prototype.getCell = function(x,y){
  if( x < 0 || y < 0 || x > 19 || y > 19 ){
    return 1; // equivalent of no value
  } else {
    return this.data[x][y];
  }
};

Solution.prototype.getLargestAdjacency = function(x,y){
  var row = x;
  var column = y;

  var horizontal = [];
  var vertical = [];
  var forwardDiagonal = [];
  var backwardDiagonal = [];

  var adjacencies, products;

  // build array for each adjacency
  for(var k = 0; k < 4; k++){
    horizontal.push( this.getCell(row, column+k) );
    vertical.push( this.getCell(row+k, column) );
    forwardDiagonal.push( this.getCell(row-k, column+k) );
    backwardDiagonal.push( this.getCell(row-k, column-k) );
  }

  // map adjacencies
  adjacencies = [
    horizontal,
    vertical,
    forwardDiagonal,
    backwardDiagonal
  ];

  // map products
  products = adjacencies.map(function(adjacency){
    return adjacency.reduce(function(a,b){
      return a * b;
    });
  });

  // reduce to largest product
  return products.reduce(function(a,b){
    return a > b ? a : b;
  }); 
};

Solution.prototype.parseFile = function(){
  var grid = [];
  var data = fs.readFileSync(rootPath + '/eu-11/data.txt')
              .toString().split(' ');

  var column = -1;
  for(var k = 0; k < data.length; k++){
    if(k % 20 === 0){
      column++;
      grid[column] = [];
    }
    grid[column].push(parseInt(data[k]));   
  };
  return grid;
};

module.exports = Solution;
