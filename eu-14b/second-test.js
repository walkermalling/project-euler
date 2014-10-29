'use strict';

/** 
 *  Tests for problem 14b: Triangle Paths
 *  Description: Given a triangle of random numbers, find the path from top to bottom with the smallest sum.
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-14b/second');

describe('Second Solution', function(){

  it('to be ok', function(){
    // var solution = new Solution();
    // expect(solution).to.be.ok;
  });

  it('to get the smallest path', function(){
    var seed = [ 
      ["91"], 
      ["50", "86"], 
      ["58", "47", "15"], 
      ["52", "49", "10", "29"], 
      ["35", "04", "90", "20", "74"], 
      ["70", "80", "55", "08", "13", "14"], 
      ["81", "69", "53", "64", "99", "61", "98"], 
      ["28", "19", "74", "29", "07", "97", "04", "27"], 
      ["01", "93", "47", "54", "80", "84", "10", "77", "64"], 
      ["66", "42", "23", "05", "46", "19", "53", "24", "83", "71"], 
      ["55", "55", "30", "78", "98", "69", "88", "24", "72", "74", "81"], 
      ["10", "53", "58", "30", "96", "07", "74", "45", "48", "61", "10", "29"]
    ];
    var longSolution = new Solution(seed);
    expect(longSolution.smallestPath).to.be.ok;
    console.log(longSolution.smallestPath);
  });

});


