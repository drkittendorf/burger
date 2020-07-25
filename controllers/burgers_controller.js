// 3. Inside the `burgers_controller.js` file, import the following:
//    * Express
const express = require("express");

//import the following: `burger.js` to use its database functions.
const burger = require("../models/burger.js");
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create('name', req.body.name, function (data) {
    // Send back the ID of the new burger
    console.log(data)
    res.redirect('/')
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
     if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
});
});


// Export routes for server.js to use
module.exports = router;
// if (err)  {
//     return res.status(500).end();
// }
// else