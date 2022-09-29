import React, { useEffect, useState } from 'react';
import { setElement } from '../../utilities/LocalDB';
import Activities from '../Activities/Activities';
import Blog from '../Blog/Blog';
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

    const exerciseTimer = (time, e) => {
        e.target.innerText = "Added";
        e.target.style.background = '#8FBC8F'
        totalTime = totalTime + time;
        setElement('ExerciseTime', totalTime);
        setTotalTime(totalTime);
    }

    return (
        <div>
            <div className='display'>
                {/* Daily activities part */}
                <div className="mx-auto ">
                    <Activities activities={activities} handler={exerciseTimer}></Activities>
                </div>

                {/* status to show the some information */}
                <div className="status mr-4 mb-5">
                    <Status totalTime={totalTime}></Status>
                </div>
            </div>
            <div>
                <Blog></Blog>
            </div>

        </div>
    );
};

export default Display;