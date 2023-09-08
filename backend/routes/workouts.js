const express = require('express')

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()


// the route is relative to the app.use IN server.js

//GET all workouts
router.get('/', getWorkouts)

// GET single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE specific workout
router.delete('/:id', deleteWorkout)

// UPDATE specific workout
router.patch('/:id', updateWorkout)


module.exports = router