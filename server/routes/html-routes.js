//require mysql to use it
const mysql = require('mysql');

module.exports = function(app,connection) {
  app.get('/', function(req,res){
    //res.send("hello from erin")
    connection.query('SELECT * FROM users', function(err,data){
      (err)?res.send(err):res.json({users: data});
    });
  });
};