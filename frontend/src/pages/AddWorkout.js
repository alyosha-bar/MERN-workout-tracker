import { useState } from "react";
import { useNavigate } from "react-router-dom"

const AddWorkout = () => {

    const [ title, setTitle ] = useState()
    const [ load, setLoad ] = useState()
    const [ reps, setReps ] = useState()
    const [ description, setDescription ] = useState()
    const [ personal_best, setPersonalBest ] = useState()
    // const [ muscles, setMuscles ] = useState()

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // take data from the form
        // const musclesArray = muscles.split(',').map((muscle) => muscle.trim())
        const workout = { title, load, reps, description, personal_best }
        
        // make post request and add data
        fetch('/api/workouts/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(workout)
        }).then( () => {
            console.log('Added Workout')

            // reset data
            setTitle('')
            setLoad('')
            setReps('')
            setDescription('')
            setPersonalBest('')
            // setMuscles('')
            navigate('/')
        })
    }

    return ( 

        <div className="form-card">
            <h2 className="title"> Add New Workout </h2>
            <form onSubmit={ handleSubmit } className="form-container">
                
                <div className="form-group">
                <label htmlFor="title-input"> Title: </label>
                <input 
                    name="title-input"
                    type="text"
                    required
                    value = { title }
                    onChange={ (e) => setTitle(e.target.value) } 
                    className="input-field"
                />
                </div>

                <div className="form-group">
                <label htmlFor="load-input"> Load: </label>
                <input
                    name="load-input" 
                    type="number"
                    required
                    value = { load }
                    onChange={ (e) => setLoad(e.target.value) } 
                    className="input-field"
                />
                </div>

                <div className="form-group">
                <label htmlFor="reps-input"> Reps: </label>
                <input 
                    name="reps-input"
                    type="number"
                    required
                    value = { reps }
                    onChange={ (e) => setReps(e.target.value) } 
                    className="input-field"
                />
                </div>

                <div className="description-group">
                    <label htmlFor="description-input"> Description: </label>
                    <textarea name="description-input"
                        // cols="40"
                        // rows="4"
                        required
                        value = { description }
                        onChange={ (e) => setDescription(e.target.value) }
                        className="description-input"
                        > 
                        </textarea>
                </div>

                <div className="form-group">
                <label htmlFor="pb-input"> PB: </label>
                <input 
                    name="pb-input"
                    type="number"
                    required
                    value = { personal_best }
                    onChange={ (e) => setPersonalBest(e.target.value) } 
                    className="input-field"
                />
                </div>

                {/* <div className="form-group">
                <label htmlFor="muscles-input"> Muscles: </label>
                <input 
                    name="muscles-input"
                    type="text"
                    required
                    value = { muscles }
                    onChange={ (e) => setReps(e.target.value) } 
                    className="input-field"
                />
                </div> */}

                <button type="submit" className="submit-button"> Add Exercise </button>
            </form>
        </div>
     );
}
 
export default AddWorkout;