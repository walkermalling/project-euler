 'use strict';
 /*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-3/second');

describe('First Solution', function(){

  var solution = new Solution();

  it('to be ok', function(){
    expect(solution).to.be.ok;
  });

  it('can return the highest prime factor of 100', function(){
    var s = solution.getLargestPrimeFactorOf(100);
    expect(s).to.eql(5);
  });

  it('returns the largest prime of 600851475143', function(){
    var s = solution.getLargestPrimeFactorOf(600851475143);
    expect(s).to.eql(6857);
  });

  it('returns the largest prime of 13195', function(){
    var s = solution.getLargestPrimeFactorOf(13195);
    expect(s).to.eql(29);
  });

});