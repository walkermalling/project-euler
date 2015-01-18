'use strict';
/* First attempt at problem 19 */

var Calendar = function () {

};

Calendar.prototype.dayOfWeek = function (date) {

  // if date argument does not contain sufficient data, throw error
  
  ['year','month','day'].forEach(function (key) {
    if (!date[key]) throw Error('Date argument is missing ' + key);
  });

  /**
   * Jan 1, 1900 was a Monday
   * 
   * To get the day of the week, we need to count the days across (leap) years
   *
   * A leap year occurs on any year evenly divisible by 4
   * but not on a century unless it is divisible by 400.
   */
  
  /**
   * Calculate the days in the years since 1900 up to the year of the given date
   * 
   * NOTE: if the date given is March 1, 1904 (a leap year) this calculation 
   * will simply return 4 * 365; the leap year's extra day will be calculated 
   * later, when the days from Jan 1, 1904 to March 1, 1904 are counted.
   */
  
  var yearDifferenceInDays = (function () {

    var leapYears = 0;

    // for each year since 1900, check if it was a leap year
    
    for (var year = 1900; year < date.year; year++) {
      if (year % 400 === 0) {
        leapYears++;
      } else if (year % 4 === 0 && year % 100 !== 0) {
        leapYears++;
      }
    }

    var sum = (date.year - 1900) * 365 + leapYears;

    return sum;

  }());

  // count the days up to the given month
  
  var monthTotal = (function () {

    // assume month is 1 index, not 0 index;
    var daysInMonth = [0,31,28,31,30,31,30,31,31,30,31,31,31];
    var sum = 0;
    var month = 1;

    while (month < date.month) {
      sum += daysInMonth[month];
      month++;
    }

    // correct for leap year
    if (date.year % 4 === 0) {
      if (date.year % 100 === 0 && date.year % 400 === 0) {
        if (date.month > 2 || (date.month === 2 && date.day === 29)) {
          sum++;
        }
      }
    }
    return sum;
  }());

  var daysElapsed = yearDifferenceInDays + monthTotal + (date.day - 1);

  return daysElapsed % 7;

}

Calendar.prototype.prettyDay = function (num) {
  // count 
  var days = [
    'Monday','Tuesday','Wednesday','Thursday',
    'Friday','Saturday','Sunday'
  ];
  return days[num];
};

Calendar.prototype.countSundays = function () {

  var firstOfMonthSundays = 0;

  // for every month between Jan 1, 1901 and Dec 1, 2000, count 1st Sundays
  for (var year = 1901; year <= 2000; year++) {
    for (var month = 1; month <= 12; month++) {
      var dayOfFirst = this.dayOfWeek({
        'year': year,
        'month': month,
        'day': 1
      });
      if (dayOfFirst === 6) {
        console.log('Count ' + year + ', ' + month + ' 1st a Sunday');
        firstOfMonthSundays++;
      }
    }
  }

  console.log(firstOfMonthSundays);

  return firstOfMonthSundays;

};

module.exports = Calendar;


