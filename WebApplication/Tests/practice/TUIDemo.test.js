const { default: AllureReporter } = require("@wdio/allure-reporter");
const TUIDemopage = require('../Pages/TUIDemo.page');
const { assert } = require("chai");
before(async () => {
/*   await browser.url('https://fs.ad.tuigroup.com/adfs/ls/?SAMLRequest=fVLLTsMwEPwVa%2B951Gmr1GqCClUFEoioCRy4ucmmWErs4nUiPh%2F3JeAAR69ndnZndnnz2XdsREvK6AwmYQwMdW0apfcZvFSbIIWbfEmy7%2FhBrAb3rrf4MSA55omaxPkng8FqYSQpElr2SMLVolw9PQoexuJgjTO16YCtiNA6L3VnNA092hLtqGp82T5m8O7cgUQUuUFZdFJ1wQ6DBsfQF2QTanTRUY38aB2S2mujT4WoLJ%2BBrf1MSkt32uPaqqXQMz1%2Fb81wCGvTR7JpKeooArYxtsbTShm0siME9rDOQPJEzlRbJ6niSTrjCc5TvlCtVJN0sUs8iApJpEb8phEN%2BKDJSe0y4DFPgngW8Hk1iUWciukknE%2Bnb8CKixG3Sp8N%2Fs%2B13RlE4r6qiqB4Litgr9egPAAusYiTuv2Zx%2F%2BN5TUEyI8wIoOfDvWxsfjbe9HgMvopmF%2Bev88i%2FwI%3D&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=hsdfg3wM4Vioy9t8%2B33RnKIkifsBG%2BSwdsAnd070e6nBmCkP%2FfN2AwvDmh%2FKoPM7Jy3p%2FfVq%2FAUIzCw4eWHorjLmaYCFakL%2F6PF7AjFvJbZKR4RsYe8muW5G61M%2BT2hTMcw70tYJaxx%2BpyegD86CgQ8EoVF3p1vdgCwh%2FgEx2%2Fy%2FXlCGPxSjfNmfEmQGf531Ry2A9%2BB9gdSKn%2FBTHO3th5YuDwD0CT4ya5XTpSUB83mQ2kR43Sy6PXzjnJ1fbG%2BCbnFloPBMLkgRiwE89s6i0EPU8Xc35nC7hEc%2BGXjrK%2B5Ua84E8TnvwkiwaEM4zlTUxisGhvlvnz17fl%2B7PnL%2FDw%3D%3D');
  await browser.pause(3000);
  await TUIDemopage.EnterUserName('padmashree.n@tui.co.uk');
  await TUIDemopage.EnterPwd('Shree@123');
  await TUIDemopage.click_LoginBtn();
  await browser.pause(4000)
  await browser.url('https://tuiretail-be-dev.tuiad.net/retail/flight/')
  await browser.pause(7000);
  await TUIDemopage.selectPrefLanguage(); */

  await browser.url('https://www.tuifly.be/flight')
    await browser.pause(2000);
    await TUIDemopage.accept();
    await browser.maximizeWindow()
    await TUIDemopage.selectPrefLanguage();
})
describe('POC Demo on TUI Website', async () => {
  it('Two way flight booking', async () => {
    AllureReporter.startStep('Landing Page');
    await TUIDemopage.ClickOn_departPort();
    await TUIDemopage.selectDepartPort('CRL');
    await TUIDemopage.ClickOn_destinationPort();
    await browser.pause(2000)
    await TUIDemopage.selectDestinationtPort('NBE');
    await TUIDemopage.selectFromDate("2023-08", "4");
    await TUIDemopage.selectToDate("2023-09", "5");
    let adults =  "1", children = "2";
    await TUIDemopage.selectPassengers(adults,children);
    let childAges=[1,2];
    await TUIDemopage.selectchildAge(adults,childAges,children);
 
  


    await TUIDemopage.clickOnSerchBtn();
    await browser.pause(4000)
    //await TUIDemopage.OutboundFlight1("Sat 17 Jun");
    //await TUIDemopage.getActualDateValue1()
    //await TUIDemopage.getActualDateValue2()
    AllureReporter.startStep('Flight Selection Page');
    await TUIDemopage.OutBound_ListOfFlights();
    await TUIDemopage.selectCheapestOutboundFlight();
    await TUIDemopage.Return_ListOfFlights();
    await TUIDemopage.selectCheapestReturnFlight();
    await TUIDemopage.clickContinueButton();
    await browser.pause(3000);

        AllureReporter.startStep('Flight Seat & Baggage Page');
        let OutboundBaggage=["20 kg","20 kg"]
        let ReturnBaggage=["20 kg","25 kg"]
        let outBoundAmount=await TUIDemopage.selectOutBound_BaggageWeight(OutboundBaggage)
        let Exp_TotalAmount1=outBoundAmount[0];
        let Exp_LuggageAmount1=outBoundAmount[1];
        assert.equal(await TUIDemopage.price(), Exp_TotalAmount1);
        assert.equal(await TUIDemopage.LuggagePrice(), Exp_LuggageAmount1);
        await TUIDemopage.clickonCheckBox();
       let returAmount =await TUIDemopage.selectReturn_BaggageWeight(ReturnBaggage)
        let Exp_TotalAmount2=returAmount[0];
        let Exp_LuggageAmount2=returAmount[1];
        assert.equal(await TUIDemopage.price(), Exp_TotalAmount2);
        assert.equal(await TUIDemopage.LuggagePrice(), Exp_LuggageAmount2);
        await TUIDemopage.clickContinueButtonOnSeatBaggage();
        AllureReporter.startStep('Flight Extras:Insurance Selection Page');
        await TUIDemopage.selectInsurance("I do not wish to insure my trip");
        await TUIDemopage.clickContinueButtonOnSeatBaggage();
        await browser.pause(3000)
        AllureReporter.startStep('Flight Passenger Details Page');
        await TUIDemopage.adult1_firstName('Rajkumar');
        await TUIDemopage.adult1_SurName('Masadapu');
        await TUIDemopage.selectGender('MALE');
        let date = '10', month = '08', year = '1992';
        await TUIDemopage.selectAdult1_DOB(date, month, year);
        await TUIDemopage.adult1_nationality('AF');
        await TUIDemopage.adult1_country('AF');
        await browser.pause(2000);
        await TUIDemopage.adult1_address('Street1A');
        await TUIDemopage.adult1_HouseNum('101');
        await TUIDemopage.adult1_postalCode('1234');
        await TUIDemopage.adult1_Residency('HY');
        await TUIDemopage.inputMobileNum('+91', '9491983365');
        await TUIDemopage.adult1_emailAddress('masadapu.rajkumar47@gmail.com');
        await TUIDemopage.child1_FirstName('Vanshika');
        await TUIDemopage.child1_LastName('Masadapu');
        await TUIDemopage.child1_Gender('FEMALE');
        const date1 = '11', month1 = '06', year1 = '2021';
        await TUIDemopage.selectchild1_DOB(date1, month1, year1);
        await TUIDemopage.homekeeper_LastName('Masadapu');
        await TUIDemopage.input_HomeKeeperNum('+91', '9491983365');
        await browser.pause(1000);
        await TUIDemopage.agreeCheckbox();
        await TUIDemopage.furtherButton();
        await browser.pause(4000);

       /* AllureReporter.startStep('Flight Payment Selection Page');
        await TUIDemopage.skip_payment();
        await browser.pause(4000);
        await TUIDemopage.Enter_PayerName('Padma');
        await TUIDemopage.Enter_PaymentAmt('400');
        await browser.pause(4000);
        await TUIDemopage.AddPaymentBtn();
        await browser.pause(4000);
        await TUIDemopage.PaymentConfirmation(); 

        AllureReporter.startStep('Flight Confirmation Page');
        await browser.pause(4000);
        let bookingref = await (await TUIDemopage.booking_referenceNum).getText();
        console.log("Booking Reference is :" + bookingref);
        AllureReporter.addStep(`Booking Reference Number is ${bookingref}`);
        await TUIDemopage.closingPopBtn();
        await browser.pause(3000);  */

    });
    
    after(async() => {
      await browser.pause(3000)
        await browser.takeScreenshot();
    });
});