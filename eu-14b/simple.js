var Pyramid = function(arr){
  
  this.smallestPath;

  var data = arr;
  var paths = [];

  /**
   * Construct
   * - trace all paths
   * - find path with smallest sum
   */
  
  tracePaths([new Point(0,0)]);
  this.smallestPath = smallest(paths);

  /* Methods */

  /**
   * Recursively generate all possible paths down a pyramid
   * @param  {array} path
   * pushes generated paths to the paths array
   */
  function tracePaths(path){
    var parent = path[path.length-1];
    if(data[parent.x+1]){
      if(data[parent.x+1][parent.y]){
        tracePaths(path.concat([new Point(parent.x+1,parent.y)]));
      }
      if(data[parent.x+1][parent.y+1]){
        tracePaths(path.concat([new Point(parent.x+1,parent.y+1)]));
      }
    } else {
      paths.push(dress(path));
    }
  }

  function smallest(paths){
    return paths.reduce(function(a,b){
      return a.sum < b.sum ? a : b;
    });
  }

  /* Accessors */

  this.getPaths = function(){
    return paths;
  }

  this.getData = function(){
    return data;
  }


  /* Helpers */
  
  /**
   * Wrap a path in an object
   * @param  {array} path
   * @return {object} 
   */ 
  function dress(path){
    var report = {};

    report.path = path.map(function(point){
      return parseInt(data[point.x][point.y]);
    });

    report.sum = report.path.reduce(function(a,b){
      return a + b;
    });

    return report;
  }

  /**
   * Point
   * @param {int} j 
   * @param {int} k 
   */
  function Point(j,k){
    this.x = j,
    this.y = k
  }

};

module.exports = Pyramid;