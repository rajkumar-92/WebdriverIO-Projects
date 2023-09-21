
const calendarPage = require("../../WebApplication/Pages/calendar.page");

describe('feature : calendar handle', async() => {
    beforeEach('OpenApp', async() => {
        await browser.url('https://www.globalsqa.com/demo-site/datepicker/')  
        await browser.maximizeWindow()    
    });

    it('should handle simple date picker', async() => {
        await browser.switchToFrame(await calendarPage.iframeSimpleDate)
      await (await calendarPage.datepickerInput).setValue('02/03/2023')
        await browser.pause(5000)
        await browser.switchToParentFrame()
    });

    it('should handle dropdown date picker', async() => {
        
       await calendarPage.dropdowndatepickerTab.click();
       await browser.switchToFrame(await calendarPage.iframeDropdownDate)
        await (await calendarPage.datepickerInput).click()
        const day=7,month="Feb",year=2023;
        await calendarPage.selectDropdownDate(day,month,year)
        await browser.pause(5000)
        await browser.switchToParentFrame()
   
    });

    it.only('should handle icon picker date', async() => {
    await (await calendarPage.clickOnIconTriggerDatePickerTab).click()
    const day=12,month="Mar",year=2019;
    await browser.switchToFrame(await calendarPage.iframeTriggerDate)
    await calendarPage.selectDateFromIconTrigger(day,month,year)
    await browser.switchToParentFrame();

    });

});