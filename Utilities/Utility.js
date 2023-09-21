const { default: AllureReporter } = require("@wdio/allure-reporter");
const moment = require("moment/moment");
const webautomationpage = require("../WebApplication/Pages/webautomationpage");


class Utility {


    async addstep(log) {
        AllureReporter.addStep(`${log}`);
    }

    async startstep(log) {
        AllureReporter.startStep(`${log}`);
    }

    async endstep(log) {
        AllureReporter.endStep(`${log}`);
    }

    async clickOnElement(element) {
        await element.waitForDisplayed();
        await element.click();
    
    }

    async moveToElement(element) {
        await element.waitForDisplayed();
        await element.moveTo();
        await browser.pause(2000);
    }

    async inputValue(locator, value) {
        await locator.setValue(value);
    }

    async getValue(element) {
        await element.getValue();
    }

    async clearValue(element) {
        await element.click();
        await element.clearValue();
    }

    async getElementText(element) {
        return await element.getText();
    }

    async toContain(actual, expected) {
        expect(actual).toContain(expected);
    }

    async toEqual(actual, expected) {

        expect(actual).toEqual(expected);
        this.addstep(`Actual and Expected matches`);
    }

    async toHaveText(actual, expected) {
        await expect(actual).toHaveText(expected)
    }


    async toHaveTextContain(element, expectedText) {
        await expect(element).toHaveTextContaining(expectedText)

    }

    async toBeExisting(element) {
        await expect(element).toBeExisting();

    }

    async toBeDisplayed(element) {
        await expect(element).toBeDisplayed();

    }

    async waituntil_ForDisplayed(element) {

        await browser.waitUntil(async () => {
            return await element.isDisplayed() === true
        }, 8000, `${element} is not displayed after given time`)
    }

    async waituntilTo_getTitle(element) {

        await browser.waitUntil(async () => {
            return await browser.getTitle() === `${element}`
        }, 6000, 'title is not displayed after given time')
        console.log(await browser.getTitle());
    }

    async waitForEnabled(element) {

        await browser.waitUntil(async () => {
            return await element.waitForEnabled() === true
        }, 6000, `${element} is not enabled after given time`)

    }

    async waitForExist(element) {

        await browser.waitUntil(async () => {
            return await element.waitForExist() === true
        }, 6000, `${element} is not exist after given time`)

    }

    async selectCheckBox(element, checkboxName) {
        var flag = await element.isSelected(); //false.. getAttribute('aria-checked')
        if (flag === false) {
            AllureReporter.addStep(`Selecting the checkbox:  ${checkboxName}`);
            await element.click();
        }
        else {
            AllureReporter.addStep(`checkbox: ${checkboxName} is already selected`);
        }
    }
    async selectCheckboxFromList(elements, checkboxName) {

        await elements.filter(async ele => {
            var flag = await ele.isSelected(); //false
            var attribute = await ele.getAttribute('value');
            if (flag === false && attribute === checkboxName) {
                AllureReporter.addStep(`Selecting the checkbox:  ${checkboxName}`);
                await ele.click();
                return;
            }
        });
    }

    async selecctAllCheckboxes(elements) {

        await elements.filter(async ele => {
            var flag = await ele.isSelected(); //false
            var chkbox = await ele.getAttribute('value');
            if (flag === false) {
                AllureReporter.addStep(`Selecting the checkbox:${chkbox}`);
                await ele.click();
            }
        });
    }


    async selectRadioButton(radiobtn) {
        AllureReporter.addStep(`Selecting radio button :${radiobtn}`);
        var element = $('//*[@value="' + radiobtn + '"]')
        //await element.toBeExisting();
        await element.click();

    }

    async suggestivedropDown(elements, text) {

        elements.every(async element => {
            var value = await element.getText();
            if (await value.toLowerCase() === text.toLowerCase()) {
                AllureReporter.addStep(`Selecting the dropdown:  ${value}`);
                await element.click();
                return false;
            }

        });

    }



    async dropDown_ByVisibleText(element, text) {
        await element.selectByVisibleText(text);
        //console.log(await selectBox.getText('option:checked'));

    }

    async dropDown_ByIndex(element, index) {
        await element.selectByIndex(index);
        var print = await element.getValue();
        AllureReporter.addStep(`Selecting the dropdown: ${print}`)
    }

    async dropDown_ByAttribute(element, attribute, value) {
        await element.selectByAttribute(attribute, value);

    }

    async dragAndDrop(sourceElement, targetElement) {
        await sourceElement.dragAndDrop(targetElement);
        await browser.pause(3000);
    }

    async scrollIntoView(element) {

        await element.scrollIntoView();
        await browser.pause(3000)
    }

    async switchToWindow(element, text) {

        var parentWindow = await browser.getWindowHandle()
        await this.clickOnElement(element)
        await browser.pause(3000)
        var id = await browser.getWindowHandles()
        for (var i = 0; i < id.length; i++) {
            if (id[i] != parentWindow && (await browser.getTitle()).includes(text)) {
                await browser.switchToWindow(id[i])
                await browser.maximizeWindow()
                break;
            }
        }
        await browser.pause(3000)
        await browser.switchToWindow(parentWindow)
        await browser.pause(3000)

    }

