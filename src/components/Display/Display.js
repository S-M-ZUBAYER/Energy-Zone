import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Status from '../Status/Status';
import "./Display.css"

const Display = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch("../../../public/acitivities.json")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='display'>
            <div className='border-gray-500'>
                <Activities></Activities>

            </div>
            <div className='border-gray-500'>
                <Status></Status>
            </div>
        </div>
    );
};

export default Display;