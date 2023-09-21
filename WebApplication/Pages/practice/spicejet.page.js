class spicejet{
get clickOn_FromLocation(){
    return $("[data-testid='to-testID-origin']")
}

get clickOn_ToLocation(){
    return $("[data-testid='to-testID-destination']")
}

get clickOn_DepatureDateIcon(){

   // return $("(//div[@class='css-1dbjc4n r-18u37iz']//*[@data-testid='svg-img'])[2]")
   // return $("(//*[text()='Departure Date']/following-sibling::div/div)[2]")
   return $("[data-testid='departure-date-dropdown-label-test-id']")
}
get clickOn_DepatureLocation(){

    return $("//div[@class='css-76zvg2 r-1xedbs3 r-ubezar' and text()='AGR']")
}

get clickOn_ArrivalLocation(){

    return $("//div[@class='css-76zvg2 r-1xedbs3 r-ubezar' and text()='DEL']")
}

get clickOn_NextIcon(){

    return $('//*[@data-testid="undefined-calendar-picker"]//*[@transform="translate(1 1)"]')
}

get clickOn_PreviousIcon(){

    return $('//*[@data-testid="undefined-calendar-picker"]//*[@transform="matrix(-1 0 0 1 50 1)"]')
}
/* async selectMonth_Date(){
   let month=await $$("//div[@class='css-1dbjc4n r-1mdbw0j r-ymttw5 r-b2dl2 r-mzjzbw r-wk8lta r-tvv088']")
month.forEach(async(ele)=>{
    let attribute=ele.getAttribute("data-testid")
   if(await attribute==='undefined-month-March-2023'){
        console.log(await attribute)
        return false;
   }
})
} */
async selectDay(day){
   return $("//div[@class='css-1dbjc4n']//*[starts-with(@class,'css-1dbjc4n r-1awozwy')]//div[text()='"+day+"']")
   //return $("//div[@data-testid='undefined-month-March-2023']//div[text()='"+day+"']")
}
get length(){
    return $$("//div[@class='css-1dbjc4n r-18u37iz']//div[@class='css-1dbjc4n r-1mdbw0j r-ymttw5 r-b2dl2 r-mzjzbw r-wk8lta r-tvv088']");
}

get spliting(){
    return $("//div[@class='css-1dbjc4n r-18u37iz']//div[@class='css-1dbjc4n r-1mdbw0j r-ymttw5 r-b2dl2 r-mzjzbw r-wk8lta r-tvv088']").getAttribute('data-testid')

}

get month_year(){
    return $$("//div[@class='css-1dbjc4n r-k8qxaj']//div[@class='css-76zvg2 r-homxoj r-adyw6z r-1kfrs79']")
}
async getActualDateValue(day,month,year){
await this.month_year.forEach(async(ele)=>{
    const Month= await ele.getText()
    const actualMonth=Month.split('')[0]
    const Year=await ele.getText()
    const actualYear=Year.split('')[1]
    const actualMonthInNumber=new Date(`${actualMonth}, 2012`).getMonth() + 1;
    const actualYearInNumber=Number(actualYear)
    const actualDateValue=new Date(actualYearInNumber,actualMonthInNumber).valueOf();


        if(actualDateValue > await this.getExpectedDateValue(month,year)){
        await clickOn_PreviousIcon.waitForClickable();
        await clickOn_PreviousIcon.click();
        }
        else if(actualDateValue < await this.getExpectedDateValue(month,year)){
            await this.clickOn_NextIcon.waitForClickable()
            await this.clickOn_NextIcon.click();
            }
            else if(actualDateValue == await this.getExpectedDateValue(month,year)){ 
                await (await this.selectDay(day)).click()
        }
    })
}
    
    async getExpectedDateValue(month,year){
    const expectedMonthInNumber=new Date(`${month}, 2012`).getMonth()  + 1;
    const expectedDateValue=new Date(year,expectedMonthInNumber).valueOf();
    return expectedDateValue;
    }

/* async getActualDateValue(){


    const actualMonth=await (await this.spliting).split('month-')[1].split('-')[0]
    console.log('actualMonth is:'+actualMonth)
    
    const actualYear=await (await this.spliting).split('month-')[1].split('-')[1]
    console.log('actualYear is:'+actualYear)

    const actualMonthInNumber=new Date(`${actualMonth}, 2012`).getMonth() + 1;
    console.log('actualMonthInNumber is:'+actualMonthInNumber)

    const actualYearInNumber=Number(actualYear)
    console.log('actualYearInNumber is:'+actualYearInNumber)

    const actualDateValue=new Date(actualYearInNumber,actualMonthInNumber).valueOf();
    console.log('actualDateValue is:'+actualDateValue)
    return actualDateValue;
    }
    
    async getExpectedDateValue(month,year){
    const expectedMonthInNumber=new Date(`${month}, 2012`).getMonth()  + 1;
    console.log('expectedMonthInNumber is:'+expectedMonthInNumber)

    const expectedDateValue=new Date(year,expectedMonthInNumber).valueOf();
    console.log('expectedDateValue is:'+expectedDateValue)
    return expectedDateValue;
    } */
    
async navigateToMatchingDateGrid(month,year){
    while(await this.getActualDateValue() !== await this.getExpectedDateValue(month,year)){
    if(await this.getActualDateValue() > await this.getExpectedDateValue(month,year)){
    await this.clickOn_PreviousIcon.waitForClickable();
    await this.clickOn_PreviousIcon.click();
    }
    else if(await this.getActualDateValue() < await this.getExpectedDateValue(month,year)){
        await this.clickOn_NextIcon.waitForClickable()
        await this.clickOn_NextIcon.click();
        }
    }
    }

    /* async navigateToMatchingDateGrid(month,year){
        const elements=await $$("//div[@class='css-1dbjc4n r-18u37iz']//div[@class='css-1dbjc4n r-1mdbw0j r-ymttw5 r-b2dl2 r-mzjzbw r-wk8lta r-tvv088']")
        elements.forEach(async(element)=>{
            const actualMonth= await element.getAttribute('data-testid').split('month-')[1].split('-')[0]
            const actualYear=await element.getAttribute('data-testid').split('month-')[1].split('-')[1]
       const actualMonthInNumber=new Date(`${actualMonth}, 2012`).getMonth() + 1;
       const actualYearInNumber=Number(actualYear)
       const getActualDateValue=new Date(actualYearInNumber,actualMonthInNumber).valueOf();
       if(getActualDateValue !==await this.getExpectedDateValue(month,year)){
    
        if(getActualDateValue > await this.getExpectedDateValue(month,year)){
        await this.clickOn_PreviousIcon.waitForClickable();
        await this.clickOn_PreviousIcon.click();
        }
        else if(getActualDateValue < await this.getExpectedDateValue(month,year)){
            await this.clickOn_NextIcon.waitForClickable()
            await this.clickOn_NextIcon.click();
            }
        
        }
        
        })
    } */
    
    
    async selectDateFromIconTrigger(day,month,year){
        await this.clickOn_DepatureDateIcon.waitForClickable()
        //await this.clickOn_DepatureDateIcon.click();
        await this.clickOn_DepatureDateIcon.click();
        await browser.pause(2000)
        await this.navigateToMatchingDateGrid(month,year)
        await (await this.selectDay(day)).click()
        await browser.pause(5000)
    }
    

}
module.exports=new spicejet();