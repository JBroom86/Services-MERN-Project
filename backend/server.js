// Requiring packages
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// BCrypt password encryption import. link to documentation -> https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcryptjs')
require('dotenv').config()
const app = express()


// Middleware
const User = require('./models/user')
// This sets a variable to call bcrypt to perform the embedded encryption function.
const bcryptSalt = bcrypt.genSalt(10)

app.use(express.json())

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

// Connection to MongooseDB
mongoose.connect(process.env.MONGO_URL)

app.get('/test', (req, res) => {
    res.json('test ok');
})

app.post('/signup', async (req, res) => {
    const {name, email, password} = req.body
    const userObj = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt)
        //This is calling the bcrupt function and passing the key and the bcryptSalt variable to perform encryption function. 
    })
    res.json(userObj)
})

app.listen(5000)