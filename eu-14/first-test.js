'use strict';

/** 
 *  Tests for problem 14: Longest Collatz Sequence
 *  Description: What number under One Million generates the longest hailstone sequence?
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-14/first');

describe('First Solution', function(){

  var solution;

  beforeEach(function(){
    solution = new Solution();
  });

  it('to be ok', function(){
    expect(solution).to.be.ok;
  });

  it('...');

});


