'use strict';

/** 
 *  Tests for problem 16: Power Digit Sum
 *  Description: Find the sum of the digits of 2^1000
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-16/first');

describe('First Solution', function(){

  var solution;

  beforeEach(function(){
    solution = new Solution();
  });

  it('to be ok', function(){
    expect(solution).to.be.ok;
  });

  it('can convert an integer to an array of single digits', function () {
    expect(solution.castNumberToArray(333)).to.eql([3,3,3]);
  });

  it('can multiply a number stored as an array', function () {
    expect(solution.multiplyArray([1,2,3])).to.eql([2,4,6]);
    expect(solution.multiplyArray([5,5,5])).to.eql([1,1,1,0]);
  });

  it('can return the sum of an array of integers', function () {
    expect(solution.sumOfDigits([1,2,3])).to.eql(6);
  });

  it('can solve for 2 to the 6th power', function () {
    expect(solution.solve(6)).to.eql(10);
  });

  it('can solve for 2 to the 1000th power', function () {
    expect(solution.solve()).to.eql(1366);
  });

});


