'use strict';
/*jslint expr: true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-4/first');

describe('First Solution', function(){
  var solution;

  beforeEach(function(){
    solution = new Solution();
  });

  it('solution module is ok',function(){
    expect(solution).to.be.ok;
  });
  
  it('is able to check if a number is a palindrome',function(){
    expect(solution.isPalindrome(999)).to.eql(true);
    expect(solution.isPalindrome(10)).to.eql(false);
  });

  it('can find the largest palindrome', function(){
    var s2 = solution.findLargestPalindrome(2);
    expect(s2).to.be.ok;
    expect(s2).to.eql(9009);
    var s3 = solution.findLargestPalindrome(3);
    expect(s3).to.be.ok;
    console.log('\t'+s3);
  });
});


