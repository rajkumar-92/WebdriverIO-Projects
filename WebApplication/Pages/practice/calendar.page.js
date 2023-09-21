class calendarPage{
get simpledatepickerTab(){
    return $('//li[@id="Simple Date Picker"]')
}

get datepickerInput(){
return $('//input[@id="datepicker"]')

}

get dropdowndatepickerTab(){
    return $('//*[@id="DropDown DatePicker"]');}

get clickOnIconTriggerDatePickerTab(){
    return $("//*[@id='Icon Trigger']")
}

get iframeTriggerDate(){
    return $("//iframe[contains (@data-src,'icon-trigger')]")
}

get datepickerCalendarIcon(){
    return $(".ui-datepicker-trigger")
}
get monthDatePicker(){
    return $(".ui-datepicker-month")
}
get yearDatePicker(){
    return $(".ui-datepicker-year")
}
get prevIcon(){
    return $("//a[@title='Prev']")
}

get nextIcon(){
    return $("//a[@title='Next']")
}


async getActualDateValue(){

const actualMonth= await this.monthDatePicker.getText()
const actualYear=await this.yearDatePicker.getText();

const actualMonthInNumber=new Date(`${actualMonth}, 2012`).getMonth() + 1;
const actualYearInNumber=Number(actualYear)
const actualDateValue=new Date(actualYearInNumber,actualMonthInNumber).valueOf();
return actualDateValue;
}

async getExpectedDateValue(month,year){
const expectedMonthInNumber=new Date(`${month}, 2012`).getMonth()  + 1;
const expectedDateValue=new Date(year,expectedMonthInNumber).valueOf();
return expectedDateValue;
}

async navigateToMatchingDateGrid(month,year){
while(await this.getActualDateValue() !== await this.getExpectedDateValue(month,year)){
if(await this.getActualDateValue() > await this.getExpectedDateValue(month,year)){
await this.prevIcon.waitForClickable();
await this.prevIcon.click();
}
else if(await this.getActualDateValue() < await this.getExpectedDateValue(month,year)){
    await this.nextIcon.waitForClickable()
    await this.nextIcon.click();
    }
}
}

async selectDateFromIconTrigger(day,month,year){
    await this.datepickerCalendarIcon.waitForClickable()
    await this.datepickerCalendarIcon.click();
    await this.navigateToMatchingDateGrid(month,year)
    await this.selectDay(day)
    await browser.pause(5000)
}






get iframeDropdownDate(){
    //return $("//iframe[contains (@data-src,'datepicker/dropdown')]")
    return $('//*[contains(@data-src,"datepicker/dropdown-month-year.html")]');
}

get selectMonth(){
    return $(".ui-datepicker-month")
}

get selectYear(){
    return $(".ui-datepicker-year")
}

async selectDay(day){
    (await $("//div[@id='ui-datepicker-div']//table//tbody//td[@data-handler='selectDay']//a[text()='"+day+"']")).click()
}

async selectDropdownDate(day,month,year){
await this.selectMonth.selectByVisibleText(month)
await this.selectYear.selectByVisibleText(year)
await this.selectDay(day)
}


}
module.exports=new calendarPage()