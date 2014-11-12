'use strict';
/* First attempt at problem 15 */

module.exports = function(gridSize){
  var dim = gridSize;

  function getPaths(point, dim){
    var solutions = 0;
    if(point.x === dim && point.y === dim){
      return 1;
    } else {
      if(point.x < dim){
        solutions += getPaths({x:point.x+1, y:point.y}, dim);
      }
      if(point.y < dim){
        solutions += getPaths({x:point.x, y:point.y+1}, dim);
      }
      return solutions;
    }
  }

  return getPaths({x:0, y:0},dim);

};

// module.exports = function(gridSize){
//   var dim = gridSize;

//   function getPaths(point){
//     if(point.x > dim || point.y > dim) return 0;

//     if(point.x === dim && point.y === dim) return 1;

//     var paths = 0;
//     paths += getPaths({
//       x:point.x+1, 
//       y:point.y
//     });

//     paths += getPaths({
//       x:point.x,
//       y:point.y+1
//     });

//     return paths;

//   }

//   return getPaths({x:0,y:0});

// };
