'use strict'
/*

Euler #15 Solution with memo-ization

Example Grid

[5,5] [4,5] [3,5] [2,5] [1,5] [0,5]

[5,4] [4,4] [3,4] [2,4] [1,4] [0,4]

[5,3] [4,3] [3,3] [2,3] [1,3] [0,3]

[5,2] [4,2] [3,2] [2,2] [1,2] [0,2]

[5,1] [4,1] [3,1] [2,1] [1,1] [0,1]

[5,0] [4,0] [3,0] [2,0] [1,0] [0,0]


Strategy

Start from [1,1] and solve all possible paths to origin.
Memo the number of solutions from each node.
Progressively solve for greater distances, next [2,2], etc. up to 20.

*/

module.exports = function(gridSize){
  var size = gridSize || 2;
  var memo = generateGrid(size);

  return solveFor(size);

  function getPaths(x,y){
    if(x < 0 || y < 0) return 0;
    if(x === 0 && y === 0) return 1;

    if(!!memo[x][y]) return memo[x][y];

    var paths = getPaths(x-1,y) + getPaths(x,y-1);
    memo[x][y] = paths;

    return paths;
  }

  function generateGrid(size){
    var memo = [];
    for(var x = 0; x <= size; x++){
      memo[x] = [];
    }
    return memo;
  }

  function solveFor(size){
    var solutions = [];
    for(var n = 1; n <= size; n++){
      solutions[n] = getPaths(n,n);
    }
    return solutions[solutions.length-1];
  }

}