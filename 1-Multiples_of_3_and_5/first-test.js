 'use strict';
 /*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var solution = require('./first');

describe('First Solution', function(){

  it('solves for 1-10', function(){
    expect( solution(10) ).to.eql(23);
  });

  it('solves for 1-1000', function(){
    expect( solution(1000) ).to.eql(233168);
  });
  
});