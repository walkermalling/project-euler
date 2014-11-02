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

  it('can find the longest hailstone sequence', function(){
    var a = solution.solve(20);
    var s = solution.solve(1000);
    var t = solution.solve(100000);
    var m = solution.solve(1000000);
    expect(m).to.eql(525);
  });

});


