class alertsPage{
async clickon_AlertBtn(index)
{
 await (await $(`ul li:nth-child(${index}) button`)).click();
}

async getResult_Text()
{
    await $('#result').waitForDisplayed();
    return await $('#result').getText();
}



}
module.exports=new alertsPage();