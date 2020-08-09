// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // SELECT ALL RECORDS IN THE DATABASE
  // ===================================
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // INSERT A NEW RECORD INTO THE DATABASE (references orm)
  // The variables cols and vals are arrays.
  // ========================================
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // UPDATE A RECORD IN THE DATABASE (references orm)
  // =================================================
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  // DELETE A RECORD FROM THE DATABASE (references orm)
  // =========================================
  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
