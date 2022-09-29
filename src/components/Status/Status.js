import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import img from "../../img/Zubayer.jpg"
import { getElement, setElement } from '../../utilities/LocalDB';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Status = ({ totalTime }) => {

    // create function to add all activities time and show in status section
    let [time, setTime] = useState(0)

    const breakTime = (event) => {
        const breakTime = event.target.textContent;
        const time = breakTime.slice(0, breakTime.length - 1);
        setElement('Break', time);
        setTime(time);
    }

    // create function to get and set time from local storage to show in status section
    useEffect(() => {
        const getTimeFromDB = getElement('Break');
        setTime(getTimeFromDB);
    }, [])
    const showToastMessage = (e) => {
        e.target.style.background = '#7FFF00';
        toast.success("Wow!!! Today's Activities Completed...", {
            position: toast.POSITION.TOP_CENTER
        });
    };

    return (
        <div className="text-center mt-5 sticky top-0">
            <div className=" mb-5">
                <div className="ml-[45%]">
                    <img className='rounded-full w-14 h-14' src={img} alt='' />
                </div>
                <h3 className='mt-2'>S M Zubayer</h3>
                <p><FontAwesomeIcon icon={faLocationDot} className="mr-1 text-white"></FontAwesomeIcon>Kushtia,Khulna</p>
            </div>
            <div className=" flex justify-around bg-slate-600 p-2  rounded-lg">
                <div>
                    <h2 className="md:text-2xl sm:text-xl font-semibold">77 <small className="font-normal">kg</small></h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2 className="md:text-2xl sm:text-xl font-semibold">5.9 <small className="font-normal">Inch</small></h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2 className="md:text-2xl sm:text-xl font-semibold">26 <small className="font-normal">Years</small></h2>
                    <p>Age</p>
                </div>
            </div>
            <h1 className="text-xl font-bold m-3">Add A Break</h1>

            <div className="  bg-slate-600 p-3 rounded-lg flex justify-around">
                <button onClick={(e) => { breakTime(e) }} className="btn btn-outline btn-info rounded-full">20s</button>
                <button onClick={(e) => { breakTime(e) }} className="btn btn-outline btn-info rounded-full">30s</button>
                <button onClick={(e) => { breakTime(e) }} className="btn btn-outline btn-info rounded-full">40s</button>
                <button onClick={(e) => { breakTime(e) }} className="btn btn-outline btn-info rounded-full">50s</button>
            </div>

            {/* display the information */}
            <h1 className="text-xl font-bold m-3">Exercise Details :</h1>
            <div className="bg-slate-600 p-3 my-5 rounded-lg">
                <h3 className='font-bold text-start px-3'>Exercise Time: <span className="font-medium  md:ml-14 sm:ml-3">{totalTime} minutes</span></h3>
            </div>
            <div className="bg-slate-600 p-3 my-5 rounded-lg">
                <h3 className='font-bold text-start px-3'>Break Time: <span className="font-medium md:ml-20 sm:ml-3">{time} seconds</span></h3>
            </div>

            <button onClick={(e) => showToastMessage(e)} className="btn btn-active btn-secondary w-full">Activities Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Status;