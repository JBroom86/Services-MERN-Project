/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outside of server.js
const router = express.Router()
const mongoose = require('mongoose')

// Connection to MongooseDB
mongoose.connect(process.env.MONGODBURI)

/* Import the User model
--------------------------------------------------------------- */
const User = require('../models/user')

/* Routes
--------------------------------------------------------------- */

// Route to delete a user by their ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.json(deletedUser);
    } catch (error) {
        res.status(422).json(error);
    }
});

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router
