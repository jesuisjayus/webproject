import React from "react";
import { Link } from "react-router-dom"; 

const Error = () => {
    return (
            <div className="text-center my-8 space-y-5">
                <h2 className="font-bold text-4xl">Error, page not found</h2>
                <p className="pb-2">
                    Please go back to the home page and try again.
                </p>
                <Link to="/home" className="bg-blue-500 px-3 py-1 rounded-full text-white font-bold hover:bg-blue-700">
                    Home
                </Link>
            </div>
        );
};

export default Error;