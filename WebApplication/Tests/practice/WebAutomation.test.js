const webautomation = require('../../WebApplication/Pages/webautomationpage')
const Utility = require('../../Utilities/Utility');
//import { Key } from 'webdriverio'

beforeEach(async () => {
    await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
    await browser.maximizeWindow();

});
describe('Webautomation checking', async () => {
    it('clicking on radio button', async () => {
        Utility.selectRadioButton("radio3");

    });

    it('Selecting dropdown by visible text', async () => {
        await Utility.dropDown_ByVisibleText(webautomation.dropdown, "Option1");
    });

    it('Selecting dropdown by index', async () => {
        await Utility.dropDown_ByIndex(webautomation.dropdown, 3);
    });

    it('Selecting dropdown by attibute', async () => {
        await Utility.dropDown_ByAttribute(webautomation.dropdown, "value", "option2");
    });

    it('Selecting checkbox', async () => {
        await Utility.selectCheckBox(webautomation.checkbox, "Option2")

    });

    it('Selecting checkbox from list', async () => {
        await Utility.selectCheckboxFromList(webautomation.checkboxes, "option2")
    });

    it('Selecting all checkboxes', async () => {
        await Utility.selecctAllCheckboxes(webautomation.checkboxes);
    });
    it('Selecting suggesion dropdown', async() => {
        await Utility.inputValue(webautomation.suggestiondropdown1,"pak")
        await browser.pause(2000);
        await Utility.suggestivedropDown(await webautomation.suggestiondropdown2,"pakistan");
        
    });

    it('Checking getText of alert ', async() => {
        await Utility.inputValue(await webautomation.entertxt,"rajkumar");
        await Utility.clickOnElement(await webautomation.alertbtn);
        await Utility.getAlertText();
    });

    it('Accepting of alert ', async() => {
        await Utility.inputValue(await webautomation.entertxt,"rajkumar");
        await Utility.clickOnElement(await webautomation.alertbtn);
        await Utility.acceptAlert();
    });

    it('Cancelling of alert ', async() => {
        await Utility.inputValue(await webautomation.entertxt,"rajkumar");
        await Utility.clickOnElement(await webautomation.confirmbtn);
        await Utility.dismissAlert();
    });

    it('Checking the element for displayed', async() => {
        await Utility.scrollIntoView(await webautomation.clickOnShowBtn)
        await Utility.clickOnElement(await webautomation.clickOnHideBtn)
        await browser.pause(3000)
        await (await webautomation.displaytxtBox).waitForDisplayed({ reverse: true });
        assert.equal(false,await (await webautomation.displaytxtBox).isDisplayed());
        await Utility.clickOnElement(await webautomation.clickOnShowBtn)
        await (await webautomation.displaytxtBox).waitForDisplayed({timeout : 3000});
        assert.equal(true,await (await webautomation.displaytxtBox).isDisplayed());
    });

    it('Mouse Actions', async() => {
        await Utility.scrollIntoView(await webautomation.mouseover)
        await Utility.moveToElement(await webautomation.mouseover)
        await Utility.clickOnElement(await webautomation.clickonTop)    
    });

it('Switching to desired Tab/Window', async() => {    
  await Utility.switchToWindow(await webautomation.switchTab,"Practice");   
});

it('Actions on frames', async() => {
 await Utility.switchToFrame(await webautomation.frame)
 await browser.pause(3000)
 await Utility.clickOnElement(await webautomation.clickonJoin)
 await browser.pause(3000)
 //await browser.switchToParentFrame() // switch back to previous Frame/DOM if we have more than 1 frame
 await browser.switchToFrame(null)  //exist from frame
 await Utility.clickOnElement(await webautomation.clickonLink)

});

it('Retrive the data form WebTable ', async() => {
    await Utility.scrollIntoView(await webautomation.webtable)
});

it.only('Keyboard actions', async() => {
    await Utility.scrollIntoView(await webautomation.RestApi)
   // await browser.keys("Control")
   //await browser.keys("F5")
    //await Utility.clickOnElement(await webautomation.RestApi)
    //await browser.pause(3000)
    //await browser.keys("Control")
    //await Utility.clickOnElement(await webautomation.Appium)


   
});

afterEach(async () => {
    await browser.pause(3000);
});

})