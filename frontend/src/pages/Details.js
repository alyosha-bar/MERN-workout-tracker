import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Details = () => {
    const [exercise, setExercise] = useState() 
    const { id } = useParams()


    useEffect( () => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/workouts/'+id)
            const json = await response.json()

            if (response.ok) {
                setExercise(json)
            }
        }

        fetchWorkout()
    }, [])


    return ( 
        <div className="exercise-details">
            <div className="exercise-info">
                {exercise && <h1 className="title"> {exercise.title} </h1>}
                {exercise && <p> {exercise.description} </p> }
            </div>
            <div className="personal-info">
                {exercise && <h4> PB: {exercise.personal_best} </h4> }
                <h4> Muscles Targetted: X, Y, Z</h4>
            </div>
        </div>
     );
}
 
export default Details;