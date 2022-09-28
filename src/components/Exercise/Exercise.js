import React, { useState } from 'react';

const Exercise = ({ exercise, handler }) => {
    const { name, img, description, age, time } = exercise;


    return (

        <div className="card w-64 bg-slate-500 bg-base-100 shadow-xl">
            <figure className="px-2 pt-2">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center px-2">
                <h2 className="card-title">{name}</h2>
                <small>{description.length > 80 ? description.slice(0, 80) + '...' : description}</small>
                <p className="font-semibold">For age: {age}</p>
                <p className="font-semibold">Time Requirement: {time} minutes</p>
                <div className="card-actions">
                    <button onClick={() => { handler(time) }} className="btn btn-error">Add To list</button>
                    <button onClick={() => { handler(time) }} className="btn btn-info hidden">Add To list</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;