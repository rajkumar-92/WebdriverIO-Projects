const configData=require("../../Utilities/config");
const constants=require("../../Utilities/Constants");
const ORObj = require("../../pageObjects/ObjectRepository.screen.js");

describe('Verifying language option', async() => {
    it('clicking on button', async() => {
        await ORObj.LoginFunc(configData.username,configData.password);
        await ORObj.clickOnSideMenu();
       await ORObj.spanishToggle();
       await ORObj.clickOnLinkOnSideMenu(constants.HOMEPAGE_LINK);
        expect(await ORObj.getPageHeaderText()).toExist();
     expect(await ORObj.verifySpanishText()).toExist();
       await browser.takeScreenshot();
    });
});