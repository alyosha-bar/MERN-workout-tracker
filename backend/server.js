const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

// import the router
const workoutRoutes = require('./routes/workouts')

// creates the express app
const app = express()


// global middleware --> runs everytime a request is made
app.use(express.json()) // needed to see any json attached to body
app.use( (req, res, next) => {
    // console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI).then( () => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('Connected to DB & Listening on port', process.env.PORT)
    })
}).catch( (err) => {
    console.log(err)
})
 
// only listen to requests to when db is connected