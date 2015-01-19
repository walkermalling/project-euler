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
  });

  it('calculates year 2000 as leap year', function () {
    var result = solution.dayOfWeek({
      'year': 2000,
      'month': 3,
      'day': 1
    });
  });

  it('can count 1st Sundays', function () {
    var firstSundays = solution.countSundays();
    expect(firstSundays).to.eql(171);
  })

  // check solution's calendar against native date obj
  it('gets every day right', function () {
    var discrepancyCount = 0;
    var daysInMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    
    for (var year = 1900; year <= 2000; year++) {
      for (var month = 1; month <= 12; month++) {
        for (var day = 1; day <= daysInMonth[month]; day++) {

          var date = {'year': year,'month': month,'day': day};
          var weekday = solution.dayOfWeek(date);
          var control = new Date(year, month - 1, day);
          if (weekday !== control.getDay() - 1) {
            if (weekday === 6 && control.getDay() === 0) {
              // fair
            } else {
              discrepancyCount++;
              console.log('-------------------------');
              console.log(date);  
              console.log(solution.prettyDay(weekday) + ' ('+weekday+')');
              console.log(control + '(' + control.getDay() + ')');
              return;
            }
          }
        }
      }
    }
    // console.log('\tTotal Discrepancies: ' + discrepancyCount);
    expect(discrepancyCount).to.eql(0);
  });

});


