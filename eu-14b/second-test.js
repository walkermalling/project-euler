'use strict';

/** 
 *  Tests for problem 14b: Triangle Paths
 *  Description: Given a triangle of random numbers, find the path from top to bottom with the smallest sum.
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-14b/second');
var data1 = [
  ["17"], 
  ["51", "29"], 
  ["13", "11", "70"], 
  ["30", "31", "77", "45"]
];

describe('Pyramid', function(){

  var s = new Solution(data1);
  



  it('can find a node', function(){
    var someNode = s.findNode(s.apex, {x:1,y:1});
    expect(someNode.value).to.eql('29');
  });



});


