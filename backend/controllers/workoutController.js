const Workout = require('../models/workoutModel')

//get all
const getworkouts = async(req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}
//get single
const getworkout = async(req,res) => {
    const {id} = req.params
    const workouts = await Workout.findById(id)
    if(!workouts){
        return res.status(404).json({error: "No such workouts"})
    }
    res.status(200).json(workouts)
}


//create
const createWorkout = async(req,res) => {
    const {title,load,reps} = req.body
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//delete
const deleteworkout = async(req,res) => {
    const {id} = req.params
    const workouts = await Workout.findOneAndDelete({_id: id})
    if(!workouts){
        return res.status(404).json({error: "No such workouts"})
    }
    res.status(200).json(workouts)
}
//udpate
const updateworkout = async(req,res) => {
    const {id} = req.params
    const workouts = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!workouts){
        return res.status(404).json({error: "No such workouts"})
    }
    res.status(200).json(workouts)
}
//
module.exports = {
    getworkouts,getworkout,
    createWorkout,deleteworkout,updateworkout
}