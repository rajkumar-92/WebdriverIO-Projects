const { default: AllureReporter } = require("@wdio/allure-reporter");
const Utility = require('../../Utilities/Utility');

class flightSearchResults{

    //Choose available Outbound and Return flights from the list
    /*async select_OutboundFlight(text) {
        let ele = await $(`(//div[@class='FlightCardsList__flightCardsList'][1]//div[@class='FlightInformation__selectionStatus'])[${text}]`);   
        await Utility.scrollIntoView(ele);
        await ele.click();
        AllureReporter.addStep(`Selecting Outbound Flight from Available List`)
    }

     async select_ReturnFlight(text) {
        let ele = await $(`(//div[@class='FlightCardsList__flightCardsList'][2]//div[@class='FlightInformation__selectionStatus'])[${text}]`);
        await Utility.scrollIntoView(ele);
        await ele.click();
        AllureReporter.addStep(`Selecting Return Flight from Available List`)
    } */

    async OutBound_ListOfFlights() {
        let availableDates = await $$("(//*[@class='carousel__carouselContainer'])[1]//div[@class='DataCarouselItem__dateCarouselItem']");
        let activeDate = await $("(//*[@class='carousel__carouselContainer'])[1]//div[contains(@class,'activeTab')]")

        //Add active date and price to map
        let active_date = await (await activeDate.getText()).split('\n')[0];
        let active_price = await (await activeDate.getText()).split('\n')[1].split('€')[1];
        var map = new Map();
        map.set(active_date, active_price);
        let availableDateArray = [];
        let availablePriceArray = [];

        for (var i = 0; i < availableDates.length; i++) {
            var dateandprice = await availableDates[i].getText();
            availableDateArray[i] = await dateandprice.split('\n')[0];
            availablePriceArray[i] = await dateandprice.split('\n')[1].split('€')[1];
            //Add active date and price to map
            map.set(availableDateArray[i], availablePriceArray[i]);
        }
        const sortedMap = new Map([...map.entries()].sort((a, b) => a[1] - b[1])); //sorting the map
        const sortedDatePriceArray = [...sortedMap]; //converting map to array
        //If the active date is not having cheapest price, pick the cheapest price from other available dates
        var cheapestpricedDate = sortedDatePriceArray[0][0]
        if (cheapestpricedDate != active_date) {
            for (i = 0; i < availableDateArray.length; i++) {
                if (availableDateArray[i] === cheapestpricedDate) {
                    await availableDates[i].click();
                    break;
                }
            }
        }
        AllureReporter.addStep("Selecting Outbound flight from the available list")
    }

    async selectCheapestOutboundFlight()
        {       
            var availableFlightsPrice=await $$("(//*[@class='FlightCardsList__flightCardsList'])[1]//*[@class='FlightInformation__priceInfo']");
            var price=[];
            for(var i=0;i<availableFlightsPrice.length;i++)
            {
                price[i]=(await availableFlightsPrice[i].getText()).split('€')[1];            
            }
        var sortedPrice=price.sort(); //209.99,309.99
        var pricetext=sortedPrice[0].split('.')[0];
        
        var flightselectionButton=await $("(//*[@class='FlightCardsList__flightCardsList'])[1]//*[text()='"+pricetext+"']/../../../../..//div[contains(@class,'selectionStatus')]//button");
        await flightselectionButton.click();
        AllureReporter.addStep("Selecting cheapest flight from the Outbound Flights")
        }


        async Return_ListOfFlights() {
            let availableDates = await $$("(//*[@class='carousel__carouselContainer'])[2]//div[@class='DataCarouselItem__dateCarouselItem']");
            let activeDate = await $("(//*[@class='carousel__carouselContainer'])[2]//div[contains(@class,'activeTab')]")

            //Add active date and price to map
            let active_date = await (await activeDate.getText()).split('\n')[0];
            let active_price = await (await activeDate.getText()).split('\n')[1].split('€')[1];
            var map = new Map();
            map.set(active_date, active_price);
            let availableDateArray = [];
            let availablePriceArray = [];

            for (var i = 0; i < availableDates.length; i++) {
                var dateandprice = await availableDates[i].getText();
                availableDateArray[i] = await dateandprice.split('\n')[0];
                availablePriceArray[i] = await dateandprice.split('\n')[1].split('€')[1];
                //Add active date and price to map
                map.set(availableDateArray[i], availablePriceArray[i]);
            }
            const sortedMap = new Map([...map.entries()].sort((a, b) => a[1] - b[1])); //sorting the map
            const sortedDatePriceArray = [...sortedMap]; //converting map to array
            //If the active date is not having cheapest price, pick the cheapest price from other available dates
            var cheapestpricedDate = sortedDatePriceArray[0][0]
            if (cheapestpricedDate != active_date) {
                for (i = 0; i < availableDateArray.length; i++) {
                    if (availableDateArray[i] === cheapestpricedDate) {
                        await availableDates[i].click();
                        break;
                    }
                }

            }
            AllureReporter.addStep("Selecting Return flight from the available list")
        }

        async selectCheapestReturnFlight()
        {       
            var availableFlightsPrice=await $$("(//*[@class='FlightCardsList__flightCardsList'])[2]//*[@class='FlightInformation__priceInfo']");
            var price=[];
            for(var i=0;i<availableFlightsPrice.length;i++)
            {
                price[i]=(await availableFlightsPrice[i].getText()).split('€')[1];            
            }
        var sortedPrice=price.sort(); //309.99,369
        var pricetext=sortedPrice[0].split('.')[0];
        var flightselectionButton=await $("(//*[@class='FlightCardsList__flightCardsList'])[2]//*[text()='"+pricetext+"']/../../../../..//div[contains(@class,'selectionStatus')]//button");
        await flightselectionButton.click();
        AllureReporter.addStep("Selecting cheapest flight from the Return Flights")
        } 
    
    async clickContinueButton() {
        let ele=await $('button[class*="ContinueButton"]')
        await Utility.waituntil_ForDisplayed(ele)
        await ele.click();
        AllureReporter.addStep(`Clicking on continue button`);
    } 
}
module.exports = new flightSearchResults();