var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");


// router.get
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})


// router.post

router.post("/api/burgers", function(req, res) {
    burger.insertOne(
        "burger_name"
        , 
        req.body.burger_name
        , function(result){
            res.json({id: result.insertId})
    });
});

// router.put






module.exports = router;
