import React, { useEffect } from 'react';
import img from "../../img/Zubayer.jpg"
const Status = ({ totalTime }) => {
    const breakTime = (event) => {
        console.log(event)
    }
    return (
        <div className="text-center mt-5">
            <div className=" mb-5">
                <div>
                    <img className='rounded-full w-12 h-12' src={img} alt='' />
                </div>
                <h3 className='mt-2'>S M Zubayer</h3>
                <p>Kushtia,Khulna</p>
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
                <button onClick={() => { breakTime(this.innerText) }} className="btn btn-outline btn-info rounded-full">10s</button>
                <button className="btn btn-outline btn-info rounded-full">20s</button>
                <button className="btn btn-outline btn-info rounded-full">30s</button>
                <button className="btn btn-outline btn-info rounded-full">40s</button>
                <button className="btn btn-outline btn-info rounded-full">50s</button>
            </div>


            <h1 className="text-xl font-bold m-3">Exercise Details :</h1>
            <div className="bg-slate-600 p-3 my-5 rounded-lg">
                <h3 className='font-bold text-start px-3'>Exercise Time: <span className="font-medium ml-28">{totalTime} seconds</span></h3>
            </div>
            <div className="bg-slate-600 p-3 my-5 rounded-lg">
                <h3 className='font-bold text-start px-3'>Break Time: <span className="font-medium ml-32">{totalTime} seconds</span></h3>
            </div>

            <button className="btn btn-active btn-secondary w-full">Activities Completed</button>
        </div>
    );
};

export default Status;