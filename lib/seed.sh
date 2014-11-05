#!/bin/bash
clear
echo "Enter problem number:"
read number
echo "Problem Title:"
read title
echo "Description:"
read description
echo "Creating new directory and files..."
mkdir eu-${number}
touch eu-${number}/first.js
touch eu-${number}/first-test.js
touch eu-${number}/README.md

echo "'use strict';
/* First attempt at problem ${number} */

module.exports = function(){

};

" > eu-${number}/first.js

echo "# ${number}. ${title}
===============

${description}
" > eu-${number}/README.md

echo "'use strict';

/** 
 *  Tests for problem ${number}: ${title}
 *  Description: ${description}
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/eu-${number}/first');

describe('First Solution', function(){

  var solution;

  beforeEach(function(){
    solution = new Solution();
  });

  it('to be ok', function(){
    expect(solution).to.be.ok;
  });

  it('...');

});

" > eu-${number}/first-test.js

echo "linking test file into automocha..."

mkdir -p test/automocha
rm test/automocha/*-test.js
ln eu-${number}/first-test.js test/automocha/

echo "done"
echo "listing new contents:"

ls eu-${number}
