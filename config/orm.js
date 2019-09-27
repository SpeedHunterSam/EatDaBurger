const connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {

    selectAll: function (tableInput){
        const queryString = `SELECT * FROM ??`;
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
          });

    },
    insertOne: function (tableInput){
        const queryString = `SELECT * FROM ??`;
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
          });

    },
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