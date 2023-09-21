describe('wait for delete button using waitForExist', async() => {
    it('should wait for delete button for exist', async() => {
        await browser.url('https://the-internet.herokuapp.com/add_remove_elements/');
        const addElement=await $("//button[text()='Add Element']");
        const deleteElement= await $("//button[text()='Delete']");
       await addElement.waitForDisplayed();
        await addElement.click();
        await deleteElement.waitForExist(4000);
        assert.equal(true,await deleteElement.isExisting());
        await deleteElement.click();
        assert.equal(false,await deleteElement.isExisting());
    });

    it('should wait for delete button for not exist', async() => {
        await browser.url('https://the-internet.herokuapp.com/add_remove_elements/');
        const addElement=await $("//button[text()='Add Element']");
        const deleteElement= await $("//button[text()='Delete']");
       await addElement.waitForDisplayed();
        await addElement.click();
        await deleteElement.waitForExist(4000);
        assert.equal(true,await deleteElement.isExisting());
        await deleteElement.click();
        assert.equal(false,await deleteElement.isExisting());
    });
});