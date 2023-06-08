import React from "react";
import Leftbar from "../../components/HomeLeftbar/HomeLeftbar";
import Navbar from "../../components/Navbar/Navbar";
import SignIn from "../SignIn/SignIn";

import {useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";


const Home = () => {
    const {currentUser} = useSelector((state) => state.user);
    console.log(currentUser);
    return (

        <>
            {!currentUser ? (
                <SignIn/>
            ) : (
                <>
                <div>
                    <Navbar />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="px-6"><Leftbar /></div>
                    <div className="col-span-3 border-t-slate-800 px-6">
                        <p>Annonce</p>
                    </div>
                </div>
                </>
            )}
        </>
        );
};

export default Home;