'use strict';

/** 
 *  Tests for problem 17: Number Letter Counts
 *  Description: If all the numbers from 1 to 1000 were written out with 
 *  letters, how many letters would be used (excluding hyphens, etc)?
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/17-Number_Letter_Counts/first');

describe('First Solution', function () {

  var solution;

  beforeEach(function () {
    solution = new Solution();
  });

  it('to be ok', function () {
    expect(solution).to.be.ok;
  });

  it('internal method: spellSingleDigit', function () {
    var arr = [];
    for (var k = 0; k < 10; k++) {
      arr[k] = solution.methods.spellSingleDigit(k);
    }
    expect(arr).to.eql(['','one','two','three','four','five','six','seven',
      'eight','nine']);
  });

  it('internal method: spellDoubleDigit', function () {
    var arr = [];
    for (var k = 10; k < 100; k++) {
      arr[k] = solution.methods.spellDoubleDigit(k);
    }
    expect(arr).to.include('eleven');
    expect(arr).to.include('twenty-one');
    expect(arr).to.include('thirty-three');
    expect(arr).to.include('ninety-nine');
  });

  it('internal method: process (assemble and count letters)', function () {
    var process = solution.methods.process;

    expect(process(1)).to.eql(3); // one
    expect(process(9)).to.eql(4); // nine
    expect(process(10)).to.eql(3); // ten
    expect(process(11)).to.eql(6); // eleven
    expect(process(15)).to.eql(7); // fifteen
    expect(process(20)).to.eql(6); // twenty

    expect(process(100)).to.eql(10) // one hundred
    expect(process(101)).to.eql(16) // one hundred and one
    expect(process(121)).to.eql(22) // one hundred and twenty one
    expect(process(999)).to.eql(24) // nine hundred and ninety nine

    expect(process(9999)).to.eql(36) // nine thousand nine hundred and ninety nine
  });

  it('it accumulates the letter count up to the passed max' , function () {
    var accumulator = solution.methods.accumulate;
    expect(accumulator(1,1)).to.eql(3);
    expect(accumulator(1,2)).to.eql(6);
    expect(accumulator(1,3)).to.eql(11);
    expect(accumulator(1,20)).to.be.ok;

    console.log(accumulator(1,1000)); // euler solution

  });

});