    async switchToFrame(element) {
        await this.scrollIntoView(element)
        await element.isDisplayed();
        await browser.switchToFrame(element)
      

    }
    async scrollInside(locator,element){
        await locator.scrollIntoView()
    while(!element.isDisplayedInViewport()){
          await browser.execute(()=>{
            var el=document.querySelector(locator)
            el.scrollTop=el.scrollTop+100 
        })
       }
       element.scrollIntoView() 
     await browser.pause(3000)
    }


    async swipeTillElement(anchor, startPoint, endPoint) {
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint
                },
            },
            {
                action: 'wait',
                options: {
                    ms: 2000
                },
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint
                },
            },
            {
                action: 'release',
                options: {}
            },
        ])
    }
    ReadingwholeSheet(filename) {
        const xlsx = require("xlsx"); //Adding xlsx dependency to handle excel sheets
        const workbook = xlsx.readFile(filename);//Reading the workbook
        const sheetNames = workbook.SheetNames; //Getting sheetNames.
        //Get the data of sheet1
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);

        //Converting the output data to String format using stringify method and converting it to array
        var jsonArray = JSON.parse(JSON.stringify(data));
        return jsonArray;
    }

    async dateFormatter(date1, formatter)//12-Dec-2022,dd-MM-YYYY
    {
        const date = new Date(date1);
        const formattedDate = moment(date).format(formatter);

        AllureReporter.addStep(formattedDate);
        //return formattedDate;
        /* let day=date.getDate();
                
             let month=date.getMonth()+1;
             let year=date.getFullYear(); 
            moment().format('MMMM Do YYYY, h:mm:ss a'); // December 8th 2022, 12:11:40 pm
        moment().format('dddd');                    // Thursday
        moment().format("MMM Do YY");               // Dec 8th 22
        moment().format('YYYY [escaped] YYYY');     // 2022 escaped 2022
        moment().format();                 
        */
    }

    async isAlertPresent() {
        try {

            browser.isAlertOpen();
        }
        catch (e) {
            AllureReporter.addStep('Alert is not present in page');
        }
    }


    async acceptAlert() {
        try {
            await this.isAlertPresent();
            browser.acceptAlert();
            AllureReporter.addStep('Clicking on accept on alert');

        }
        catch (e) {
            AllureReporter.addStep('Unable to click on accept on alert');
        }
    }
    async dismissAlert() {
        try {
            await this.isAlertPresent();
            browser.dismissAlert();
            AllureReporter.addStep('Clicking on cancel on alert ');
        }
        catch (e) {
            AllureReporter.addStep('Unable to click cancel on alert');
        }
    }

    async getAlertText() {
        try {
            await this.isAlertPresent();
            const text = await browser.getAlertText();
            await browser.pause(3000);
            AllureReporter.addStep(`Alert text is: ${text}`);
        }
        catch (e) {
            AllureReporter.addStep('Unable to getText of alert');
        }
    }

    async sendAlertText(log) {
        try {
            await this.isAlertPresent();
            await browser.sendAlertText(`${log}`);
        }
        catch (e) {
            AllureReporter.addStep('Unable to send Text on alert');
        }
    }


    async keyboardActions(inputKey) {
        await browser.keys(inputKey);
        //https://w3c.github.io/webdrivPer/#keyboard-actions
    }
    async tapElement(element, XOffset, YOffset, noOfTouches) {
        await driver.touchPerform([
            {
                action: 'tap',
                options:
                {
                    element: element,
                    x: XOffset,
                    y: YOffset,
                    count: noOfTouches
                }
            }

        ]);
    }
    async pressAction(XOffset, YOffset) {
        await driver.touchPerform([
            {
                action: 'press',
                options:
                {
                    x: XOffset,
                    y: YOffset
                }
            }

        ]);
    }
    async updateDeviceDateTime() {
        await (driver.startActivity("com.android.settings", "com.android.settings.Settings", "com.android.settings", "com.android.settings.Settings"));
        var element;
        do {
            element = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("System"))');
            await element.click();
        } while (element.length == 0)
        await element.click();
        await (await $('//android.widget.TextView[@text="Date & time"]')).click();
        let status = await (await $('//*[@resource-id="android:id/switch_widget"]')).getAttribute('checked');
        if (status === true)
            await (await $('//*[@resource-id="android:id/switch_widget"]')).click();
        await (await $('//*[@text="Date"]')).click();
        let currentDate = await (await $('//*[@checked="true"]')).getText();
        let updateDate = parseInt(currentDate) + 1;
        console.log(updateDate);
        await (await $('//*[@text="' + updateDate + '"]')).click();
        await (await $('//android.widget.Button[@resource-id="android:id/button1"]')).click();
        await driver.terminateApp('com.android.settings');
    }
}
module.exports = new Utility();
