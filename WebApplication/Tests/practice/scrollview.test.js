
const CRMPage = require('../pages/crm.page');
describe('scroll to element', async () => {
    it('should scroll to forgot pwd link', async () => {
        await browser.url('https://classic.crmpro.com/');
        console.log('in view port',await CRMPage.forgotpwdLink.isDisplayedInViewport());
        await CRMPage.forgotpwdLink.scrollIntoView();
        console.log('in view port', await CRMPage.forgotpwdLink.isDisplayedInViewport());
        await CRMPage.forgotpwdLink.click();
        
    });

    it('should scroll to forgot pwd link,move and click', async() => {
        await browser.url('https://classic.crmpro.com/');
        await CRMPage.forgotpwdLink.scrollIntoView();
        await CRMPage.moveToElement(CRMPage.forgotpwdLink);
        await CRMPage.forgotpwdLink.click();
    });
});