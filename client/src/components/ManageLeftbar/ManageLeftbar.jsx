import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";

import HomeIcon from "@mui/icons-material/Home";

const Leftbar = () => {
    const theme = useContext(ThemeContext);
    return ( 
        <div className="flex flex-col h-full md:h-[90vh] justify-between mr-6">
            <div className="mt-6 flex flex-col space-y-4">
                <Link to="/home">
                    <div className={`flex items-center space-x-6 px-2 py-2 ${theme === "dark" ? "hover:bg-sky-950" : "hover:bg-slate-200"} rounded-full cursor-pointer`}>
                        <HomeIcon fontSize="large" />
                        <p>Home</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Leftbar;
