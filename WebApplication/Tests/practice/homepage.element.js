const homepage=require('../pages/homepage');

describe('homepage elements handle', async() => {
    it('verify homepage elements', async() => {
        await browser.url('https://www.freshworks.com/');
       let text= await homepage.pageHeader.getText();
       console.log(text); 
      console.log(await homepage.subHeading.getText());
       await homepage.supportLink.click();
       await browser.pause(5000);
    });

    
});