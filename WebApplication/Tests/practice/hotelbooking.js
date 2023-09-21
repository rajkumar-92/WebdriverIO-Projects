describe('Hotel booking website', async() => {
    it('Selecting Rooms/Adults', async() => {
        await browser.url('https://vacations.spicejet.com/')
        await (await $("div[class='admin-panel']")).click()
      await $("//img[contains(@src,'edit.png')]").click()
        let adult= await $("//table[@class='roomdropdwn ng-scope']//tbody//select[@ng-model='group.content.adult']")
    //await adult.selectByIndex(3)
    await adult.selectByVisibleText("3")
    await browser.pause(3000)
    
    });
});