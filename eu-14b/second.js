'use strict';
/**
 *  Find the path with the smallest sum 
 *  from the top to the bottom of a given number triangle.
 *
 *  This solution walks each possible path
 */

var Solution = function(triangle){

  this.paths = [];
  this.data = triangle || [
    ['17'],
    ['51','29'],
    ['13','11','70'],
    ['30','31','77','45']
  ];

  this.smallestPath = this.getSmallestPath();

};

Solution.prototype.getSmallestPath = function(){
  var self = this, sum, path, smallest;

  self.tracePath( [new Coord(0,0)] );

  smallest = self.paths.reduce(function(a,b){
    return sumPath(a) > sumPath(b) ? b : a;
  });

  path = smallest.map(function(coord){
    return self.data[coord.x][coord.y];
  });

  function sumPath( path ){
    return path.reduce(function(a,b){
      var last = (typeof a === 'object') ? parseInt(self.data[a.x][a.y]) : a;
      return last + parseInt(self.data[b.x][b.y]);
    });
  }

  return {
    'sum' : sumPath(smallest),
    'path' : path
  };

};

Solution.prototype.tracePath = function( path ){
  var last = path[path.length-1];
  var leftPath = null;
  var rightPath = null;

  if ( this.data[last.x+1] ){
    if ( this.data[last.x+1][last.y] ){
      this.tracePath( path.concat(new Coord(last.x+1,last.y)) );
    } 
    if ( this.data[last.x+1][last.y+1] ){ 
      this.tracePath( path.concat(new Coord(last.x+1,last.y+1)) );
    } 
  } else {
    this.paths.push(path);
  }
};

Solution.prototype.print = function(){
  var self = this, sum, trace, coord, value;
  trace = '';
  sum = 0;
  for(var k = 0; k < self.smallestPath.length; k++){
    coord = self.smallestPath[k];
    sum += parseInt(self.data[coord.x][coord.y]);
    trace += (self.data[coord.x][coord.y] + ' ');
  }
  console.log('Smallest Path:');
  console.log('Sum: ' + sum);
  console.log('Trace: ' + trace);
};

var Coord = function(j,k){
  this.x = j;
  this.y = k;
};

module.exports = Solution;