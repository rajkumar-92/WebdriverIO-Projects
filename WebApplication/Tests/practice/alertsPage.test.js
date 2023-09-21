const alertsPage=require('../../pages/alertsPage');
describe('Clicking on alert text box ', async() => {
 
    it('clicking on JS alert', async() => {
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        await alertsPage.clickon_AlertBtn(1);
       const text= await browser.getAlertText();
       await browser.pause(3000);
        assert.equal('I am a JS Alert',text);
        console.log(text);
        await browser.acceptAlert();
     const text2=await alertsPage.getResult_Text();
       assert.equal('You successfully clicked an alert',text2);
       console.log(text2);
    });

    it('clicking on JS confirm', async() => {
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        await alertsPage.clickon_AlertBtn(2);
       const text= await browser.getAlertText();
       await browser.pause(3000);
        assert.equal('I am a JS Confirm',text);
        console.log(text);
        await browser.dismissAlert();
     const text2=await alertsPage.getResult_Text();
       assert.equal('You clicked: Cancel',text2);
       console.log(text2);
    });

    it('clicking on JS confirm', async() => {
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        await alertsPage.clickon_AlertBtn(3);
       const text= await browser.sendAlertText('I am Rajkumar');
       await browser.acceptAlert();
     const text2=await alertsPage.getResult_Text();
       assert.equal('You entered: I am Rajkumar',text2);
       console.log(text2);
    });
});