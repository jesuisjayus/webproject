import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import HomeIcon from "@mui/icons-material/Home";
import ManageIcon from '@mui/icons-material/ManageAccounts';
import AddIcon from "@mui/icons-material/AddCircle";

const Leftbar = () => {
    const {currentUser} = useSelector((state) => state.user);
    return ( 
        <div className="flex flex-col h-full md:h-[90vh] justify-between mr-6">
            <div className="mt-6 flex flex-col space-y-4">
                <Link to="/home">
                    <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                        <HomeIcon fontSize="large" />
                        <p>Home</p>
                    </div>
                </Link>
                <Link to={`/manage/${currentUser.otherDatas._id}`}>
                    <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                        <ManageIcon fontSize="large" />
                        <p>Manage profile</p>
                    </div>
                </Link>
                <Link to="/NewPost">
                    <div className="flex items-center space-x-6 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                        <AddIcon fontSize="large" />
                        <p>New Post</p>
                    </div>
                </Link>   
            </div>
        </div>
    );
};

export default Leftbar;