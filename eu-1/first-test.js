 'use strict';
 /*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-1/first');

describe('First Solution', function(){

  var firstSolution;

  beforeEach(function(){
    firstSolution = new Solution();
  });

  it('returns false if given improper argument', function(){
    expect( firstSolution.sumUpTo()).to.not.be.ok;
    expect( firstSolution.sumUpTo( 'sdfs' )).to.not.be.ok;
    expect( firstSolution.sumUpTo( -1 )).to.not.be.ok;
    expect( firstSolution.sumUpTo( 2000 )).to.not.be.ok;
  })

  it('solves for 1-10', function(){
    expect( firstSolution.sumUpTo(10) ).to.eql(23);
  });

  it('solves for 1-1000', function(){
    expect( firstSolution.sumUpTo(1000) ).to.eql(233168);
  })
  
});