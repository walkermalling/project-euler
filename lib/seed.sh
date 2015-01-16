#!/bin/bash
clear
echo "Enter problem number:"
read number
echo "Problem Title:"
read title
echo "Description:"
read description
echo "Creating new directory and files..."
newdir="${number}-${title// /_}"
mkdir "${newdir}"
touch "${newdir}"/first.js
touch "${newdir}"/first-test.js
touch "${newdir}"/README.md

echo "'use strict';
/* First attempt at problem ${number} */

module.exports = function(){

};

" > "${newdir}"/first.js

echo "# ${number}. ${title}

${description}
" > "${newdir}"/README.md

echo "'use strict';

/** 
 *  Tests for problem ${number}: ${title}
 *  Description: ${description}
 */

var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Solution = require(rootPath + '/${newdir}/first');

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

" > "${newdir}"/first-test.js

echo "linking test file into automocha..."

mkdir -p test/automocha
rm test/automocha/*-test.js
ln "${newdir}"/first-test.js test/automocha/

echo "done"
echo "listing new contents:"

ls "${newdir}"
