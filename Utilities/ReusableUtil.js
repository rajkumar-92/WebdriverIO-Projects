const AllureReporter = require('@wdio/allure-reporter').default;
const ORObj=require('../pageObjects/ObjectRepository.screen.js');
const configData=require('../Utilities/config');
class ReusableUtil
{
    async navigationTillSideMenu(username,password,linkname)
    {
       await ORObj.LoginFunc(username,password);
       await ORObj.clickOnSideMenu();
       await ORObj.clickOnLinkOnSideMenu(linkname);
    }
    async totalPayment()
    {
        var text=await (await $('(//android.widget.EditText)[1]')).getText();//1,000
        var splitText=text.split(",");//0->1  1->000
        var paymentAmount= parseInt(splitText[0].concat(splitText[1]));//1000
        var lateFees= parseInt(await (await $('(//android.widget.EditText)[2]')).getText());
        var addEscrow= parseInt(await (await $('(//android.widget.EditText)[3]')).getText());
        var addPrincipal=parseInt(await (await $('(//android.widget.EditText)[4]')).getText());
        var sum=paymentAmount+lateFees+addEscrow+addPrincipal;
         return sum;
    }

}module.exports=new ReusableUtil();