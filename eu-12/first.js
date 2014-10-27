'use strict';
/**
 *  First attempt at problem 12
 */

var rootPath = require('app-root-path');
var Lib = require(rootPath + '/lib/math');
var lib = new Lib();

module.exports = function(){

  this.solve = function(limit){
    var max = limit || 500;
    var base = 0;
    var k = 0;
    var factors;
    var currentLength = 0;
    while(true){
      k += 1;
      base += k;
      factors = lib.getFactorsOf(base);

      if(factors.length > currentLength) {
        console.log(base+'\t:: '+factors.length);
        currentLength = factors.length;
      }

      if(factors.length >= max) break;
      
    }
    return base;
  };

};



