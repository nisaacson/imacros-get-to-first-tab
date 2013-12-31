Switches to the first tab in iMacros for firefox and closes all others

# Usage

Load the `./dist/get-to-first-tab.js` javascript file in the iMacros window inside Firefox.

# Developing

The source uses `require(...)` statements to simplify the code structure. To make changes and load the new file in Firefox, the javascript source must first be bundled into a single file. An easy way to do this is to use the `browserify` module

```bash
npm install -g browserify # install browserify globally
cd /path/to/this/repo
make bundle
# or execute directly, skipping the makefile
# browserify index.js -o ./dist/get-to-first-tab.js
```
