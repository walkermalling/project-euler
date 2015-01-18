'use strict';

/** 
 *  Tests for problem 18: Maximum Path Sum 1
 *  Description: Starting at the top of a pyramid of numbers, find the path to the bottom which garners the largest sum.
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/18-Maximum_Path_Sum_1/first');

describe('First Solution', function(){

  var solution;

  beforeEach(function(){
    solution = new Solution();
  });

  it('to be ok', function(){
    expect(solution).to.be.ok;
  });

  it('can read and convert data from file', function () {
    var data = solution.fetchTriangle('/18-Maximum_Path_Sum_1/triangle-data');
    expect(data).to.be.an('Array');
    for (var r = 0; r < data.length; r++) {
      for (var c = 0; c < data[r].length; c++) {
        expect(data[r][c]).to.be.a('Number');
      }
    }
  });

  it('can find maximum sum', function () {
    var custom = new Solution('/18-Maximum_Path_Sum_1/triangle-data');
    expect(custom.memo[0][0]).to.eql(1074);
  });

});


