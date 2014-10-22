 'use strict';
 /*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-3/first');

describe('First Solution', function(){

  var solution = new Solution();

  it('to be ok', function(){
    expect(solution).to.be.ok;
  });

  it('to check is a number is prime', function(){
    expect(solution.isPrime(31)).to.eql(true);
    expect(solution.isPrime(2)).to.eql(false);
    expect(solution.isPrime(4)).to.eql(false);
  });

  it('to find the largest prime', function(){
    expect(solution.getLargestPrime(100)).to.eql(97);
  });
  
});