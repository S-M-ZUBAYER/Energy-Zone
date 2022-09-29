import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import img from "../../img/Zubayer.jpg"
import { getElement, setElement } from '../../utilities/LocalDB';
const Status = ({ totalTime }) => {
    let [time, setTime] = useState(0)
    const breakTime = (event) => {
        setElement('Break', event);
        setTime(event);
    }
    // let [exerciseTime, setExerciseTime] = useState(0)
    useEffect(() => {
        const getTimeFromDB = getElement('Break');
        setTime(getTimeFromDB);
    }, [])
    // useEffect(() => {
    //     let ExerciseTimeFromDB = getElement('ExerciseTime');
    //     setExerciseTime(ExerciseTimeFromDB);
    // }, [totalTime])
    return (
        <div className="text-center mt-5 ">
            <div className=" mb-5">
                <div className="ml-36">
                    <img className='rounded-full w-14 h-14' src={img} alt='' />
                </div>
                <h3 className='mt-2'>S M Zubayer</h3>
                <p><FontAwesomeIcon icon={faLocationDot} className="mr-1 text-white"></FontAwesomeIcon>Kushtia,Khulna</p>
            </div>
            <div className=" flex justify-around bg-slate-600 p-2  rounded-lg">
                <div>
                    <h2 className="text-2xl font-semibold">77kg</h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">5.9 Inch</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">26 Years</h2>
                    <p>Age</p>
                </div>
            </div>
            <h1 className="text-xl font-bold m-3">Add A Break</h1>

            <div className="  bg-slate-600 p-3  rounded-lg flex justify-around">
                <button onClick={() => { breakTime(10) }} className="btn btn-outline btn-info rounded-full">10s</button>
                <button onClick={() => { breakTime(20) }} className="btn btn-outline btn-info rounded-full">20s</button>
                <button onClick={() => { breakTime(30) }} className="btn btn-outline btn-info rounded-full">30s</button>
                <button onClick={() => { breakTime(40) }} className="btn btn-outline btn-info rounded-full">40s</button>
                <button onClick={() => { breakTime(50) }} className="btn btn-outline btn-info rounded-full">50s</button>
            </div>


            <h1 className="text-xl font-bold m-3">Exercise Details :</h1>
            <div className="bg-slate-600 p-3 my-5 rounded-lg">
                <h3 className='font-bold text-start px-3'>Exercise Time: <span className="font-medium ml-14">{totalTime} seconds</span></h3>
            </div>
            <div className="bg-slate-600 p-3 my-5 rounded-lg">
                <h3 className='font-bold text-start px-3'>Break Time: <span className="font-medium ml-20">{time} seconds</span></h3>
            </div>

            <button className="btn btn-active btn-secondary w-full">Activities Completed</button>
        </div>
    );
};

export default Status;