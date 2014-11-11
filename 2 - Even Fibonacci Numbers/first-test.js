 'use strict';
 /*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-2/first');

describe('First Solution', function(){

  it('solves for 1-4000000', function(){
    expect( Solution(4000000) ).to.eql(4613732);
  });
  
});