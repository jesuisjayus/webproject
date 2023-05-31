import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/AddCircle";

const Leftbar = () => {
    return ( 
        <div className="flex flex-col h-full md:h-[90vh] justify-between mr-6">
            <div className="mt-6 flex flex-col space-y-4">
                <Link to="/home">
                    <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                        <HomeIcon fontSize="large" />
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                        <ProfileIcon fontSize="large" />
                        <p>Profile</p>
                    </div>
                </Link>
                <Link to="/new">
                    <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                        <AddIcon fontSize="large" />
                        <p>New post</p>
                    </div>
                </Link>   
            </div>
            <div className="flex justify-between">
                <div>
                    <Link to="/">
                        <button className="bg-red-500 px-4 py-2 text-white rounded-full">
                            Lougout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Leftbar;