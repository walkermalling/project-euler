'use strict';

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Library = require(rootPath + '/lib/primes');

describe('Primes', function(){

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

  it('can check if a number is multiple of another', function(){
    expect(lib.isMultipleOf.bind(lib,'jerry','lee')).to.throw(/invalid argument type/);
    expect(lib.isMultipleOf(2,4)).to.eql(true);
    expect(lib.isMultipleOf(2,7)).to.eql(false);
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


