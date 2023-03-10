import React from 'react';
import Exercise from '../Exercise/Exercise';

const Activities = ({ activities, handler }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold my-5">
                Select Today's Activities:-
            </h2>
            <div className='grid lg:grid-cols-3 gap-4 ml-5 md:grid-cols-2 sm:grid-cols-1'>
                {activities.map(activity => <Exercise key={activity.id} handler={handler} exercise={activity}></Exercise>)}
            </div>
        </div>
    );
};

export default Activities;