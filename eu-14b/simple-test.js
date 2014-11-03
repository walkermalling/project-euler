'use strict';

/** 
 *  Tests for problem 14b: Triangle Paths
 *  Description: Given a triangle of random numbers, find the path from top to bottom with the smallest sum.
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-14b/simple');
var data1 = [
  ["17"], 
  ["51", "29"], 
  ["13", "11", "70"], 
  ["30", "31", "77", "45"]
];
var data2 = [
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
]
describe('Pyramid', function(){

  it('instantiates a Pyramid',function(){
    var s = new Solution(data1);
    expect(s).to.be.ok;
    expect(s).to.be.an.instanceOf(Solution);
  });

  it('generates paths',function(){
    var s = new Solution(data1);
    expect(s.smallestPath).to.be.ok;
    expect(s.getPaths()).to.be.an.object;
  });

  it('solves for smallest path', function(){
    var s1 = new Solution(data1);
    expect(s1.smallestPath).to.include.keys('sum');
    expect(s1.smallestPath).to.include.keys('path');
    expect(s1.smallestPath.sum).to.eql(88);

    var s2 = new Solution(data2);
    expect(s2.smallestPath).to.include.keys('sum');
    expect(s2.smallestPath).to.include.keys('path');
    expect(s2.smallestPath.sum).to.eql(399);
  });

  it('has accurate accessor',function(){
    var s = new Solution(data1);
    expect(s.getData()).to.eql(data1);
  })

});


