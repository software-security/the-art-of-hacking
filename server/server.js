const express = require('express');
const login = require('./routes/login');


//require mysql in node modules to use it
const mysql = require('mysql');
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express();

const router = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'test',
    database:'softwaresecurity'
});


connection.connect(function(err){
    (err)? console.log(err): console.log(connection);

});


require('./routes/html-routes')(app,connection);

// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

router.post('/login', login.login);



app.listen(port, () => {
console.log(`Server now running on port ${port}!`)
});
