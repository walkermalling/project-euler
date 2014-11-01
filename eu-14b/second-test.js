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

  var s;

  beforeEach(function(){
    s = new Solution(data1);
  });

  it('instantiates a Pyramid',function(){
    expect(s).to.be.ok;
    expect(s).to.be.an.instanceOf(Solution);
  });



});


