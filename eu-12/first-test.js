'use strict';

/* Tests for problem 12 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Lib = require(rootPath + '/lib/math');
var Solution = require(rootPath + '/eu-12/first');

describe('First Solution', function(){

  var solution, lib;
  lib = new Lib();

  beforeEach(function(){
    solution = new Solution();
  });

  it('to be ok', function(){
    expect(solution).to.be.ok;
  });

  it('can solve for +500 factors', function(){
    expect(solution.solve(500)).to.be.eql(76576500);
  });

});


