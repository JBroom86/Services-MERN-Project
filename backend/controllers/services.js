/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/api/services`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const express = require("express");
// Router allows us to handle routing outside of server.js
const router = express.Router();

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require("../models");

/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all services
router.get("/", (req, res) => {
  db.Service.find().then((services) => res.json(services));
});

// Create Route
router.post("/", (req, res) => {
  db.Service.create(req.body).then((service) =>
    res.redirect("/services/" + service._id)
  );
});

//Show Route
router.get("/:id", function (req, res) {
  db.Service.findById(req.params.id).then((service) => res.json(service));
});

//Update Route
router.put("/:id", (req, res) => {
  db.Service.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (service) => res.redirect("/services/" + service._id)
  );
});

// Delete Route
router.delete("/:id", (req, res) => {
  db.Service.findByIdAndRemove(req.params.id).then((service) =>
    res.json(service)
  );
});

// Exports these routes so that they are accessible in 'server.js'
module.exports = router;
