module.exports = function () {
  while(true) {
    var numTabs = gBrowser.tabContainer.childNodes.length
    var leftResult = gBrowser.mTabContainer.advanceSelectedTab(-1, true);
    if (numTabs === 1) {
      break
    }
    gBrowser.removeTab(gBrowser.mCurrentTab);
  }
}
