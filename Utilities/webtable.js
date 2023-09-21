
class table {

    async table(tableloactor) {
       this.table= $(`${tableloactor}`)
      
      
    }

    async getAllRows() {
        return await this.table.$$('tbody tr');
    }

    async getRowsCount() {
       return (await this.table.$$('tbody tr')).length;
    }
    async getAllData() {
        return await this.table.$$('tbody tr td');
    }

   async getColumnsCount(row) {
        let ele = await this.table.$$(`tbody tr:nth-child(${row}) td`)
        return await ele.length;
        
    }

    async getElementText(row, column) {
        let ele = await this.table.$(`tbody tr:nth-child(${row}) td:nth-child(${column})`);
        return await ele.getText();
    }
    async clickOnCell(row, column) {
        let ele = await this.table.$(`tbody tr:nth-child(${row}) td:nth-child(${column})`);
        await ele.click();
    }
    async deleteRowHavingText(text) {
        let rows = await this.getAllRows();
        await rows.forEach(async row => {
            let cells = row.$$("td");
            await cells.forEach(async cell => {
                if ((await cell.getText()).includes(text)) {
                    await cells[0].click();
                    await cells[4].click();
                }
            })
        })
    }



}
module.exports = new table();