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

  it('can get largest adjacency of the grid',function(){
    expect(solution.findLargestProduct()).to.be.ok;
    expect(solution.largestAdjacency).to.eql(70600674)
  });
  

});


