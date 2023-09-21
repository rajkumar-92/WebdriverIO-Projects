describe('drag and drop actions feature', async() => {
    it('do drag and drop', async() => {
        await browser.url('https://jqueryui.com/resources/demos/droppable/default.html');
    
       const sourceElement= await $("div[id='draggable']");
        const targetElement= await $("div[id='droppable']");
     
       await sourceElement.dragAndDrop(targetElement);
        await browser.pause(5000);
    });
});