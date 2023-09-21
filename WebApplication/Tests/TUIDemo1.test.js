const TUISearchpage = require('../Pages/TUISearch.page');
const TUISearchResultpage = require('../Pages/TUISearchResult.page');
const TUIFlightOptionspage = require('../Pages/TUIFlightOptions.page');
const TUIExtraOptionspage = require('../Pages/TUIExtraOptions.page');
const TUIPassengerDetailspage = require('../Pages/TUIPassengerDetails.page');
const TUIPaymentpage = require('../Pages/TUIPayment.page');
const TUIBookingConfirmationpage = require('../Pages/TUIBookingConfirmation.page');
const TUIInputData = require('../../Utilities/TUIdata/testData.json');
const { default: AllureReporter } = require("@wdio/allure-reporter");
//const { assert } = require("chai");

before(async () => {
    await browser.maximizeWindow();
    await browser.url(TUIInputData.siteurl);
    // await TUISearchpage.EnterUserName(TUIInputData.username);
    // await TUISearchpage.EnterPwd(TUIInputData.password);
    //await TUISearchpage.click_LoginBtn();
    await TUISearchpage.accept();
    await TUISearchpage.selectPrefLanguage();
})

describe('Demo1.spec-Validate FO End to End Flight Booking Scenario with Baggage component', async () => {
    it('Validate Login and Flight Search', async () => {
        AllureReporter.startStep('Landing Page');
        await TUISearchpage.ClickOn_departPort();
        await TUISearchpage.selectDepartPort(TUIInputData.departPort);
        await TUISearchpage.ClickOn_destinationPort();
        await TUISearchpage.selectDestinationtPort(TUIInputData.arrivalPort);
        await TUISearchpage.selectFromDate(TUIInputData.departDate[0], TUIInputData.departDate[1]);
        await TUISearchpage.selectToDate(TUIInputData.arrivalDate[0], TUIInputData.arrivalDate[1]);
        await TUISearchpage.selectPassengers(TUIInputData.adults, TUIInputData.children);
        await TUISearchpage.selectchildAge(TUIInputData.adults, TUIInputData.childAge, TUIInputData.children);
        await TUISearchpage.clickOnSearchBtn();
    });

    it('Verify Flight Search Results', async () => {
        AllureReporter.startStep('Flight Selection Page');
        await TUISearchResultpage.OutBound_ListOfFlights();
        await TUISearchResultpage.selectCheapestOutboundFlight();
        await TUISearchResultpage.Return_ListOfFlights();
        await TUISearchResultpage.selectCheapestReturnFlight();
        await TUISearchResultpage.clickContinueButton();
    });

    it('Adding Flight Amendments and validate price', async () => {
        AllureReporter.startStep('Flight Seat & Baggage Page');
        let outBoundAmount = await TUIFlightOptionspage.selectOutBound_BaggageWeight(TUIInputData.OutboundBaggage)
        //let Exp_TotalAmount1=outBoundAmount[0];
        //let Exp_LuggageAmount=outBoundAmount[1];
        //assert.equal(await TUIFlightOptionsPage.price(), Exp_TotalAmount1);
        await TUIFlightOptionspage.clickonCheckBox();
        let returAmount = await TUIFlightOptionspage.selectReturn_BaggageWeight(TUIInputData.ReturnBaggage)
        //let Exp_TotalAmount2=Exp_TotalAmount1-Exp_LuggageAmount/2+returAmount;
        //assert.equal(await TUIFlightOptionsPage.price(), Exp_TotalAmount2);
        await TUIFlightOptionspage.clickContinueButtonOnSeatBaggage();
    });

    it('Adding Passenger Insurance', async () => {
        AllureReporter.startStep('Flight Extras:Insurance Selection Page');
        /* await TUIExtraOptionspage.selectInsurance(TUIInputData.insuranceOption, TUIInputData.adultDOB[0], TUIInputData.adultDOB[1], TUIInputData.adultDOB[2],
            TUIInputData.childDOB[0], TUIInputData.childDOB[1], TUIInputData.childDOB[2]); */
        await TUIExtraOptionspage.clickContinueButtonOnInsurance();
    });

    it('Verify Passenger Details', async () => {
        AllureReporter.startStep('Flight Passenger Details Page');
        await TUIPassengerDetailspage.adult1_firstName(TUIInputData.adultFirstName);
        await TUIPassengerDetailspage.adult1_SurName(TUIInputData.adultSurName);
        await TUIPassengerDetailspage.selectGender(TUIInputData.adultGender);
       await TUIPassengerDetailspage.selectAdult1_DOB(TUIInputData.adultDOB[0], TUIInputData.adultDOB[1], TUIInputData.adultDOB[2]);
        await TUIPassengerDetailspage.adult1_nationality(TUIInputData.Nationality);
        await TUIPassengerDetailspage.adult1_country(TUIInputData.Country);
        await TUIPassengerDetailspage.adult1_address(TUIInputData.address_Street);
        await TUIPassengerDetailspage.adult1_HouseNum(TUIInputData.houseNo);
        await TUIPassengerDetailspage.adult1_postalCode(TUIInputData.postalCode);
        await TUIPassengerDetailspage.adult1_Residency(TUIInputData.residency);
        await TUIPassengerDetailspage.inputMobileNum(TUIInputData.mobileNo[0], TUIInputData.mobileNo[1]);
        await TUIPassengerDetailspage.adult1_emailAddress(TUIInputData.email);
        await TUIPassengerDetailspage.child1_FirstName(TUIInputData.childFirstName);
        await TUIPassengerDetailspage.child1_LastName(TUIInputData.childSurName);
        await TUIPassengerDetailspage.child1_Gender(TUIInputData.childGender);
        await TUIPassengerDetailspage.selectchild1_DOB(TUIInputData.childDOB[0],TUIInputData.childDOB[1],TUIInputData.childDOB[2]);
        /*await TUIPassengerDetailspage.infant1_FirstName(TUIInputData.infantFirstName);
        await TUIPassengerDetailspage.infant1_LastName(TUIInputData.infantSurName);
        await TUIPassengerDetailspage.infant1_Gender(TUIInputData.infantGender);
        await TUIPassengerDetailspage.selectinfant1_DOB(TUIInputData.infantDOB[0],TUIInputData.infantDOB[1],TUIInputData.infantDOB[2]);*/
      await TUIPassengerDetailspage.infant_Notborn();
        await TUIPassengerDetailspage.homekeeper_LastName(TUIInputData.homekeeperLastName);
        await TUIPassengerDetailspage.input_HomeKeeperNum(TUIInputData.homekeeperNo[0], TUIInputData.homekeeperNo[1]);
        await TUIPassengerDetailspage.agreeCheckbox();
        await TUIPassengerDetailspage.furtherButton();
    });

   /*  it('Verify Payment and Booking Details', async () => {
        AllureReporter.startStep('Flight Payment Selection Page');
        await TUIPaymentpage.skip_payment();
        await browser.pause(6000);
        AllureReporter.startStep('Flight Confirmation Page');
        let bookingref = await TUIBookingConfirmationpage.booking_referenceNum.getText();
        console.log("Booking Reference is :" + bookingref);
        AllureReporter.addStep(`Booking Reference Number is ${bookingref}`);
        await TUIBookingConfirmationpage.closingPopBtn();
    }); */

    after(async () => {
        await browser.takeScreenshot();
    });
});



