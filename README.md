project-euler
=============

My project euler solutions with tests.

To tinker, just clone and npm install.

This setup uses [automocha](https://www.npmjs.org/package/automocha), which automatically re-runs my unit tests when the test or source files are modified.  

The modules are organized by numbered folder corresponding to the Euler problem number.

I've included the *shell script* `/lib/seed.sh` I use to generate new template files for each problem.  The script will prompt for a problem number and a description.  It then creates a new directory, a first module, a test file for the module, and a readme with the given description.  It will also create a soft link `ln` of the test file in the automocha directory.  

