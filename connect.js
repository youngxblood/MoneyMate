
    var mysql = require("mysql");
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: null,
        database: "moneymate"
    });

    connection.connect((err) => {
        if(err){
            return console.log(err.stack);
        }

        console.log("Connection Succesful!");
    });

        // Here the queries will be executed
        $queryString = 'SELECT * FROM `users` WHERE `first_name` LIKE "Bruce"';

        connection.query($queryString, (err, rows, fields) => {
            if(err){
                return console.log("An error ocurred with that query.", err);
            }

            console.log(rows);
        });

        connection.end(() => {
            console.log("Connection succesfully closed");
        });

