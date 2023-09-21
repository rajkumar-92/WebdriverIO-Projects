
const blazePage=require('../pages/blazePage.js');

describe('blaze page element handle', async() => {
    it('get texts of all main links', async() => {
        await browser.url('https://www.blazemeter.com/');
       await blazePage.getTextforLi();
       console.log(await (await blazePage.specificChildElement(1)).getText());
    })

    it('main heading displayed?',async()=>{
        console.log(await blazePage.mainHeader.isDisplayed());
        
    });

    it('main heading enabled?',async()=>{
        console.log(await blazePage.mainHeader.isEnabled());
        
    });

    it('main heading exists?',async()=>{
        console.log(await blazePage.mainHeader.isExisting());
        
    });

    it('main heading displayed in view port?',async()=>{
        console.log(await blazePage.mainHeader.isDisplayedInViewport());
    });

    it('Jmeter displayed in view port?',async()=>{
        console.log(await blazePage.JMeterLink.isDisplayedInViewport());
    });
    it('click on productlink if displayed',async()=>{
        await blazePage.clickonProductLink();
        await browser.pause(5000);
    });

});