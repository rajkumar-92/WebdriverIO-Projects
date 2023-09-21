describe('wait for enabled case', async() => {
    it('should wait for button to be enabled', async() => {
        await browser.url('https://classic.crmpro.com/register/');
        const checkbox=await $("//input[@name='agreeTerms']");
        const submitBtn=await $("button[name='submitButton']");
        await checkbox.click();
        await submitBtn.waitForEnabled();
        assert.equal(true,await submitBtn.isEnabled());
    });

    it('should wait for button to be disabled', async() => {
        await browser.url('https://classic.crmpro.com/register/');
        const checkbox=await $("//input[@name='agreeTerms']");
        const submitBtn=await $("button[name='submitButton']");
       await checkbox.click();
      //await browser.pause(5000);
        await submitBtn.waitForEnabled();
        assert.equal(true,await submitBtn.isEnabled());

        await checkbox.click();
        await browser.pause(5000);
        await submitBtn.waitForEnabled({ reverse: true });
        assert.equal(false,await submitBtn.isEnabled());


    });
});