import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const [exercises, setExercises] = useState()

    const navigate = useNavigate()

    const handleDelete = (_id) => {

        fetch('/api/workouts/' + _id, {
            method: 'DELETE'
        }).then( () => {
            console.log('deleted')
            //reload
            navigate(0)
        }).catch( (err) => {
            console.log(err.message)
        })
    }


    // possibly refractor to LINK
    const handleClick = (_id) => {
        // open new page
        navigate('/details/'+ _id)
    }

    useEffect( () => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                setExercises(json)
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <h2 className="title"> Home </h2>
            { exercises && exercises.map( (exercise) => (
                <div className="exercise-card" key={exercise._id}>
                    <div className="workout-click-area" onClick={ () => { handleClick(exercise._id) } }>
                        <h3> {exercise.title} </h3>
                        <p> {exercise.load}kg for {exercise.reps}reps </p>
                    </div>
                    <button className="delete-btn"  onClick={ () => { handleDelete(exercise._id) } }> Delete </button>
                </div>
            ))}
        </div>
    )
}

export default Home