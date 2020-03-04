// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models/");

// Routes
// =============================================================
module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll().then(function (result) {
            let hbsObj = {burgers:result}
            // console.log(hbsObj)
            // console.log("===========")
            // console.log(hbsObj.burgers[0])
            // console.log("===========")
            // console.log(hbsObj.burgers[0].dataValues)

            res.render("index", hbsObj);
        });
    });

    app.post("/api/burgers", function (req, res) {
        // console.log(req.body)
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        })
        .then(function (result) {
            // console.log(result)
            res.json(true);
        })
        .catch(function (err) {
            res.json(err);
        });
    });

    //   app.delete("/api/burgers/:id", function(req, res) {
    //     db.Todo.destroy({
    //       where: {
    //         id: req.params.id
    //       }
    //     }).then(function(result) {
    //       res.json(result);
    //     });
    //   });

    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/api/burgers/:id", function (req, res) {
        console.log("==============")
        console.log(req.body.devour,"req.body")
        db.Burger.update({
            devoured: req.body.devour
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.render("index", result);
        }).catch(function (err) {
            res.json(err);
        });
    });
};