

class blazePage {
get JMeterLink()
{
    return $("li[class='menu-item'] a[data-title='JMeter']");
}

get productLink()
{
    return $("//div[@id='mobile-controls']//following-sibling::ul[@data-region='header']/li[1]/span");
}

async clickonProductLink()
{
    if(await this.productLink.isDisplayed()===true)
    {
 await (await this.productLink).click();
    }
}
    get childElements()
     { 
        return $$("//div[@id='mobile-controls']//following-sibling::ul[@data-region='header']/li"); 
    }

    async specificChildElement(index)
    {
        return await $("//div[@id='mobile-controls']//following-sibling::ul[@data-region='header']/li["+index+"]");
    }
    
    get mainHeader(){return $("h1 span[class='gradient-text']");}


       async getTextforLi() 
       {
       
         return this.childElements.filter(async element => {
            console.log(await element.getText());
           
        });
       
    }
}
        module.exports = new blazePage();