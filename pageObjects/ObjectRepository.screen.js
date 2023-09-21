const AllureReporter = require('@wdio/allure-reporter').default;
const UtilObj=require('../Utilities/Utility.js');
var anchor;
    var startPoint;
    var endPoint;
/*  async()=>{
     size=await browser.getWindowSize();
     anchor=parseInt(size.height*0.6);
     startPoint=parseInt(size.width*0.3);
     endPoint=parseInt(size.width*0.5);
}  */

anchor=1000;
startPoint=2000;
endPoint=700;
class ObjectRepository {
    


    get OTPHeader() {
        return $('android.view.View');
    }
    async LoginFunc(username, password) {
        
       if((await (await $('(//android.widget.EditText)')).isExisting()))
        {
            AllureReporter.addStep(`Entering username ${username}`);
            // await (await $('[text*=Email]')).setValue(username);
            await (await $('(//android.widget.EditText)[1]')).setValue(username);
             AllureReporter.addStep(`Entering password ${password}`);
             await (await $('(//android.widget.EditText)[2]')).setValue(password);
             //await (await $('[text*=Password]')).setValue(password);
             AllureReporter.addStep("Clicking on Login Button");
             await (await $('android.view.ViewGroup')).click();
        }
       else{
        AllureReporter.addStep(`Already Loggin In`);
        }
        
    }

    async getPageHeaderText() {
        const header = (await $('android.view.View')).getText();
        return header;
       // return await header.getText();
    }
    async clickOnSideMenu() {
            AllureReporter.addStep("Clicking on SideMenu");
            await (await $('android.widget.Button')).click();
    }
    async clickOnLinkOnSideMenu(headerName) {
           // AllureReporter.addStep(`Clicking ${headerName} link on side menu`);
            await (await $('android=new UiSelector().className("android.view.ViewGroup").resourceId("' + headerName + '")')).click();
            AllureReporter.addStep(`Clicking ${headerName} link on side menu`);

    }
    async getOTPHeaderText() {
        await (await $('android.view.View')).getText();
    }

    async clickon_backbtn(){
        await (await $('//android.widget.TextView[@text="BACK"]')).click();
    }
    async clickOnSectionHeaders(headerName) {
        AllureReporter.addStep(`Clicking on ${headerName} section`);
        const variable = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("'+headerName+'")');
        await variable.click();
    }
    async selectMonthlyPaymentRadioButton()
    {
        AllureReporter.addStep('Selecting Monthly Payment Radio button')
        var element=await $('(((//android.widget.ScrollView//android.view.ViewGroup)[3]//android.view.ViewGroup)[2]//android.view.ViewGroup)[2]//android.widget.TextView');
        await this.scrollToElement(element);
        element.click();
    }
    async selectAdditionalAmountsRadioButton()
    {
        AllureReporter.addStep('Selecting Additional Amounts Radio Button')
        var element=await $('(((//android.widget.ScrollView//android.view.ViewGroup)[3]//android.view.ViewGroup)[2]//android.view.ViewGroup)[2]//following-sibling::android.view.ViewGroup[2]//android.widget.TextView');
        await this.scrollToElement(element);
        element.click();
    }
    async selectPrincipalAmountsRadioButton()

    {
        AllureReporter.addStep('Selecting Principal Amounts Radio Button');
        console.log('Radio button selecting');
        //var element= await $('(((//android.widget.ScrollView//android.view.ViewGroup)[3]//android.view.ViewGroup)[2]//android.view.ViewGroup)[2]//following-sibling::android.view.ViewGroup[1]//android.widget.TextView/..');
        var element =await $('//android.widget.ScrollView//android.view.ViewGroup//android.view.ViewGroup[4]//android.view.ViewGroup[2]//android.view.ViewGroup//android.view.ViewGroup[2]//android.widget.TextView');
       await this.scrollToElement(element);
       await element.click();
    }
    async selectRadioButton(radioButtonName) {
        AllureReporter.addStep(`Selecting radio button:  ${radioButtonName}`);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Monthly Payment")).scrollForward()');
       const radioButton = await $('//android.widget.TextView[@text="Payment Type"]/..//android.view.ViewGroup//android.widget.TextView[contains(@text,"' + radioButtonName + '")]');
       await radioButton.click();
    
    } 
 async inputValueinTextField(headerName, inputValue) {
        AllureReporter.addStep(`Entering text in ${headerName} with input Data: ${inputValue}`);
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().className("android.widget.EditText"))');
        const field = await $('(//android.widget.TextView[contains(@text,"' + headerName + '")])[2]/../android.view.ViewGroup/android.widget.EditText');

