'use strict';

/* Tests for problem 11 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-11/first');

describe('First Solution', function(){

  var solution;

  beforeEach(function(){
    solution = new Solution();
  });

  it('to be ok', function(){
    expect(solution).to.be.ok;
  });

  it('can read data from file',function(){
    expect(solution.data).to.be.ok;
    expect(typeof solution.data).to.eql('object'); 
  });

  it('can create a 20x20 array from filedata',function(){
    expect(solution.data.length).to.eql(20);
    solution.data.forEach(function(i){
      expect(i.length).to.eql(20);
    });
  });

  it('can get the horizontal product',function(){
    expect(solution.getHorizontal(0,0)).to.be.ok;
    expect(solution.getHorizontal(0,0)).to.eql(34144);
  });

  it('can get the vertical product',function(){
    expect(solution.getVertical(0,0)).to.be.ok;
    expect(solution.getVertical(0,0)).to.eql(1651104);
  });
  
  it('can get the backward diagonal product',function(){
    expect(solution.getBackwardDiagonal(0,0)).to.be.ok;
  });

  it('can get the forward diagonal product',function(){
    expect(solution.getForwardDiagonal(0,0)).to.be.ok;
  });

  it('can get largest adjacency of the grid',function(){
    expect(solution.findMax()).to.be.ok;
  });
  

});


