


describe('selecting drop down', async() => {
    beforeEach(async() => {
        
        await browser.url('https://www.facebook.com/');
        const create_new_Acc= await $("//*[text()='Create New Account']");
        await create_new_Acc.click();
        await browser.pause(3000);
        
    });
    it('select dropdown using visibletext', async() => {
        
       await  $('#day').selectByVisibleText('10');
        await $('#month').selectByVisibleText('Aug');
        await $('#year').selectByVisibleText('1992');
       
    });

    it('select dropdown using index', async() => {
        
        await  $('#day').selectByIndex(3);
         await $('#month').selectByIndex(4);
         await $('#year').selectByIndex(2);
        
     });

     it('select dropdown using value', async() => {
        
        await  $('#day').selectByAttribute('value', '30');
         await $('#month').selectByAttribute('value', '12');
         await $('#year').selectByAttribute('value', '2022');
        
     });


    afterEach(async() => {
        await browser.pause(3000); 
    });
});