'use strict';

/*jslint expr: true*/

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-5/first');

describe('First Solution', function(){

  it('solution module is ok',function(){
    expect(Solution).to.be.ok;
  });

  it('solves for for 20',function(){
    expect(Solution()).to.eql(232792560);
  });
  
  
});


