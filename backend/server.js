require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const CORS = require('cors')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//middleware
app.use(express.json())

app.use(CORS())

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//routes
app.use('/api/workouts/',workoutRoutes)



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Listening on port 4000");
    })
})
.catch((err)=>{
    console.log(err);
})