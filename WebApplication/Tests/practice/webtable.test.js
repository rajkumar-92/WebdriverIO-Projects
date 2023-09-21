

const Utility = require('../../Utilities/Utility');

const table = require('../../Utilities/webtable');
const webautomation=require('../../WebApplication/Pages/webautomationpage')

describe('WebTable', async () => {
  it.only('Verify WebTable ', async () => {
    await browser.url('https://qavbox.github.io/demo/webtable/');
    await browser.pause(2000);
   await table.table('#table01')
assert.equal(await table.getRowsCount(), 3);
     await browser.pause(2000);
     assert.equal(await table.getColumnsCount(1),5);
    await browser.pause(2000);
    await table.deleteRowHavingText('Functional');
    await browser.pause(5000);
    await table.clickOnCell(2, 1);
    await browser.pause(5000);
  });

  function scrollInside(selector, scrollAmount) {
    browser.execute((selector, scrollAmount) => {
      var el = document.querySelector(`${selector}`)
      el.scrollTop = el.scrollTop + parseInt(`${scrollAmount}`)
    }, selector, scrollAmount)
  }

  it('Scroll Inside a element', async () => {
    await browser.url('https://qavbox.github.io/demo/webtable/');
    await browser.pause(2000);
    await (await $("#table02")).scrollIntoView()
    while (!await (await $("td=Paul Byrd")).isDisplayedInViewport()) {
      scrollInside('#table02', 200)
    }
    (await $("td=Paul Byrd")).scrollIntoView()
    await browser.pause(3000)

  })
  it('Scroll Inside a element', async () => {
    await browser.url('https://qavbox.github.io/demo/webtable/');
    await browser.pause(2000);
    let locator = await $("#table02")
    let element = await $('td=Doris Wilder')
    await Utility.scrollInside(locator, element);

  })


})