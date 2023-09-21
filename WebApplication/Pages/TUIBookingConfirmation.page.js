const { default: AllureReporter } = require("@wdio/allure-reporter");


class bookingConfirm {
    // Booking Confirmation and Summary of flight and passengers
    get booking_referenceNum() {
        AllureReporter.addStep(`Retriving the booking reference Number`);
        let ele =  $('span[class*="BookingReference__referenceID"]');
        return ele;      
    }
    async closingPopBtn(){
        let closeBtn = await $('img[src*="close-btn"]')
        await browser.pause(3000);
        await closeBtn.click();

        AllureReporter.addStep(`Closing the POPUP button`);
    }
}

module.exports = new bookingConfirm();