'use strict';

var BinaryTree = function(){
  this.root = null;
}

var Node = function(item, left, right){
  this.data = item;
  this.left = left;
  this.right = right;
};

// Tree Methods

BinaryTree.prototype.insert = function(data){
  var tree = this;
  var newNode = new Node(data, null, null);
  var parent, current;

  if( tree.root === null ) tree.root = newNode;
  else {
    current = tree.root;
    while(true){
      parent = current;
      if( data < current.data ){
        current = current.left;
        if( current === null ){
          parent.left = newNode;
          break;
        }
      } else {
        current = current.right;
        if( current === null ){
          parent.right = newNode;
          break;
        }
      }
    }
  }
};

module.exports = BinaryTree;