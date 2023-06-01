import React from "react";
import Leftbar from "../../components/NewPostLeftbar/NewPostLeftbar";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


const NewPost = () => {
    const [characterCount, setCharacterCount] = useState(0);

    const handleTextareaChange = (event) => {
        const text = event.target.value;
        setCharacterCount(text.length);
    };
    return (
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="px-6">
                    <Leftbar />
                </div>
                <div className="col-span-3 border-t-slate-800 px-6">
                <h1>New Post</h1> 
                <br />
                <div>
                    </div>
                    <br />
                    <br />
                    <h1>Title</h1>
                    <input type="text" className="bg-blue-100 rounded py-2 px-2" style={{ width: '80%', height: '40px' }}/>
                    <br />
                    <br />
                    <h1>Short Description</h1>
                    <textarea maxlength={100} title="max 100 characters" className="bg-blue-100 rounded resize-none py-2 px-2" style={{ width: '80%', height: '50px' }} onChange={handleTextareaChange}></textarea>
                    <p>number of characters : {characterCount}/100</p>
                    <br />
                    <br />
                    <h1>Description</h1>
                    <textarea maxlength={700} title="max 700 characters" className="bg-blue-100 rounded resize-none py-2 px-2" style={{ width: '80%', height: '200px' }} onChange={handleTextareaChange}></textarea>
                    <p>number of characters : {characterCount}/700</p>
                    <br />
                </div>
                <div className="flex">
                <div>
                    <Link to="/profile/:id">
                        
                        <button className="bg-blue-500 px-4 py-2 text-white rounded-full float-right">
                            Publish
                        </button>
                    </Link>
                </div>
            </div>
            </div>
        );
};

        

export default NewPost;