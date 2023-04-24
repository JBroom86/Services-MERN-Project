/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// requiring JSON Web Token package - see markdown posted
const jwt = require('jsonwebtoken')
// BCrypt password encryption import. link to documentation -> https://www.npmjs.com/package/bcrypt -> also watched this video on how it works - https://www.youtube.com/watch?v=AzA_LTDoFqY
const bcrypt = require('bcryptjs')
const cookieParser = require('cookie-parser')
require('dotenv').config()

/* Create the Express app
--------------------------------------------------------------- */
const app = express()


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const User = require('./models/user')
const Service = require('./models/service')

const userCtrl = require('./controllers/users')
const serviceCtrl = require('./controllers/services')

/* Middleware (app.use)
--------------------------------------------------------------- */
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}))

// This sets a variable to call bcrypt to perform the embedded encryption function.
const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = 'this is a random string'



// Connection to MongooseDB
mongoose.connect(process.env.MONGODBURI)


/* Mount routes
--------------------------------------------------------------- */
app.get('/test', (req, res) => {
    res.json('test ok');
})




app.post('/signup', async (req, res) => {
    const {name, email, password} = req.body
    
    try {
        const userObj = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, bcryptSalt)
            //This is calling the bcrupt function and passing the key and the bcryptSalt variable to perform encryption function. 
        })
        res.json(userObj)
    } catch (error) {
        res.status(422).json(error)
    }
        
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const userObj = await User.findOne({email})
    if (userObj) {
        const passwordGood = bcrypt.compareSync(password, userObj.password)
        if (passwordGood) {
            jwt.sign({
                email: userObj.email, 
                id: userObj._id, 
                name: userObj.name
            }, jwtSecret,{}, (error, token) => {
                if (error) throw error
                res.cookie('token', token).json(userObj)
            })
            
        } else {
            res.json('password no match')
        }
    } else {
        res.json('not found')
    }
})

app.get('/profile', (req, res) => {
    const {token} = req.cookies
    if (token) {
        jwt.verify(token, jwtSecret, {}, (error, user) => {
            if (error) throw error
            res.json(user)
        })
    } else {
        res.json(null)
    }
    
})

// Routes for user CRUD operations
app.use('/users', userCtrl)
// app.use('/services', serviceCtrl)

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(5000)