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
const bcrypt = require("bcrypt");
const jwt = require('jwt-simple')
const dotenv = require('dotenv')
dotenv.config();

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require("../models");

/* Require the JWT config
--------------------------------------------------------------- */
const config = require('../../jwt.config.js')

/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all users
router.get("/", (req, res) => {
  db.User.find().then((user) => res.json(user));
});

// SIGN UP ROUTE (create user)
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.User.create({
      name,
      email,
      password: hashedPassword,
    });
    // if the database creates a user successfully, assign a JWT to the user and send the JWT as the response
    const token = jwt.encode({ id: user.id }, config.jwtSecret);
    res.json({ token: token });
  } catch (err) {
    console.error(err);
    res.sendStatus(401).json({ data: 'Could not create a new user, try again' });
  }
});  

// LOG IN (log into a user account)
router.post('/login', async (req, res) => {
  try {
      // attempt to find the user by their email in the database
      const foundUser = await db.User.findOne({ email: req.body.email })
      // check to:
      // make sure the user was found in the database
      // make sure the user entered in the correct password
      if (foundUser) {
          const passwordsMatch = await bcrypt.compare(req.body.password, foundUser.password)
          if (passwordsMatch) {
              // if the above applies, send the JWT to the browser
              const payload = { id: foundUser.id }
              const token = jwt.encode(payload, config.jwtSecret)
              res.json({
                  token: token,
                  email: foundUser.email
              })
          } else {
              // if the user was found in the database but their password was incorrect, send an error
              res.sendStatus(401)
          }
      } else {
          // if the user was not found in the database, send an error
          res.sendStatus(401)
      }
  } catch (err) {
      console.error(err);
      res.sendStatus(500);
  }
})


//Show Route
router.get("/:id", function (req, res) {
  db.User.findById(req.params.id).then((user) => res.json(user));
});

//Update Route
router.put("/:id", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Hash the new password if it was included in the request
    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
    const updates = { name, email, password: hashedPassword };
    const user = await db.User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    res.redirect("/users/" + user._id);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating user");
  }
});

// Delete Route
router.delete("/:id", (req, res) => {
  db.User.findByIdAndRemove(req.params.id).then(() => res.redirect("/users"));
});

// Exports these routes so that they are accessible in 'server.js'
module.exports = router;
