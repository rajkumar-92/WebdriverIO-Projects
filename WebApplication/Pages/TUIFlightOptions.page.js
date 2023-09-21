const { default: AllureReporter } = require("@wdio/allure-reporter");
const Utility = require('../../Utilities/Utility');

class flightExtras{
    //Select Baggage weight
    /*async selectBaggageWeight(value) {
        var weightcodes = await (await $('tui-fo-special-service-luggage ')).shadow$$('p[class*="code"]');
        for (var i = 0; i < weightcodes.length; i++) {
            if (await weightcodes[i].getText() === value) {
                await browser.waitUntil(async () => { 
                    return weightcodes[i].click()
                }, {
                    timeout: 4000,
                    timeoutMsg: 'Baggage options is not selected within the specified timeout'
                  });
            }
        }
        AllureReporter.addStep(`Selecting the Luggage ${value}`)
         */
    

        async price(){
            var priceElement = $('tui-fo-price-summary').shadow$('div[class="price"]');
           // await Utility.waituntil_ForDisplayed(priceElement);
            var price = await (await priceElement.getText()).slice(1);
            var TotalAmount = await parseFloat(price);
            return TotalAmount;
        }
        async LuggagePrice(){
            var Element = $('tui-fo-special-service-luggage').shadow$('div[class*="luggageFooter"]>div>h5>b');
            await browser.pause(2000);
            var Luggageprice = await (await Element.getText()).split('€')[1];
            var TotalAmount = await parseInt(Luggageprice);
            return TotalAmount;
        }
    
        async selectOutBound_BaggageWeight(Baggage) {
            var Exp_TotalAmount;
            var Exp_LuggageAmount;
            let elements = await $('tui-fo-special-service-luggage').shadow$$('div[class*="serviceWrapper"]>div:nth-child(3)>div');
            if (elements.length = 2) {
                var actualAmount = await this.price();
                var actualBaggageAmount = await this.LuggagePrice();
                Exp_TotalAmount = actualAmount;
                Exp_LuggageAmount = actualBaggageAmount;
                var outboundElements = await $('tui-fo-special-service-luggage').shadow$$('div[class*="serviceWrapper"]>div:nth-child(3)>div:nth-child(1)>div:nth-child(1)>div>ul');
                for (var i = 0; i < outboundElements.length; i++) {
                    let weightcodes = await outboundElements[i].$$('ul[class*="serviceListCard"] >div>div[class*="titleWrapper"]')
                    for (var j = 0; j < weightcodes.length; j++) {
                        var weightage = await weightcodes[j].getText();
                        var priceLocator = await (await weightcodes[j].nextElement()).getText();
                        var price = await parseInt(priceLocator.split('€')[1])
                        if (weightage === Baggage[i]) {
                            await weightcodes[j].click();
                            await browser.pause(2000);
                            Exp_TotalAmount = Exp_TotalAmount + price;
                            Exp_LuggageAmount = Exp_LuggageAmount + price;
                            break;
                        }
                    }
                }
            }
            return [Exp_TotalAmount,Exp_LuggageAmount]
           // await browser.pause(1000);
            //assert.equal(await this.price(), Exp_TotalAmount);
            //assert.equal(await this.LuggagePrice(), Exp_LuggageAmount);
    
        }
    
        async clickonCheckBox() {
            let ele = await $('tui-fo-special-service-luggage').shadow$('div[class*="checkboxWrapper"]>div');
            await ele.click();
        }
    
        async selectReturn_BaggageWeight(Baggage) {
            let elements = await $('tui-fo-special-service-luggage').shadow$$('div[class*="serviceWrapper"]>div:nth-child(3)>div');
            var Exp_LuggageAmount;
            var Exp_TotalAmount;
            
            if (elements.length > 2) {
               var Actual_LuggageAmount=await this.LuggagePrice();
               var Actual_TotalAmount=await this.price();
                 Exp_LuggageAmount = Actual_LuggageAmount/2;
                 Exp_TotalAmount = Actual_TotalAmount-Exp_LuggageAmount;
                var outboundElements = await $('tui-fo-special-service-luggage').shadow$$('div[class*="serviceWrapper"]>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>ul');
                for (var i = 0; i < outboundElements.length; i++) {
                    let weightcodes = await outboundElements[i].$$('ul[class*="serviceListCard"] >div>div[class*="titleWrapper"]')
                    let selected = await outboundElements[i].$$('ul[class*="serviceListCard"] >div')
                    for (var j = 0; j < weightcodes.length; j++) {
                        var weightage = await weightcodes[j].getText();
                        var priceLocator = await (await weightcodes[j].nextElement()).getText();
                        var price = await parseInt(priceLocator.split('€')[1])
                        var attribute = await selected[j].getAttribute('class');
                    if (weightage === Baggage[i] && !attribute.includes('selected')) {
                        await weightcodes[j].click();
                        await browser.pause(2000);
                        Exp_TotalAmount = Exp_TotalAmount + price;
                        Exp_LuggageAmount = Exp_LuggageAmount + price;
                        break;
                    }
                    else if (weightage === Baggage[i] && attribute.includes('selected')) {
                        Exp_TotalAmount = Exp_TotalAmount + price;
                        Exp_LuggageAmount = Exp_LuggageAmount + price;
                        break;
                    }
                    }
                }
            }
            return [Exp_TotalAmount,Exp_LuggageAmount]
           // return Exp_TotalAmount,Exp_LuggageAmount;
            //assert.equal(await this.price(), Exp_TotalAmount);
            //assert.equal(await this.LuggagePrice(), Exp_LuggageAmount);
        } 
        
        async clickContinueButtonOnSeatBaggage() {
            let ele = await $('button[aria-label*="continue button"]')
            await Utility.waituntil_ForDisplayed(ele)
            await ele.click();
            AllureReporter.addStep(`Clicking on Continue Button`)
        }
}
module.exports = new flightExtras();