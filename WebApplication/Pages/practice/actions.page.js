class spicejet{
get addons()
{
return $("//div[text()='Add-ons']");
}

get Taxi_Services()
{
return $("//div[text()='Taxi Services']");
}

get search()
{
    return $('#target');
}

get resultLabel()
{
    return $('#result');
}

async moveToElement(element)
{
await element.waitForDisplayed();
await element.moveTo();
}

async clickOnElement(element)
{
    await element.waitForDisplayed();
    await element.click();
}

}
module.exports=new spicejet();