        await field.setValue(inputValue);
    } 

    async selectingeffectivedate() {
        await (await $('(//android.widget.TextView[@text="Effective Date"]//following-sibling::android.view.ViewGroup)[1]//android.widget.TextView[2]')).click();
       // var months = await $('android=new UiSelector().className("android.widget.TextView").resourceId("undefined.header.title").text("' + month + '")');
       let month= await $("//*[@resource-id='undefined.header.title']"); 
     
       while(!expect(month).toHaveTextContaining("February 2023"))
        {
            await (await $('//android.view.ViewGroup[@resource-id="undefined.header.rightArrow"]')).click();

        } 
await (await $('//android.widget.Button[@content-desc=" Friday 3 February 2023 "]/android.widget.TextView')).click();

    }

    
    async inputValueInPaymentAmount(inputValue) {
        AllureReporter.addStep(`Entering ${inputValue} in Payment Amount field`);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().className("android.widget.EditText")).scrollForward()');
        var element=await $('(//android.widget.EditText)[1]');
        await element.setValue(inputValue);
    }
    async scrollToElement(element)
    {
        do {
            
           await UtilObj.swipeTillElement(anchor, startPoint, endPoint);

        } while ((await $(element)).length == 0)
    }
    async inputValueinLateFees(inputValue)
    {
        AllureReporter.addStep(`Entering ${inputValue} in Late Fees field`);
       var element=await $('(//android.widget.EditText)[2]');
        await element.setValue(inputValue);
    }
    async inputValueinAdditionalPricipal(inputValue)
    {
        AllureReporter.addStep(`Entering ${inputValue} in Additional Pricipal field`);
       var element=await $('(//android.widget.EditText)[3]');
        await element.setValue(inputValue);
    }
    async inputValueinAdditionalEscrow(inputValue)
    {
        AllureReporter.addStep(`Entering ${inputValue} in Additional Escrow field`);
       var element=await $('(//android.widget.EditText)[4]');
        await element.setValue(inputValue);
    }
    async inputValueinTotalPayment(inputValue)
    {
        AllureReporter.addStep(`Entering ${inputValue} in Total Payment field`);
       var element=await $('(//android.widget.EditText)[5]');
        await element.setValue(inputValue);
    }
    
    async clickOnButtonwithText(buttonText) {
        AllureReporter.addStep(`Clicking on ${buttonText} Button`);
       const variable = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("' + buttonText + '")).scrollForward()');
       await variable.click();  
       //  const variable = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("'+buttonText+'"))');              
    }
   
    async clickContinue()
    {
        AllureReporter.addStep("Clicking on Continue Button");
        
    }
    async clickOnPopUp(response) {
        AllureReporter.addStep(`Clicking on ${response} Button`);
        await (await $('//android.widget.TextView[contains(@text,"' + response + '")]')).click();
    }
    async selectCheckbox() {
        AllureReporter.addStep("Selecting checkbox");
        //const element = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().className("android.widget.CheckBox"))');
        const element = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().className("android.widget.CheckBox")).scrollForward()');
       var flag = await element.getAttribute('checked'); //false
       // await element.click();
       if (flag==="false") {
           await element.click();
        }  

    }
    async spanishToggle()
    {
        AllureReporter.addStep("Updating language");
        await (await $('android.widget.Switch')).click();
    }
    async verifySpanishText()
    {
        return await (await $('//android.widget.TextView[@text="mi hipoteca"]')).getText();
    }
}
module.exports = new ObjectRepository();