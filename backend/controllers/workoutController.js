const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


// get all workouts 
const getWorkouts = async (req, res) => {
    //in empty curly braces you put the condition
    // sort -1 = descending order
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// get a single workout 
const getWorkout = async (req, res) => {

    // get id from url route
    const { id } = req.params

    // checks if the id is in a valid format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'})
    }

    const workout = await Workout.findById(id)
    
    if (!workout) {
        return res.status(404).json({err: 'Workout Not Found'})
    }

    res.status(200).json(workout)
}

// create a new workout 
const createWorkout = async (req, res) => {
    const { title, load, reps, description, personal_best} = req.body

    // add doc to DB
    try {
        const workout = await Workout.create( 
            {title, load, reps, description, personal_best} )
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

// delete workout 
const deleteWorkout = async (req, res) => {
    // get id from url route
    const { id } = req.params

    // checks if the id is in a valid format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout) {
        return res.status(404).json({error: 'No Such Workout'})
    }

    res.status(200).json( {message: "Workout Deleted Successfully", workout})

}

// update a workout 
const updateWorkout = async (req, res) => {
    // get id from url route
    const { id } = req.params

    // checks if the id is in a valid format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
    })

    if(!workout) {
        return res.status(404).json({error: 'No Such Workout'})
    }

    res.status(200).json( {message: "Workout Updated Successfully", workout})
}


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout, 
    updateWorkout
}