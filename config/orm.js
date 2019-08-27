var connection = require("../config/connection.js");
var tableName = "burgers";

var orm = {
    selectAll: function(callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {

      callback(result);

    });
  },


  insertOne: function(burger, callback) {
    var s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
    burger.complete = burger.complete || 0;
    connection.query(s, [
      burger.text, burger.complete
    ], function(err, result) {

      callback(result);

    });
  },

  updateOne: function(burger, callback) {
    var s = "UPDATE " + tableName + " SET text=? WHERE id=?";

    connection.query(s, [
      burger.text, burger.id
    ], function(err, result) {

      callback(result);

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
