import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import img from "../../img/th.jpg"

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 bg-slate-900">
                <div className="flex-1">
                    <div>
                        <a href='./' className="btn btn-ghost normal-case text-xl"><FontAwesomeIcon icon={faDumbbell} className="mr-4 text-slate-400 text-5xl"></FontAwesomeIcon>Energy Zone</a>
                    </div>
                </div>

                <div className="flex-none gap-2">

                    <div className="dropdown dropdown-end mr-5">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={img} alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a href='./' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a href='./'>Settings</a></li>
                            <li><a href='./'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;