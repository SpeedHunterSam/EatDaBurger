const connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
      //view all burgers in datab
    selectAll: function (tableInput, cb){
        const queryString = `SELECT * FROM burgers`
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            cb(result);
            
          });

    }, //INSERT a new burger into database
    insertOne: function (tableInput, column, value){
        //const queryString = `INSERT INTO ?? (??) VALUES ("?");`;

        const queryString = `INSERT INTO ` + tableInput + `(` + column + `) VALUES ("` + value + `");`;

        console.log(queryString);
        connection.query(queryString, [tableInput, column, value],function(err, result) { 


        //connection.query(queryString, [tableInput, column, value], function(err, result) {
            if (err) throw err;
            console.log(result);
          });

    },
    //update burger to eaten
    updateOne: function (tableInput){
        const queryString = `SELECT * FROM ??`;
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
          });

    }
  };
  
  module.exports = orm;
  
/*
* `selectAll()`
* `insertOne()`
* `updateOne()`
*/