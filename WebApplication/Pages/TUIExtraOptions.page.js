const { default: AllureReporter } = require("@wdio/allure-reporter");
const Utility = require('../../Utilities/Utility');

class passengerInsurance{
    //Select NoInsurance
    /*async selectInsurance(value) {
        let insuranceCodes=await $('button[aria-label*="continue button"]')
        await Utility.waituntil_ForDisplayed(insuranceCodes);
        for (var i = 0; i < insuranceCodes.length; i++) {
            if (await insuranceCodes[i].getText() === value) {
                await insuranceCodes[i].click();
            }
        }
        AllureReporter.addStep(`Selecting the Insurance type:${value}`)
    } */


    async adultDOB(date, month, year) {
        await $("//div[@aria-label='Adult 1 passenger DOB']//div[@aria-label='input container']//div//input[@placeholder='DD']").setValue(date);
        await $("//div[@aria-label='Adult 1 passenger DOB']//div[@aria-label='input container']//div//input[@placeholder='MM']").setValue(month);
        await $("//div[@aria-label='Adult 1 passenger DOB']//div[@aria-label='input container']//div//input[@placeholder='YYYY']").setValue(year);
    }
    
    async childDOB(date, month, year) {
        await $("//div[@aria-label='Child 1 passenger DOB']//div[@aria-label='input container']//div//input[@placeholder='DD']").setValue(date);
        await $("//div[@aria-label='Child 1 passenger DOB']//div[@aria-label='input container']//div//input[@placeholder='MM']").setValue(month);
        await $("//div[@aria-label='Child 1 passenger DOB']//div[@aria-label='input container']//div//input[@placeholder='YYYY']").setValue(year);
    }
    
    async infantDOB(date, month, year) {
        await $("//div[@aria-label='Infant 1 passenger DOB']//div[@aria-label='input container']//div//input[@placeholder='DD']").setValue(date);
        await $("//div[@aria-label='Infant 1 passenger DOB']//div[@aria-label='input container']//div//input[@placeholder='MM']").setValue(month);
        await $("//div[@aria-label='Infant 1 passenger DOB']//div[@aria-label='input container']//div//input[@placeholder='YYYY']").setValue(year);
    }

    //Select Insurance(Cancel + travel insurance)
    async selectInsurance(value,dd,mm,yy,dd1,mm1,yy1) {
        //select insurance for passengers
        let paxInsurance=(await $('//span[@class="GetQuoteV2__selectAll"]'));
        await paxInsurance.click();
        await this.adultDOB(dd,mm,yy);
        await this.childDOB(dd1,mm1,yy1);
        //await this.infantDOB(dd2,mm2,yy2);
        let infantNotBorn = await $("//div[@class='GetQuoteV2__infantNotBorn GetQuoteV2__notChecked']//span[@class='inputs__box']");
        await infantNotBorn.click();
        await browser.pause(1000);
        let chooseInsuranceBtn = await $('button[class*="GetQuoteV2__button"]');
        //await chooseInsuranceBtn.waitForEnabled()
        await chooseInsuranceBtn.click();
        await browser.pause(2000);
        let combiInsurance = await $("//h3[contains(text(),'Combi cancellation insurance + travel assistance i')]");
        await Utility.scrollIntoView(combiInsurance);
        await combiInsurance.click();
      await browser.pause(3000);
        /*   let checkAdult = await $("body > div:nth-child(4) > div:nth-child(1) > section:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > span:nth-child(3) > span:nth-child(1)")
        await checkAdult.click();
        let checkChild = await $("body > div:nth-child(4) > div:nth-child(1) > section:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > label:nth-child(2) > span:nth-child(3) > span:nth-child(1)")
        await checkChild.click();  
        //let checkInfant = await $("body > div:nth-child(4) > div:nth-child(1) > section:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > label:nth-child(3) > span:nth-child(3) > span:nth-child(1)")
        //await checkInfant.click();
        //await browser.pause(4000);
        await (await $("button[class*=ReviewInsurancePricesButtons__button]")).click(); 
        await browser.pause(3000);
        await (await $("button[aria-label='action apply'][role='button']")).click(); */
        const select=await $("(//button[@aria-label='button'][normalize-space()='Select'])[4]");
        await select.click();
        AllureReporter.addStep(`Selecting the Insurance type:${value}`)
    }

    async clickContinueButtonOnInsurance() {
        //let ele=await $('button[aria-label*="continue button"]')       
        let ele = await $('button[aria-label="extra options continue button"]')
        await ele.waitForDisplayed(3000)
        await ele.click(); 
        AllureReporter.addStep(`Clicking on Continue Button`)  
    } 
}
module.exports = new passengerInsurance();