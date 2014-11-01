var Pyramid = function(arr){

  var seedData = arr;

  this.apex = null;

  /* Construct */

  this.apex = generatePyramid(seedData, this.apex);
  console.log(this.apex.left);
  // walkPyramid(this.apex);


  /* Methods */

  function walkPyramid(apex){
    var current = apex;
    while(!!current.left || !!current.right){
      console.log(current.value);
      if(current.left){
        current = current.left;
      } else if ( current.right ){
        current = current.right;
      }
    }
  }

  function generatePyramid(seedData, pyramidApex){
    var data = seedData
      , apex = pyramidApex
      , temp, parentA, parentB;

    apex = new Node( 
        new Point(0,0),
        data[0][0],
        null,
        null
      );

    for(var k = 1; k < data.length; k++){
      for(var j = 0; j < data[k].length; j++){
        // create node
        temp = new Node( new Point(k,j), data[k][j], null, null );
        
        // get both parents and insert new node
        if(data[k-1][j-1]){
          parentA = findNode( apex, new Point( k-1, j-1 ) );
          parentA.right = temp;
        }
        if(data[k-1][j]){
          parentB = findNode( apex, new Point( k-1, j ) );
          parentB.left = temp;
        }
        
      }
    }
    return apex;

  }

  /**
   * Find a Node of the Pyramid given a target Point
   * @param  {Node}   currentNode 
   * @param  {Point}  targetPoint 
   * @return {Node} 
   */
  function findNode(currentNode, targetPoint){
    var current = currentNode
      , target = targetPoint;

    while(current.point.x !== target.x && current.point.y !== target.y){      
      if(current.point.y < target.y){
        current = current.right;
      } else if (current.point.y >= target.y){
        current = current.left;
      }
    }

    return current; 
  }

  
  
  /**
   * Node of the Number Pyramid
   * @param {Point} coord
   * @param {Integer} value
   * @param {Node} left
   * @param {Node} right 
   */
  function Node(point, value, left, right){
    this.point = point;
    this.value = value;
    this.left = left;
    this.right = right;
    this.toString = function(){
      return 'p('+this.point.x+', '+this.point.y+'), value:' + this.value;
    }
  }

  /* Point */
  function Point(a,b){
    this.x = a;
    this.y = b;
    this.toString = function(){
      return 'p('+this.x+', '+this.y+')';
    }
  }

};

module.exports = Pyramid;