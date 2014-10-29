'use strict';

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Tree = require(rootPath + '/lib/binary-tree');

describe('Binary Tree', function(){

  var tree;

  beforeEach(function(){
    tree = new Tree();
  });

  it('to be ok', function(){
    expect(tree).to.be.ok;
  });

  
});


