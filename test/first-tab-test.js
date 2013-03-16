var index = require('../index')
runTests()
function runTests() {
  iimPlay('CODE: TAB CLOSEALLOTHERS\nTAB OPEN')
  index()
  index()
  iimDisplay('Tests pass')
}
