const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

    
     burger.all(function(data) {
         const hbsObject = {
             burger: data
         }
         console.log(data);
         res.render("index", hbsObject);
     })

});

router.post("/burger", function(req, res) {

 
    burger.create("name", req.body.newBurgerName, function(result){

        res.json(result);
    });


});

router.put("/burger/:id", function(req, res) {

    console.log(req.params.id);
    burger.update("id", req.params.id);
    console.log(res);

//update burger status..has it been devoured


});

router.delete("/api/burger/:id", function(req, res) {
  
//future implementation of deleting a
});

// Export routes for server.js to use.
module.exports = router;
