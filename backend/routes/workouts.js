const express = require('express')
const Workout = require('../models/workoutModel')
const {getworkouts,getworkout,createWorkout,deleteworkout,updateworkout} = require('../controllers/workoutController')

const router = express.Router()


//GET all workouts
router.get('/',getworkouts)
//GET single workout
router.get('/:id',getworkout)
//POST new workout
router.post('/',createWorkout)
//DELETE new workout
router.delete('/:id',deleteworkout)
//UPDATE new workout
router.patch('/:id',updateworkout)
  
module.exports = router