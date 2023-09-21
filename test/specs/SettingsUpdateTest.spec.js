const utilObj = require('../../Utilities/Utility.js');
const ORObj = require('../../pageObjects/ObjectRepository.screen.js');
const config = require('../../Utilities/config');
const constants = require('../../Utilities/Constants')
describe('Test Login Session', async () => {
    it('Verify if Login page is displayed after 24 hrs session', async () => {

        ORObj.LoginFunc(config.username, config.password);
        await browser.pause(3000);
        await ORObj.clickOnSideMenu();
        await ORObj.spanishToggle();
        await ORObj.clickOnLinkOnSideMenu(constants.HOMEPAGE_LINK);
        expect(await ORObj.getPageHeaderText()).toExist();
        expect(await ORObj.verifySpanishText()).toExist();
        await browser.takeScreenshot();
        await driver.terminateApp('com.sampleprojectappium');
        await driver.startActivity('com.sampleprojectappium', 'com.sampleprojectappium.MainActivity');
        ORObj.LoginFunc(config.username, config.password);// This should not exist
        await browser.pause(3000);
        expect(await ORObj.getPageHeaderText()).toHaveText(constants.HOMEPAGE_TITLE);
        await ORObj.clickOnSideMenu();
        await ORObj.clickOnLinkOnSideMenu(constants.HOMEPAGE_LINK);
        expect(await ORObj.verifySpanishText()).toExist();
        await browser.takeScreenshot();
        await driver.terminateApp('com.sampleprojectappium');
        await utilObj.updateDeviceDateTime();
        await driver.startActivity('com.sampleprojectappium', 'com.sampleprojectappium.MainActivity');
        await browser.pause(3000);
        expect(await $('(//android.widget.EditText)[1]')).toBeExisting();
        //expect(await ORObj.getPageHeaderText()).toHaveText(constants.HOMEPAGE_TITLE);

    });
});