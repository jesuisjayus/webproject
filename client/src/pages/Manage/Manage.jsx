import React from "react";
import { useState } from 'react';
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Leftbar from "../../components/ManageLeftbar/ManageLeftbar"; 
import Navbar from "../../components/Navbar/Navbar";

const Manage = () => {
    const [characterCount, setCharacterCount] = useState(0);

    const handleTextareaChange = (event) => {
        const text = event.target.value;
        setCharacterCount(text.length);
    };
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };

    const profilePictureStyle = {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        overflow: 'hidden',
        backgroundColor: 'lightgray',
      };
    
    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
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
                <form className="bg-form flex flex-col px-8 py-12 rounded-lg w-8/12 mx-0 gap-10">
                    <h2 className="text-3xl text-text font-bold text-center">
                        Manage Profile
                    </h2> 
                    <div style={profilePictureStyle}>
                        <img src={selectedImage} alt="" style={imageStyle} />
                    </div>
                    <input type="file" accept=".jpeg, .jpg, .png" onChange={handleImageChange} />
                        <input type="text" placeholder="Username" className="bg-blue-100 rounded-full py-2 px-2"/>
                        <input type="text" placeholder="Birth Date (DD/MM/YYYY)" pattern="\d{2}/\d{2}/\d{4}" title="Format DD/MM/YYYY" className="bg-blue-100 rounded-full py-2 px-2" required/>
                        <textarea maxlength={500} title="max 500 characters" placeholder="Write a little description..." className="bg-blue-100 rounded-lg py-2 px-2" onChange={handleTextareaChange}></textarea>
                        <p>number of characters : {characterCount}/500</p>
                        <div className="grid grid-cols-2 gap-4">
                            <Link to="/profile/:id">
                                <div className="bg-button text-white text-xl px-4 py-2 rounded-full hover:bg-button-hover">
                                    <DoneIcon fontSize="large" />
                                    <span className="ml-8">Validate</span>
                                </div>
                            </Link>
                            <Link to="/profile/:id">
                                <div className="bg-red-500 text-white text-xl px-4 py-2 rounded-full hover:bg-red-300">
                                    <CloseIcon fontSize="large" />
                                    <span className="ml-8">Cancel</span>
                                </div>
                            </Link>
                        </div>
                </form>     
                </div>
            </div>
        </div>
        );
    };


export default Manage; 

                     