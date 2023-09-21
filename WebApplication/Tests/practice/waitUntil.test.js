const { assert } = require("chai");
const Utility = require("../../Utilities/Utility");

describe('wait until sync for the elements', async () => {
    it('wait for homepage', async () => {
        await browser.url('https://app.hubspot.com/login/');
        const email = $('#username');
        const password = $('#password');
        const loginBtn = $('#loginBtn');

        await browser.waitUntil(async () => {
            return await email.isDisplayed() === true
        }, 6000, 'email is not displayed after given time')

        await email.setValue("naveenanimation30@gmail.com");
        await password.setValue("Test@1234");
        await loginBtn.click();

       // const header=$('h1.private-page_title');
        await browser.waitUntil(async()=>{
            return await browser.getTitle()==='HubSpot Login'},6000,'header is not displayed after given time')
            console.log(await browser.getTitle());
            assert.equal('HubSpot Login',await browser.getTitle());
            await browser.pause(3000);
        })
    });
