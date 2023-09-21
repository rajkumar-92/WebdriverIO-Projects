const loginPage=require('../pages/loginpage');
describe('Login page validation', async() => {
    it('Enter UserName', async() => {
        await browser.url('https://www.facebook.com/');
       await  loginPage.EnterUserName('9491983365');
       assert.equal('9491983365',await loginPage.userName.getValue());

    });

    it('Enter Password', async() => {
        await loginPage.EnterPwd('Vanshika@123');
        assert.equal('Vanshika@123',await loginPage.passWord.getValue());
    });

    it.skip('Click on login button', async() => {
        await loginPage.click_LoginBtn();
        await browser.pause(5000);
    });

    it('should clear userName', async() => {
        await (await loginPage.userName).click();
        await (await loginPage.userName).clearValue();
        assert.equal('',await (await loginPage.userName).getValue());
    });
});