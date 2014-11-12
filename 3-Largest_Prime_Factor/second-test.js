 'use strict';
 /*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var solution = require(rootPath + '/eu-3/second');

describe('First Solution', function(){

  it('can return the highest prime factor of 100', function(){
    var s = solution(100);
    expect(s).to.eql(5);
  });

  it('returns the largest prime of 600851475143', function(){
    var s = solution(600851475143);
    expect(s).to.eql(6857);
  });

  it('returns the largest prime of 13195', function(){
    var s = solution(13195);
    expect(s).to.eql(29);
  });

});