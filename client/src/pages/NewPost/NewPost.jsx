import SignIn from "../SignIn/SignIn";
import React, { useState, useContext } from "react";
import Leftbar from "../../components/NewPostLeftbar/NewPostLeftbar";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux';
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { ThemeContext } from "../../App";
import '../../App.css';
import { categories } from "../../components/Category/category";

const NewPost = () => {
    const {currentUser} = useSelector((state) => state.user);
    const [characterCount, setCharacterCount] = useState(0);  // for short description
    const [characterCount2, setCharacterCount2] = useState(0); // for description
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    const theme = useContext(ThemeContext);
    const cookie = document.cookie;


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

    const handlePublish = async(e) => {
        e.preventDefault();
        try{
            const headers = {
                Authorization: `Bearer ${cookie}`
            };                
            await axios.post("http://localhost:8000/api/posts/", 
            {
                userId: currentUser._id,
                title: title,
                text: shortDescription,
                description: longDescription,
                category: category,
            }, { headers });
            navigate("/home");

        } catch(err){
            alert("Could not publish");
            console.log(err);
        }
    };

    let gradientColors1;
    if (theme === "light") {
      gradientColors1 = "from-form-pink via-form-purple to-form-blue";
    } else {
      gradientColors1 = "from-form-pink-dark via-form-purple-dark to-form-blue-dark";
    }
    return (
        <>
            {!currentUser ? (
                <SignIn/>
            ) : (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
            <div className={`p-6 ${theme}`}>
                <Leftbar />
                </div>
                <div className="col-span-3 px-6 mt-8 mb-8">
                    <form className={`bg-gradient-to-br ${gradientColors1} flex flex-col px-8 py-12 rounded-lg w-8/12 mx-0 gap-6 ${theme}`}>
                        <h2 className="text-3xl text-text font-bold text-center">
                            New Post
                        </h2>
                        <input type="text" placeholder="Title" className={`text-xl px-4 py-2 rounded-full ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`} 
                        onChange={(e) => setTitle(e.target.value)}/>
                        <div>
                            <select className={`px-4 py-2 rounded-full ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}
                            onChange={(e) => setCategory(e.target.value)}>
                            {categories && categories.map((category) => {
                                return (
                                <option key={category.value}>{category.label}</option> 
                                )
                            })
                            }
                        </select>                       
                        </div>
                        <textarea maxlength={280} title="max 280 characters" placeholder="Write a short description..." className={`bg-blue-100 rounded-lg py-2 px-2 ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`} onChange={handleTextareaChange_short}></textarea>
                        <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>Number of characters : {characterCount}/280</p>
                    <textarea maxlength={1000} title="max 1000 characters" placeholder="Write the full description..." className={`bg-blue-100 rounded-lg py-2 px-2 ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`} onChange={handleTextareaChange_description}></textarea>
                        <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>Number of characters : {characterCount2}/1000</p>
                            <div className="flex justify-center">
                            <button class="bg-button resize-none px-4 py-2 text-white rounded-full hover:bg-button-hover" style={{display: "flex", justifyContent:"center", alignItems:"flex-end", width:"60%"}} onClick={handlePublish}>
                                Publish
                            </button>
                            </div>
                    </form>    
                </div>
            </div>

        </div>
            )}
        </>
         
        );
};
        

export default NewPost;
