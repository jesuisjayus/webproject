import React from "react";
import Leftbar from "../../components/NewPostLeftbar/NewPostLeftbar";
import { useState } from 'react';
import { Link } from "react-router-dom";
import ChooseCategory from "../../components/ChooseCategory/ChooseCategory";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

import SocialMedia from "../../components/SocialMedia/SocialMedia";
const NewPost = () => {
    const [characterCount, setCharacterCount] = useState(0);  // for short description
    const [characterCount2, setCharacterCount2] = useState(0); // for description
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const handleTextareaChange_short = (event) => {
        const text = event.target.value;
        setCharacterCount(text.length);
        setShortDescription(text);        
    };

    const handleTextareaChange_description = (event) => {
        const text = event.target.value;
        setCharacterCount2(text.length);
        setLongDescription(text);
    };

    const handlePublish = (event) => {
        event.preventDefault();
        console.log(title+""+shortDescription+""+longDescription);
        navigate("/home");
    };

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="px-6">
                <Leftbar />
                </div>
                <div className="col-span-3 border-t-slate-800">
                    <form className="bg-gradient-to-br from-form-pink via-form-purple to-form-blue flex flex-col px-8 py-12 rounded-lg w-8/12 mx-0 gap-6">
                        <h2 className="text-3xl text-text font-bold text-center">
                            New Post
                        </h2>
                        <input type="text" placeholder="Title" className="text-xl px-4 py-2 rounded-full" onChange={(e) => setTitle(e.target.value)}/>
                        <ChooseCategory /> 
                        <textarea maxlength={280} title="max 280 characters" placeholder="Write a short description..." className="bg-blue-100 rounded-lg py-2 px-2" onChange={handleTextareaChange_short}></textarea>
                        <p className="text-text">Number of characters : {characterCount}/280</p>
                        <textarea maxlength={1000} title="max 1000 characters" placeholder="Write the full description..." className="bg-blue-100 rounded-lg py-2 px-2" onChange={handleTextareaChange_description}></textarea>
                        <p className="text-text">Number of characters : {characterCount2}/1000</p>
                            <div className="flex justify-center">
                            <button class="bg-button resize-none px-4 py-2 text-white rounded-full hover:bg-button-hover" style={{display: "flex", justifyContent:"center", alignItems:"flex-end", width:"60%"}} onClick={handlePublish}>
                                Publish
                            </button>
                            </div>
                    </form>    
                </div>
                    <a>
                    <span style={{ height:"50px", width: "4rem" }}></span> 
                    <SocialMedia/>
                    <span style={{ height:"50px", width: "4rem" }}></span> 
                    </a>
            </div>

            </div>
         
        );
};
        

export default NewPost;
