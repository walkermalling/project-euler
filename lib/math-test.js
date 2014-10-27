'use strict';

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Library = require(rootPath + '/lib/math');

describe('Math Convenience Methods', function(){

  var lib;

  beforeEach(function(){
    lib = new Library();
  });

  it('to be ok', function(){
    expect(lib).to.be.ok;
  });

  it('can check if a number is a natural number',function(){
    expect(lib.isNaturalNumber(1)).to.eql(true);
    expect(lib.isNaturalNumber(-1)).to.eql(false);
    expect(lib.isNaturalNumber(1.5)).to.eql(false);
    expect(lib.isNaturalNumber([1])).to.eql(true);
    expect(lib.isNaturalNumber([1,2])).to.eql(true);
    expect(lib.isNaturalNumber([-1,2,2])).to.eql(false);
    expect(lib.isNaturalNumber([1,1.5])).to.eql(false);
    expect(lib.isNaturalNumber('jerry')).to.eql(false);
  });

  it('can check if a number is factor of another', function(){
    expect(lib.isFactorOf.bind(lib,'jerry','lee')).to.throw(/invalid argument type/);
    expect(lib.isFactorOf(2,4)).to.eql(true);
    expect(lib.isFactorOf(2,7)).to.eql(false);
  });

  it('cat return the factors fo a number', function(){
    expect(lib.getFactorsOf(28).length).to.eql(6);
  });

  it('can check if a number is prime', function(){
    expect(lib.isPrime(1)).to.eql(true);
    expect(lib.isPrime(3)).to.eql(true);
    expect(lib.isPrime(4)).to.eql(false);
    expect(lib.isPrime(31)).to.eql(true);
    expect(lib.isPrime.bind(lib,'hi')).to.throw(/invalid argument type/);
    expect(lib.isPrime.bind(lib,3)).not.to.throw(/invalid argument type/);
  });
  
});


