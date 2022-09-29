const Exercise = ({ exercise, handler }) => {
    const { name, img, description, age, time } = exercise;


    return (

        <div className="card w-64 bg-gray-600 bg-base-100 shadow-xl ">
            <figure className="px-2 pt-2">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center px-2 relative">
                <h2 className="card-title">{name}</h2>
                <small>{description.length > 80 ? description.slice(0, 80) + '...' : description}</small>
                <p className="font-semibold">For age: {age}</p>
                <p className="font-semibold">Time Requirement: {time} minutes</p>
                <div className="card-actions mt-5">
                    <button onClick={(e) => { handler(time, e) }} className="btn btn-error w-64 absolute fixed bottom-0 left-0 right-0">Add To list</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;