'use strict';

/** 
 *  Tests for problem 15: Lattice Paths
 *  Description: Starting at the top left of a grid of points, how many paths are there to the bottom right if the path may only advance either down or right at each point?
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var solution = require(rootPath + '/eu-15/first');

describe('First Solution', function(){

  var start, end, result;

  beforeEach(function(){
    start = process.hrtime();
  });

  afterEach(function(){
    end = process.hrtime(start);
    logTime(end, '      ');
    console.log('      result: ' + result);
  });

  function logTime(time, spaces){
    var s = spaces || '';
    var report = s + time[0] + ' seconds + ' + time[1]/1000000 + ' ms';
    console.log(report);
  }

  
  it('solves for a 1x1 grid', function(){
    var s = solution(1);
    expect(s).to.be.eql(2);
    result = s;
  });
  
  it('solves for a 2x2 grid', function(){
    var s = solution(2);
    expect(s).to.eql(6);
    result = s;
  });

  for(var n = 1; n < 16; n++){
    var s = process.hrtime();
    console.log(solution(n));
    var e = process.hrtime(s);
    logTime(e);
  }


});




