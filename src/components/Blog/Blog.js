import React from 'react';

const Blog = () => {
    return (
        <div className="w-[70%] mx-auto my-10">
            <div tabIndex={0} className="collapse collapse-arrow border bg-gray-600 border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does React work?
                </div>
                <div className="collapse-content text-left">
                    <p className="font-semibold">React creates a VIRTUAL DOM in memory:-</p>
                    <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
                    <p className="font-semibold">React only changes what needs to be changed:-</p>
                    <p>React finds out what changes have been made, and changes only what needs to be changed.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow  bg-gray-600 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the difference between State and Props?
                </div>
                <div className="collapse-content">
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Props</th>
                                    <th>State</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>1</th>
                                    <td>Props are read-only.</td>
                                    <td>State changes can be asynchronous.</td>
                                </tr>

                                <tr className="hover">
                                    <th>2</th>
                                    <td>Props are immutable.</td>
                                    <td>State is mutable.</td>
                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td>Props allow you to pass data from one component to other components as an argument.</td>
                                    <td>State holds information about the components.</td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>Props can be accessed by the child component.</td>
                                    <td>State cannot be accessed by child components.</td>
                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>Props are used to communicate between components.</td>
                                    <td>States can be used for rendering dynamic changes with the component.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow  bg-gray-600 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Apart from the data load, what else dose the useEffect do?
                </div>
                <div className="collapse-content text-left">
                    <p>1.Running on state change: validating input field</p>
                    <p>2.Running on state change: live filtering</p>
                    <p>3.Running on state change: trigger animation on new array value</p>
                    <p>4.Running on props change: update paragraph list on fetched API data update</p>
                    <p>5.Running on props change: updating fetched API data to get BTC updated price</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
