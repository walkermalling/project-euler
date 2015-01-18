'use strict';

/** 
 *  Tests for problem 19: Counting Sundays
 *  Description: How many Sundays fell on the first of the month during the twentieth century (Jan 1st, 1901 to Dec 31st 2000)?
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/19-Counting_Sundays/first');

describe('First Solution', function () {

  var solution;

  beforeEach(function () {
    solution = new Solution();
  });

  it('to be ok', function () {
    expect(solution).to.be.ok;
  });

  it('will throw error without sufficient date parameters', function () {
    expect(solution.dayOfWeek).to.throw(Error);
  });

  it('can get the day of week of a given date', function () {
    var day = solution.dayOfWeek({
      'year' : 1930,
      'month' : 2,
      'day' : 2
    });
    console.log(solution.prettyDay(day));
  });

  it('calculates year 2000 as leap year', function () {
    var result = solution.dayOfWeek({
      'year': 2000,
      'month': 3,
      'day': 1
    });
    console.log(result);
  });

  it('can count 1st Sundays', function () {
    solution.countSundays();
  })

});


