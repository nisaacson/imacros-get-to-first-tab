module.exports = function () {
  var result = gBrowser.mTabContainer.advanceSelectedTab(-1, true);
  alert(result, 'result')
}
