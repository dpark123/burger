var connection = require("../config/connection.js");
var tableName = "burgers";

var orm = {
    selectAll: function() {
    var action = "SELECT * FROM " + tableName;
    connection.query(action, function(err, result) {
      if (err) {throw err};
      // cb(result);
      console.log(result);
    });
  },


  insertOne: function(name, devoured) {
    var action = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    tableName.devoured = tableName.devoured || 0;
    connection.query(action, [name, devoured], function(err, result) {
      if (err) {throw err};
      // cb(result);
      console.log(result + "three!");
    });
  },

  updateOne: function(name, id) {
    var action = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";
    connection.query(action, [name, id], function(err, result) {
      if (err) {throw err};
      // cb(result);
      console.log(result + "four!");

    });
  }

};

module.exports = orm;

// var orm = require("../config/orm.js");

// var burger = {
//   selectAll: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   insertOne: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   updateOne: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
//   //,
//   // delete: function(condition, cb) {
//   //   orm.delete("cats", condition, function(res) {
//   //     cb(res);
//   //   });
//   // }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;
