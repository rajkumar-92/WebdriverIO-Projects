const { default: AllureReporter } = require("@wdio/allure-reporter");
const Utility = require('../../Utilities/Utility');

class passengerInformation{
    // Enter passenger information   
    async adult1_firstName(text) {
        let ele=await $('#FIRSTNAMEADULT1')
        await browser.pause(3000);
        //await Utility.waituntil_ForDisplayed(ele)
        await ele.setValue(text)
        //AllureReporter.addStep(`Input Adult1 FirstName: ${text}`)
        AllureReporter.addStep(`Input Adult1 Information`)
    }

    async adult1_SurName(text) {
        let ele=await $('#SURNAMEADULT1')
        await ele.setValue(text)
        //AllureReporter.addStep(`Input Adult1 SurName: ${text}`)
    }

    /*get adult1_Gender() {
    return $('#GENDERADULT1');  
    } */

    async selectGender(text){
        let ele=await $('#GENDERADULT1')
        await Utility.dropDown_ByVisibleText(ele,text)
    // AllureReporter.addStep(`Select Adult1 Gender: ${text}`)
    }

    async adult1_nationality(text){
        let ele=await $('#NATIONALITYADULT1')
        await ele.selectByAttribute('value',text)
    // AllureReporter.addStep(`Select Adult1 Nationality: ${text}`)
    }
    
    async adult1_country(text){
        let ele=await $('#COUNTRYADULT1')
        await ele.selectByAttribute('value',text)
        await browser.pause(300);
    // AllureReporter.addStep(`Select Adult1 country: ${text}`)
    }

    get adult1DOB_date() {
        return $("(//*[contains(@class,'PassengerFormV2')]//input[@placeholder='DD'])[1]");
    }

    get adult1DOB_Month() {
        return $("(//*[contains(@class,'PassengerFormV2')]//input[@placeholder='MM'])[1]");
    }

    get adult1DOB_Year() {
        return $("(//*[contains(@class,'PassengerFormV2')]//input[@placeholder='YYYY'])[1]");
    }

    async selectAdult1_DOB(date, month, year) {
        await (await this.adult1DOB_date).setValue(date);
        await (await this.adult1DOB_Month).setValue(month);
        await (await this.adult1DOB_Year).setValue(year);
        //AllureReporter.addStep(`Input Adult1 DOB: ${date}-${month}-${year}`)
    }

    async adult1_address(text){
    await (await $('#ADDRESS1ADULT1')).setValue(text);
    //AllureReporter.addStep(`Input Adult1 address: ${text}`)
    }

    async adult1_HouseNum(text){
   // await browser.pause(1000);
    await (await $('#HOUSENUMBERADULT1')).setValue(text);
    // AllureReporter.addStep(`Input Adult1 HouseNum: ${text}`)
    }

    async adult1_postalCode(text){
    await (await $('#POSTALCODEADULT1')).setValue(text)
    //AllureReporter.addStep(`Input Adult1 postalCode: ${text}`)
    }

    async adult1_Residency(text){
    await (await $('#TOWNADULT1')).setValue(text)
    //AllureReporter.addStep(`Input Adult1 Residency: ${text}`)
    }

    get adult1_mobileCode(){
    return $('#PHONECODEADULT1')
    }
    get adult1_mobileNum(){
    return $('#MOBILENUMBERADULT1')
    }

    async inputMobileNum(text,Num){
    (await this.adult1_mobileCode).selectByAttribute('value',text);
    await (await this.adult1_mobileNum).setValue(Num);
    //AllureReporter.addStep(`Input Adult1 MobileNum: ${Num}`)
    }

    async adult1_emailAddress(text){
    await (await $('#EMAILADDRESSADULT1')).setValue(text)
    //AllureReporter.addStep(`Input Adult1 emailAddress: ${text}`)
    }

    /*get checkboxes(){
    return $('//span[@class="inputs__box"]')
    }

    async selectCheckbox(value){
        let element=await $('[name*="'+value+'"]');
    await element.click();
    }*/

