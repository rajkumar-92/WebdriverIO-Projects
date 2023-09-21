const ConnectionToDB = require("../../Utilities/ConnectionToDB");

describe('Database connection', async () => {
    it('Read from Database', async () => {
        ConnectionToDB.db_con.connect((err) => {
            if (err) {
                console.log("Database Connection Failed !!!", err);
                return;
            }
            console.log("We are connected to testDB database");

            // This query will be used to select columns
            let query = 'SELECT * FROM customers';
            ConnectionToDB.db_con.query(query, (err, rows) => {
                if (err) throw err;
                console.log(rows);
            });
           /*query = "UPDATE customers SET id = '6767556' WHERE id = '143'";
            ConnectionToDB.db_con.query(query, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) updated");
            }); */
        });

    });
});
