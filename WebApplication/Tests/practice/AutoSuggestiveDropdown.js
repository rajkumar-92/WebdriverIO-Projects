describe('AutoSuggestions', async() => {
    it('Click on Google autosuggestions', async() => {
        await browser.url('https://www.google.com/');
 await (await $("input[name='q']")).setValue('Mukesh Otwani');
 await browser.pause(2000);
        const allValues=await $$("(//ul[@role='listbox'])[1]//li//div[@role='option']");
        
        /* for(let i=0;i<allValues.length;i++)
        {
            const value=await allValues[i].getText();
            if(value.includes("selenium python"))
            {
                console.log (value);
                await allValues[i].click();
                await browser.pause(2000);
                break;
            }
            
            
        } */

        for(const value of allValues)
        {
            if((await value.getText()).includes('selenium python'))
            {
                console.log(await value.getText());
                await value.click();
                await browser.pause(3000);
                break;
            }
        }
       
        
    });
});