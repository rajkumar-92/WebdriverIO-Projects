
const utilObj = require('../../Utilities/Utility')
const reusableUtil = require('../../Utilities/ReusableUtil')
const configData = require("../../Utilities/config");
const constants = require("../../Utilities/Constants");
const ORObj = require("../../pageObjects/ObjectRepository.screen.js");
const { default: AllureReporter } = require("@wdio/allure-reporter");
const inputData = utilObj.ReadingwholeSheet("Utilities/InputData.xlsx");

before(async () => {
  AllureReporter.addStep("Before Hook");
  await ORObj.LoginFunc(configData.username, configData.password);
  await ORObj.clickOnSideMenu();
  await ORObj.clickOnLinkOnSideMenu(constants.MAKEAPAYMENT_LINK);
})

describe('verifying OTP page suite', async () => {
  beforeEach(async () => {
    AllureReporter.startStep("Start of Iteration");
    await ORObj.clickOnSideMenu();
    await ORObj.clickOnLinkOnSideMenu(constants.ONETIMEPAYMENT_LINK);
    await ORObj.clickOnSectionHeaders("Add or Manage Bank Accounts");

  })

  inputData.forEach(testData => {
    it('Verifying otp page', async () => {
      AllureReporter.addDescription("Verifying the One Time Payment screen with different test data");
      await ORObj.selectRadioButton("Additional Amounts Only");
      await driver.pause(5000);
      await ORObj.inputValueInPaymentAmount(testData.PaymentAmount);
      await ORObj.inputValueinLateFees(testData.LateFeesDue);
      await ORObj.inputValueinAdditionalPricipal(testData.AdditionalPrincipal);
      await ORObj.inputValueinAdditionalEscrow(testData.AdditionalEscrow);
      await ORObj.inputValueinTotalPayment(await reusableUtil.totalPayment());
      await ORObj.clickOnButtonwithText(" Continue ");
      await ORObj.clickOnPopUp("Yes");
      await ORObj.selectCheckbox();
      await ORObj.clickOnButtonwithText(" Submit ");
      await ORObj.clickOnPopUp("OK");
      await driver.pause(3000);
      AllureReporter.endStep("passed");
    });
  });

  it("Testing hooks", async () => {
    AllureReporter.addStep("Within 2nd test case");
  });


  afterEach(async () => {
    await browser.takeScreenshot();
  });
});

describe('Working on date formats', async () => {
  it('Validation of data formats', async () => {
    await utilObj.dateFormatter('DEC-08-2022', 'DD-MM-YYYY');
    await utilObj.dateFormatter('09-08-2022', 'MMMM-DD-YYYY');
    await utilObj.dateFormatter(new Date(), 'MMMM-DD-YYYY');

  });
});
