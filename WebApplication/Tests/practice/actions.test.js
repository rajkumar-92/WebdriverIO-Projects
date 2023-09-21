const { assert } = require('chai');
const actionsPage = require('../../WebApplication/Pages/actions.page');
const spicejetPage=require('../../WebApplication/Pages/actions.page');

describe('page actions feature', async() => {
    it.skip('move to element and click on it', async() => {
        await browser.url('https://www.spicejet.com/');
        await spicejetPage.moveToElement(spicejetPage.addons);
        await spicejetPage.clickOnElement(spicejetPage.Taxi_Services);
    await browser.pause(3000);
    });
it('KEYs action perform on Control', async() => {
    await browser.url('https://the-internet.herokuapp.com/key_presses');
    //await (await spicejetPage.search).waitForDisplayed();
    await (await spicejetPage.search).click();
    await browser.keys("Shift");
   const text=await (await spicejetPage.resultLabel).getText();
    console.log(text);
    assert.equal('You entered: SHIFT',text);
   
});
it('Keys action perform on Backspace', async() => {
    await (await actionsPage.search).click();
    await browser.keys('Backspace');
    const text=await (await actionsPage.resultLabel).getText();
//assert.equal('You entered: BACK_SPACE',text);
console.log(text);
});


});