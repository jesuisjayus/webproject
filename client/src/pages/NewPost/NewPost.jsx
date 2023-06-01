import React from "react";
import Leftbar from "../../components/NewPostLeftbar/NewPostLeftbar";
import { useState } from 'react';
import { Link } from "react-router-dom";
import ChooseCategory from "../../components/ChooseCategory/ChooseCategory";
const NewPost = () => {
    const [characterCount, setCharacterCount] = useState(0);  // for short description
    const [characterCount2, setCharacterCount2] = useState(0); // for description
    const handleTextareaChange_short = (event) => {
        const text = event.target.value;
        setCharacterCount(text.length);
        
    };
    const handleTextareaChange_description = (event) => {
        const text = event.target.value;
        setCharacterCount2(text.length);
    };
    return (
            //<div className="px-6">
               // <Leftbar />
            //</div>
            <div>
            <form className="bg-form flex flex-col px-8 py-12 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
                <h2 className="text-3xl text-text font-bold text-center">
                    New Post
                </h2>
                <input type="text" placeholder="Title" className="text-xl px-4 py-2 rounded-full"/>
                <ChooseCategory /> 
                <textarea maxlength={280} title="max 280 characters" placeholder="Write a short description..." className="bg-blue-100 rounded-lg py-2 px-2" onChange={handleTextareaChange_short}></textarea>
                <p className="text-text">Number of characters : {characterCount}/280</p>
                <textarea maxlength={1000} title="max 1000 characters" placeholder="Write the full description..." className="bg-blue-100 rounded-lg py-2 px-2" onChange={handleTextareaChange_description}></textarea>
                <p className="text-text">Number of characters : {characterCount2}/1000</p>
                <button class="bg-button resize-none px-4 py-2 text-white rounded-full hover:bg-button-hover" style={{display: "flex", justifyContent:"center", alignItems:"flex-end"}}>
                    Publish
                </button>
                
                </form>
                </div>
                
            
        );
};

        

export default NewPost;

