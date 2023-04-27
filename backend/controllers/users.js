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
const bcrypt = require('bcrypt');

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
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await db.User.create({ name, email, password: hashedPassword })
    res.redirect('/users/' + user._id)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error creating user')
  }
})

//Show Route
router.get('/:id', function (req, res) {
    db.User.findById(req.params.id)
      .then(user => res.json(user))
})

//Update Route
router.put('/:id', async (req, res) => {
  try {
    const { name, email, password } = req.body
    // Hash the new password if it was included in the request
    const hashedPassword = password ? await bcrypt.hash(password, 10) : null
    const updates = { name, email, password: hashedPassword }
    const user = await db.User.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    )
    res.redirect('/users/' + user._id)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error updating user')
  }
})

// Delete Route
router.delete('/:id', (req, res) => {
    db.User.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/users'))
})

// Exports these routes so that they are accessible in 'server.js'
module.exports = router