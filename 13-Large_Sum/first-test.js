'use strict';

/* Tests for problem 13 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-13/first');

describe('First Solution', function(){

  var solution;

  beforeEach(function(){
    solution = new Solution();
  });

  it('to be ok', function(){
    expect(solution).to.be.ok;
  });

  it('can get data from file',function(){
    expect(solution.data).to.be.ok; 
  });

  it('returns a number',function(){
    var result = solution.solution.split('');
    result.forEach(function(k){
      expect(typeof parseInt(k)).to.eql( 'number' );
    });
  });

  it('solves for small numbers', function(){
    expect(solution.solveFor(['123','123','123','123'])).to.eql('492');
    
  });

  it('can carry over numbers to the largest place', function(){
    expect(solution.solveFor(['999','999'])).to.eql('1998');
  });

  it('can carry over two-digit numbers', function(){
    expect(solution.solveFor([
        '999','999','999','999','999','999','999','999','999','999','999','999'
      ])).to.eql('11988');
  });

  it('can solve for numbers of uneven lengths', function(){
    expect(solution.solveFor(['1','20'])).to.eql('21');
    expect(solution.solveFor(['1','20','100'])).to.eql('121');
  })

});


