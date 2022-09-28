import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Status from '../Status/Status';
import "./Display.css"

const Display = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('acitivities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    let totalExerciseTime = 0;
    const exerciseTimer = (time) => {
        totalExerciseTime = totalExerciseTime + time;
        console.log(totalExerciseTime)
    }
    return (
        <div className='display'>
            <div className='border-gray-500'>
                <Activities activities={activities} handler={exerciseTimer}></Activities>

            </div>
            <div className='border-gray-500'>
                <Status totalTime={totalExerciseTime}></Status>
            </div>
        </div>
    );
};

export default Display;