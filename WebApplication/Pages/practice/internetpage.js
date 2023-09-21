class internetPage{
    get h3Header(){
        return $('div>h3');
    }

getLink(index)
{
    return $(`ul li:nth-child(${index}) a`);
}
async clickonLink(index)
{
await this.getLink(index).waitForDisplayed();
await this.getLink(index).click();
}
getcheckboxElement(index)
{
    return $(`form#checkboxes input:nth-child(${index})`);
}

async clickon_Checkbox(index)
{
    await this.getcheckboxElement(index).waitForDisplayed();
    await (await this.getcheckboxElement(index)).click();

}
}
module.exports=new internetPage();