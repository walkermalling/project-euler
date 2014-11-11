'use strict';

/** 
 *  Tests for problem 15: Lattice Paths
 *  Description: Starting at the top left of a grid of points, how many paths are there to the bottom right if the path may only advance either down or right at each point?
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var solution = require(rootPath + '/eu-15/second');

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

  it('solves for a 20x20 grid', function(){
    var s = solution(20);
    result = s;
    expect(s).to.eql(137846528820);
  });

});




