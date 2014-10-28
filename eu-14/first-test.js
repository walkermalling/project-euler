'use strict';

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

  it('can create a new hailstone sequence', function(){
    var hailstone = new solution.Hailstone(20);
    expect(hailstone).to.be.ok;
    expect(hailstone.seed).to.eql(20);
    expect(hailstone.length).to.eql(7);
    expect(hailstone.sequence).to.eql([20,10,5,16,8,4,2]);
  });

  it('can find the longest hailstone sequence', function(){
    var s = solution.solve(20);
    expect(s.seed).to.eql(18);
    var t = solution.solve(100000);
  });

});


