const express = require('express');


//require mysql in node modules to use it
const mysql = require('mysql');
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'test',
    database:'softwaresecurity'
});


connection.connect(function(err){
    (err)? console.log(err): console.log(connection);

});

exports.log

require('./routes/html-routes')(app,connection);

app.listen(port, () => {
console.log(`Server now running on port ${port}!`)
});
