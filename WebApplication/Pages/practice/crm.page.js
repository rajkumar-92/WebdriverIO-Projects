class CRMPage{
get forgotpwdLink(){return $('=Forgot Password?');}

async moveToElement(element)
{
    await element.waitForDisplayed();
    await element.moveTo();
}

}
module.exports=new CRMPage();