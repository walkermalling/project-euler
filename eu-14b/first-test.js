'use strict';

/** 
 *  Tests for problem 14b: Triangle Paths
 *  Description: Given a triangle of random numbers, find the path from top to bottom with the smallest sum.
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-14b/first');

describe('First Solution', function(){
  
  var solution;

  beforeEach(function(){
    solution = new Solution();
  });

  it('to be ok', function(){
    expect(solution).to.be.ok;
  });

  it('can generate a triangle', function(){
    expect(solution.triangle).to.be.ok;
  });

});


