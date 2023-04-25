/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/api/services`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outside of server.js
const router = express.Router()

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')

/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all services
router.get('/', (req, res) => {
    db.User.find()
      .then(user => res.json(user))
  })

// Create Route
router.post('/', (req, res) => {
    db.User.create(req.body)
    .then(user => res.redirect('/users/' + user._id))        
})

//Show Route
router.get('/:id', function (req, res) {
    db.User.findById(req.params.id)
      .then(user => res.json(user))
})

//Update Route
router.put('/:id', (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
    .then (user => res.redirect('/users/' + user._id))
})

// Delete Route
router.delete('/:id', (req, res) => {
    db.User.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/users'))
})

// Exports these routes so that they are accessible in 'server.js'
module.exports = router