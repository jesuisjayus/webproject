import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import HomeIcon from "@mui/icons-material/Home";
import ProfileIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/AddCircle";
import { ThemeContext } from "../../App";

const Leftbar = () => {
    const {currentUser} = useSelector((state) => state.user);
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
                <Link to={`/profile/${currentUser._id}`}>
                    <div className={`flex items-center space-x-6 px-2 py-2 ${theme === "dark" ? "hover:bg-sky-950" : "hover:bg-slate-200"} rounded-full cursor-pointer`}>
                        <ProfileIcon fontSize="large" />
                        <p>Profile</p>
                    </div>
                </Link>
                <Link to="/Newpost">
                    <div className={`flex items-center space-x-6 px-2 py-2 ${theme === "dark" ? "hover:bg-sky-950" : "hover:bg-slate-200"} rounded-full cursor-pointer`}>
                        <AddIcon fontSize="large" />
                        <p>New Post</p>
                    </div>
                </Link>   
            </div>
        </div>
    );
};

export default Leftbar;