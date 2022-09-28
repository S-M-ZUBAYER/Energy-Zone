import React from 'react';
import img from "../../img/Zubayer.jpg"
const Status = () => {
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
                <button className="btn btn-outline btn-info rounded-full">10s</button>
                <button className="btn btn-outline btn-info rounded-full">20s</button>
                <button className="btn btn-outline btn-info rounded-full">30s</button>
                <button className="btn btn-outline btn-info rounded-full">40s</button>
                <button className="btn btn-outline btn-info rounded-full">50s</button>
            </div>

            <h1 className="text-xl font-bold m-3">Exercise Details</h1>
            <label className="input-group input-group-md mb-3">
                <span className='w-1/2'>Exercise Time: </span>
                <input type="text" placeholder="00 seconds" className="input input-bordered input-md w-1/2" />
            </label>
            <label className="input-group input-group-md mb-5">
                <span className='w-1/2'>Break Time</span>
                <input type="text" placeholder="00 seconds" className="input input-bordered input-md w-1/2" />
            </label>
            <button className="btn btn-active btn-secondary w-full">Activities Completed</button>
        </div>
    );
};

export default Status;