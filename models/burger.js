// * Inside `burger.js`, import `orm.js` into `burger.js`
const orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(newBurger, cb) {
      orm.create("burgers",['name', 'devoured'],[newBurger, false] , cb) 
        cb(res);
    },
    update: function(sandwich, condition, cb) {
      orm.update("burgers",['name', 'devoured'],[sandwich, true], cb)
        cb(res);
    },
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
 
// * Export at the end of the `burger.js` file.
module.exports = burger;
// console.log( ['name', 'devoured'].toString())