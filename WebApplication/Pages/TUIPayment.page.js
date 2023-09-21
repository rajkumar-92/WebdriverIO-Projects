const { default: AllureReporter } = require("@wdio/allure-reporter");
const Utility = require('../../Utilities/Utility');

class makePayment{
    // skip payment flow
    async skip_payment() {
        let ele = await $('[class="UI__skipPaymentsWrapper"]');
        await ele.click()
        AllureReporter.addStep(`Clicking on skip payment button`)
    }
}

module.exports = new makePayment();