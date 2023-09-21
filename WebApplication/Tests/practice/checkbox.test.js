const internetPage = require('../pages/internetpage');
describe('handling check boxes', async () => {
    it('check page url', async() => {
        await browser.url('/');
        expect(await browser.getUrl()).equals(`${browser.options.baseUrl}/`);
    });
    it('clicking on check box', async () => {
       await browser.url('/');
        await internetPage.clickonLink(6);
        await internetPage.h3Header.waitForDisplayed();
        await internetPage.clickon_Checkbox(1);
        expect(await internetPage.getcheckboxElement(1).isSelected()).equals(true);
        await browser.pause(5000);
        
    });

    it('Checking the page url', async() => {
        await browser.url('/');
        await internetPage.clickonLink(6);
        expect(await browser.getUrl()).equals(`${browser.options.baseUrl}/checkboxes`);
    });
});