import React from "react";
import Leftbar from "../../components/NewPostLeftbar/NewPostLeftbar";
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import axios from 'axios';

const PostDetail = () => {
    let {state}= useLocation(); 
    const [userData, setUserData] = useState();

    useEffect(() => {
            const fetchData = async () => {
                try{
                    const findUser = await axios.get(`http://localhost:8000/api/users/find/${state.userId}`);
                    console.log(findUser.data);
                    setUserData(findUser.data);
                } catch (error) {
                    console.log(error);
        
                }
    
        };
        fetchData();
    },[state.userId]);

    return (
        <div>
        {userData && ( 
        <>
            <div>
                <Navbar />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="px-6">
                    <Leftbar />
                </div>
                <div className="col-span-3 border-t-slate-800 px-6">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{state.title}</h1>
                        <h1 className="text-3xl font-bold mb-4">{state.category}</h1>
                        <h1 className="text-3xl font-bold mb-4">{state.text}</h1>
                        <h1 className="text-3xl font-bold mb-4">{state.description}</h1>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Qui suis-je?</h1>
                        <h1 className="text-3xl font-bold mb-4">{userData.userName}</h1>
                        <h1 className="text-3xl font-bold mb-4">{userData.description}</h1>
                    </div>
                </div>
            </div>
        </>)}
        </div>
        );
};

        

export default PostDetail;