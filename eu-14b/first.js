'use strict';
/* First attempt at problem 14b */

var Solution = function(){
  this.triangle = this.generateTriangle();
  this.smallestPath = this.smallestPath();
};

var Tree = function(root){
  this.root = root || null;
}

Tree.prototype.getNodeBySource = function(source){
  while(true){
    
  }
};

var Node = function(source, data, left, right){
  this.source = source;
  this.value = data;
  this.left = left;
  this.right = right;
}

Solution.prototype.generateTriangle = function(arr){
  var data = arr || [
    ['17'],
    ['51','29'],
    ['13','11','70'],
    ['30','31','77','45']
  ];
  var tree = new Tree(null);

  for(var k = 0; k < data.length; k++){
    for(var j = 0; j < data[k].length; j++){
      // create node
      var newNode = new Node([k,j], data[k][j], null, null);
      // get the parent(s) 
      
      // insert as child
    }
  }
  return tree;

};

Solution.prototype.smallestPath = function(arr){
  return false;
};

module.exports = Solution;
