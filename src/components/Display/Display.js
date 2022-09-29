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
    let [totalTime, setTotalTime] = useState(0)

    const exerciseTimer = (time) => {
        totalTime = totalTime + time;
        setTotalTime(totalTime);
    }
    return (
        <div className='display'>
            <div className='border-gray-500'>
                <Activities activities={activities} handler={exerciseTimer}></Activities>

            </div>
            <div className='border-gray-500'>
                <Status totalTime={totalTime}></Status>
            </div>
        </div>
    );
};

export default Display;