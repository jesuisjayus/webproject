import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";


const Leftbar = () => {
    return ( 
        <div className="flex flex-col h-full md:h-[80vh] justify-between mr-3">
            <div className="mt-6 flex flex-col space-y-4">
                <Link to="/home">
                    <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                        <HomeIcon fontSize="large" />
                        <h1>Home</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Leftbar;