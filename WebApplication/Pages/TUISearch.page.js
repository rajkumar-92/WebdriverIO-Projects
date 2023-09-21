const { default: AllureReporter } = require("@wdio/allure-reporter");
const Utility = require('../../Utilities/Utility');

class flightSearch{

//Login
    get userName() {
        return $('#userNameInput');
    }
          
    get passWord() {  
        return $('#passwordInput');
    }
          
    get clickBtn() {
        return $("#submitButton");
    }
    
    async EnterUserName(text) {
        await this.userName.setValue(text);
    }
    
    async EnterPwd(text) {
        await this.passWord.setValue(text);
    }
    
    async click_LoginBtn() {        
    await this.clickBtn.click() 
    }

    //Selecting Language
    async accept() {
        var length = await $$('#Ebene_1').length;
        if (length > 0) {
            await (await $('[class="cmButtons"] #cmCloseBanner')).click();
        }
    }

    async LanguageLink() {
        let element = await $('.cl-flag-icon');
        await element.click();
    }

    async LanguageDropdown() {
        let element = await $("select[name='langCode']");
        await element.click();
        let english = await $('select[class="cl-form__select js-language"]>option:nth-child(1)')
        english.click()
    }

    async submit() {
        let element = await $('button[type="submit"]');
        await element.click();
    }

    async selectPrefLanguage() {
        await this.LanguageLink();
        //await browser.pause(2000);
        await this.LanguageDropdown();
        //await browser.pause(2000);
        await this.submit();
    }

   //Choose Departure Airport
    async ClickOn_departPort() {
        const element = await $('tui-flight-search-bar').shadow$('#searchField-airport-outbound');
        await element.click();
        AllureReporter.addStep(`Clicking on departure airport`);
   }

    async selectDepartPort(Country) {
        const element = await $('tui-flight-search-bar').shadow$(`#${Country}`);
        await element.click();
        AllureReporter.addStep(`Selecting departure airport: ${Country}`);
   }

   //Choose Arrival Airport
    async ClickOn_destinationPort() {
        const element = await $('tui-flight-search-bar').shadow$('#searchField-airport-inbound');
        await element.click()
        AllureReporter.addStep(`Clicking on destination airport`);
   }

    async selectDestinationtPort(Country) {
        const ele = $('tui-flight-search-bar').shadow$('ul[class="list__19a00"]:nth-child(1)>li>a[id="'+Country+'"]');
        await ele.click();
        AllureReporter.addStep(`Selecting destination airport: ${Country}`);
   }

   //Select departure and arrival dates
   async selectDate(date, month, year) {
        await (await this.selectDate).setValue(date);
        await (await this.selectMonth).setValue(month);
        await this.selectYear.setValue(year);
   }

   async selectFromDate(value, date) {
    const calendarTB = await $('tui-flight-search-bar').shadow$('#searchField-date-outbound');
    await calendarTB.click();

    const monthDD = await $('tui-flight-search-bar').shadow$('#selectBox');
    await monthDD.click();
    const monthvalues = await $('tui-flight-search-bar').shadow$$('#selectBox option');
    for (var m = 0; m < monthvalues.length; m++) {
        console.log(monthvalues[m].getText());
        if (await monthvalues[m].getAttribute('value') === value) {
            await monthvalues[m].click();
            break;
        }
    }
    var elements = await $('tui-flight-search-bar').shadow$$('#calendarItems-outbound:nth-child(3) div[class*="entry"]');

    for (var i = 0; i < elements.length; i++) {
        var actualDate = await elements[i].getText();
        if (actualDate === date) {
            var attribute = await elements[i].getAttribute('class');
            // await expect(attribute).to.contain("available");
            if(attribute.includes('available'))
            {
                await elements[i].click();
                break;
            }
            else {
                for (++i; i < elements.length; i++) {
                    attribute = await elements[i].getAttribute('class');
                    if (attribute.includes('available')) {
                        await elements[i].click();
                        break;
                    }
                }
                break;
            }
        }
    }

    AllureReporter.addStep(`Selecting From date: ${value,date}`)
}

async selectToDate(value, date) {
    const calendarTB = await $('tui-flight-search-bar').shadow$('#searchField-date-inbound');
    await calendarTB.click();

    const monthDD = await $('tui-flight-search-bar').shadow$('[id*=calendar-inbound] #selectBox');
    await monthDD.click();
    const monthvalues = await $('tui-flight-search-bar').shadow$$('[id*=calendar-inbound] #selectBox option');
    for (var m = 0; m < monthvalues.length; m++) {
        console.log(monthvalues[m].getText());
        if (await monthvalues[m].getAttribute('value') === value) {
            await monthvalues[m].click();
        }
    }
    await browser.pause(3000);
    var elements = await $('tui-flight-search-bar').shadow$$('[id*=calendar-inbound] #calendarItems-inbound div[class*="entry"]');
    for (var i = 0; i < elements.length; i++) {
        var actualDate = await elements[i].getText();
        if (actualDate === date) {
            var attribute = await elements[i].getAttribute('class');
            // await expect(attribute).to.contain("available");
            if (attribute.includes('available')) {
                await elements[i].click();
                break;
            }
            else {
                for (++i; i < elements.length; i++) {
                    var attribute = await elements[i].getAttribute('class');
                    if (attribute.includes('available')) {
                        await elements[i].click();
                        break;
                    }
                }
                break;
            }
        }
    }
    AllureReporter.addStep(`Selecting To date: ${value,date}`)
}
    //Selecting number of Passengers
    get clickOnTravelers() {
        return $('tui-flight-search-bar').shadow$('#searchField-pax');
    }

    async selectPassengers(adults, children) {
        await (await this.clickOnTravelers).click();
        let adultsDD = await $('tui-flight-search-bar').shadow$('#travelPartySelectAdults');
        await Utility.dropDown_ByAttribute(adultsDD, "value", adults)
        let childDD = await $('tui-flight-search-bar').shadow$('#travelPartySelectChildren');
        await Utility.dropDown_ByAttribute(childDD, "value", children)
        AllureReporter.addStep("Selecting number of passengers")
    }

    async selectchildAge(Adults, Ages, Noofchildren) {
        var infantCount = 0;
        for (var i = 0; i < Noofchildren; i++) {
            let locator = await $('tui-flight-search-bar').shadow$('#childAgeSelectionSection div[class*="group"] select[name="' + i + '"]');
            await Utility.dropDown_ByAttribute(locator, "value", Ages[i]);
            if (Ages[i] <= 1) {
                infantCount++;
            }

            if (infantCount > Adults) {
                let errorMsg = await $('tui-flight-search-bar').shadow$('#errorMsgPaxPanel div[class*="text"]');
                expect(errorMsg).to.exist;
                assert.fail();
            }
        }
        AllureReporter.addStep(`Selecting the children ages: ${Ages}`)
    }

    async clickOnSearchBtn() {
        let ele=await $('tui-flight-search-bar').shadow$('#searchButton');
        await ele.click()
        
        AllureReporter.addStep(`Clicking on search button`);
    }
}
module.exports = new flightSearch();