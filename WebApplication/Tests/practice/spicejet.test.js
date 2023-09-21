const Utility=require('../../Utilities/Utility');

const spicejet=require('../../WebApplication/Pages/spicejet.page')

describe('validating spicejet homepage', async() => {
    it('booking a flight ticket', async() => {
        await browser.url('https://www.spicejet.com/')
        await browser.pause(2000)
      /* //  await Utility.clickOnElement(await spicejet.clickOn_FromLocation)
      //  await Utility.clickOnElement(await spicejet.clickOn_DepatureLocation)
       // await Utility.clickOnElement(await spicejet.clickOn_ToLocation)
        //await Utility.clickOnElement(await spicejet.clickOn_ArrivalLocation)
        await (await spicejet.clickOn_DepatureDateIcon).click()
        await browser.pause(2000) 

       const day=25,month="May",year=2023;
       await spicejet.navigateToMatchingDateGrid(month,year)
       await spicejet.selectDay(day)
        await browser.pause(5000)  */
/* await (await spicejet.clickOn_DepatureDateIcon).click()
    const elements=await $$("//div[@class='css-1dbjc4n r-k8qxaj']//div[@class='css-76zvg2 r-homxoj r-adyw6z r-1kfrs79']")
      
   elements.forEach(async(ele)=>{
   console.log(await ele.getText()); 
   }) */
   await spicejet.clickOn_DepatureDateIcon.click()
   let day=25,month="March",year=2023;
//await spicejet.selectDateFromIconTrigger(day,month,year)
await spicejet.getActualDateValue(day,month,year)
      
      
    });
});