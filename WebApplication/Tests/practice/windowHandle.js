describe('Handling multiple tab/windows', async() => {
    it('Switch to tab/windows', async() => {
        await browser.url('https://opensource-demo.orangehrmlive.com/');
        await (await $('.orangehrm-login-footer-sm a:nth-child(2)')).click();
        await browser.switchWindow('facebook.com');
        await (await $("input[name='email']")).setValue('Vanshika');
        await browser.pause(2000);
        await browser.closeWindow();
        await browser.switchWindow('orangehrmlive.com')
        await (await $("input[name='username']")).setValue('rajkumar');
        await browser.pause(2000);
    });
});