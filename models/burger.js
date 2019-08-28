var orm = require("../config/orm.js");

var burger = {
    selectAll: function () {
        orm.selectAll();
        
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals) {
        orm.insertOne("burger", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition) {
        orm.updateOne("burger", objColVals, condition, function (res) {
            cb(res);
        });
    },

};


module.exports = burger;
