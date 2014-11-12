'use strict';

/*jslint expr: true*/

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-8/first');

describe('First Solution', function(){
  var solution;
  beforeEach(function(){
    solution = new Solution();
  });

  it('solution module is ok',function(){
    expect(solution).to.be.ok;
  });

  it('solves for for 20',function(){
    expect(solution.go()).to.eql(23514624000);
  });
  
  
});


