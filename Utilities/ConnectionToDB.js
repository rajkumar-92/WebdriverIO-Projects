const mysql = require("mysql");
class DatabaseConnection
{
    db_con= mysql.createConnection({
        host: "localhost",
        user: "root",
        password: 'root',
        database: 'testDB'
    });
}module.exports=new DatabaseConnection();

  
