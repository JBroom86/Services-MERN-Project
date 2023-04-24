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
const Service = require('../models/service')