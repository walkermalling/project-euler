'use strict';
/* First attempt at problem 18 */

var fs = require('fs');
var appRoot = require('app-root-path');

var Solution = function (path) {

  this.data = [[1],[2,3],[4,5,6]];
  this.memo = null;

  if (path) this.data = this.fetchTriangle(path);

  var triangle = this.data;
  
  /**
   * Define the triangle of numbers
   */

  // from the bottom up
  for (var r = triangle.length - 1; r >= 0; r--) {
    // continue to next row if this is the bottom
    if (triangle[r+1] === undefined) continue;
    // move left to right across columns
    for (var c = 0; c < triangle[r].length; c++) {

      if (triangle[r+1][c] >= triangle[r+1][c+1]) {

        triangle[r][c] += triangle[r+1][c];

      } else {

        triangle[r][c] += triangle[r+1][c+1];
      
      }
    }
  }

  this.memo = triangle;

};

Solution.prototype.fetchTriangle = function (path) {
  var fileStr = fs.readFileSync(appRoot + path, {encoding: 'utf-8'});
  var arr = fileStr.split('\n');
  for (var r = 0; r < arr.length; r++) {
    arr[r] = arr[r].split(' ');
    for (var c = 0; c < arr[r].length; c++) {
      arr[r][c] = parseInt(arr[r][c]);
    }
  }
  return arr;
};

module.exports = Solution;

