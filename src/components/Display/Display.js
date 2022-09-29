import React, { useEffect, useState } from 'react';
import { setElement } from '../../utilities/LocalDB';
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

    let [totalTime, setTotalTime] = useState(0)

    const exerciseTimer = (time) => {
        totalTime = totalTime + time;
        setElement('ExerciseTime', totalTime);
        setTotalTime(totalTime);
    }

    return (
        <div className='display'>
            <div className="mx-auto ">
                <Activities activities={activities} handler={exerciseTimer}></Activities>

            </div>
            <div className="status mr-4">
                <Status totalTime={totalTime}></Status>
            </div>
        </div>
    );
};

export default Display;