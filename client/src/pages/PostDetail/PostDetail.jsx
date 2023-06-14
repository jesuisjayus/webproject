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
                        <form className="bg-gradient-to-b from-form-pink to-form-purple flex flex-col px-8 py-12 rounded-lg w-8/12 mx-0 gap-5">
                                <h2 className="text-3xl text-text font-bold text-center rounded">
                                    Post Details
                                </h2> 
                            <div className="bg-blue-100 text-xl px-4 py-2 rounded-full">
                                <h1><b>Announce : </b> {state.title}</h1>
                            </div>
                            <div className="bg-blue-100 text-xl px-4 py-2 rounded-full">
                                <h1><b>Category : </b> {state.category}</h1>
                            </div>
                            <div className="bg-blue-100 text-xl px-4 py-2 rounded-lg text-justify">
                                <h1><b>Description : </b> {state.description}</h1>
                            </div>
                        </form>
                        <form className="bg-gradient-to-b from-form-purple to-form-blue flex flex-col px-8 py-12 rounded-lg w-8/12 mx-0 my-5 gap-5">
                            <h1 className="text-3xl font-bold mb-4">Qui suis-je?</h1>
                            <div className="bg-blue-100 text-xl px-4 py-2 rounded-lg">
                                <h1><b>UserName : </b> {userData.userName}</h1>
                                <h1><b>First Name : </b> {userData.firstName}</h1>
                                <h1><b>Last Name : </b> {userData.lastName}</h1>
                            </div>
                            <div className="bg-blue-100 text-xl px-4 py-2 rounded-full">
                                <h1><b>Email : </b> {userData.email}</h1>
                            </div>
                            <div className="bg-blue-100 text-xl px-4 py-2 rounded-full">
                                <h1><b>Birth Date : </b> {userData.birthDate}</h1>
                            </div>
                            <div className="bg-blue-100 text-xl px-4 py-2 rounded-lg text-justify">
                                <h1><b>Description : </b> {userData.description}</h1>
                            </div>
                        </form>  
                    </div> 
                </div>
            </>)}
        </div>
    );
};

        

export default PostDetail;