    async child1_FirstName(text){
    await (await $('[aria-label="input container"] #FIRSTNAMECHILD2')).setValue(text)
    // AllureReporter.addStep(`Input child1 FirstName: ${text}`)
    AllureReporter.addStep(`Inputing Child1 Information`)
    }

    async child1_LastName(text){
    await (await $('[aria-label="input container"] #SURNAMECHILD2')).setValue(text)
    //AllureReporter.addStep(`Input child1 LastName: ${text}`)
    }

    async child1_Gender(text){
    let ele= await $('#GENDERCHILD2')
    await ele.selectByVisibleText(text)
   // await browser.pause(500)
    //AllureReporter.addStep(`Select child1 Gender: ${text}`)
    }
    async selectchild1_DOB(date, month, year) {
        let child1DOB_date=$("(//input[@placeholder='DD'])[2]");
        await (await child1DOB_date).setValue(date);
        let child1DOB_Month=$("//input[@aria-label='month']")[2];
        await (await child1DOB_Month).setValue(month);
        let child1DOB_Year=$("//input[@aria-label='year']")[2];
        await (await child1DOB_Year).setValue(year);
       
        //AllureReporter.addStep(`Select child1 DOB: ${date}-${month}-${year}`)
    }

   /*  async infant1_FirstName(text){
    await (await $('[aria-label="input container"] #FIRSTNAMEINFANT3')).setValue(text)
    // AllureReporter.addStep(`Input child1 FirstName: ${text}`)
    AllureReporter.addStep(`Inputing Child1 Information`)
    }
    
    async infant1_LastName(text){
    await (await $('[aria-label="input container"] #SURNAMEINFANT3')).setValue(text)
    //AllureReporter.addStep(`Input child1 LastName: ${text}`)
    }
    
    async infant1_Gender(text){
    let ele= await $('#GENDERINFANT3')
    await ele.selectByVisibleText(text)
    //AllureReporter.addStep(`Select child1 Gender: ${text}`)
    }
    get infant1DOB_date() {
    return $("(//*[contains(@class,'PassengerFormV2')]//input[@placeholder='DD'])[3]");
    } */
    
    get child1DOB_Month() {
    return $("(//*[contains(@class,'PassengerFormV2')]//input[@placeholder='MM'])[3]");
    }
    
    get child1DOB_Year() {
    return $("(//*[contains(@class,'PassengerFormV2')]//input[@placeholder='YYYY'])[3]");
    }
    
    async selectchild1_DOB(date,month,year){
    await (await this.child1DOB_date).setValue(date);
    await (await this.child1DOB_Month).setValue(month);
    await (await this.child1DOB_Year).setValue(year);
    await browser.pause(500)
    //AllureReporter.addStep(`Select child1 DOB: ${date}-${month}-${year}`)
    }

    async homekeeper_LastName(text){
    await (await $('#SURNAMEnull1')).setValue(text)
    }

    get homekeeper_MobileCode(){
    return $('#PHONECODEnull1')
    }

    get homekeeper_MobileNum(){
    return $('#MOBILENUMBERnull1')
    }

    async input_HomeKeeperNum(text,Num){
    (await this.homekeeper_MobileCode).selectByAttribute('value',text);
    await Utility.scrollIntoView(this.homekeeper_MobileNum);
    await (await this.homekeeper_MobileNum).setValue(Num);
    }
    
    async infant_Notborn(){
        let ele=await $("div[aria-label='Infant not born yet'] span[class='inputs__box']")
        //if(ele.isSelected===false){
            //await browser.pause(2000);
            await ele.click();
    }

    async agreeCheckbox(){
        let ele=await $("//div[@class='UI__content']//span[@class='inputs__box']//*[name()='svg']")
        //await Utility.waituntil_ForDisplayed(ele);
        await ele.click();
    }

    async furtherButton(){
    let ele=await $('[class*="ContinueButton"] button');
    await ele.click();
    AllureReporter.addStep(`Clicking on continue button`)
    }
}
module.exports = new passengerInformation();