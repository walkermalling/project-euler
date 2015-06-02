Project Euler
=============

This repo contains my [project euler](https://projecteuler.net) solutions with tests.

All the work is my own unless cited.

To tinker, just clone and npm install.

### Testing with Automocha

This setup uses [automocha](https://www.npmjs.org/package/automocha), which automatically re-runs my unit tests when the test or source files are modified.  
### Organization 

The modules are organized by numbered folder corresponding to the Euler problem number.

### Helper Shell Script

I've included the shell script `/lib/seed.sh` I use to generate new template files for each problem.  The script will prompt for a problem number, title, and description and generate a new directory, a first module, a test file for the module, and a readme with the given description.  It will also create a soft link `ln` of the test file in the automocha directory.  

### C

While most of my solutions are written in JavaScript I have recently started to add solutions in C as well..

