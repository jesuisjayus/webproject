import React from "react";
import { useState } from 'react';
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Leftbar from "../../components/ManageLeftbar/ManageLeftbar"; 

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
            
        
            <form className="bg-form flex flex-col px-8 py-12 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
            <div className="col-span-3 border-t-slate-800 px-6">
                <h2 className="text-3xl text-text font-bold">Manage Profile</h2> 
                <br />
                <div>
                    <div>
                        <div style={profilePictureStyle}>
                            <img src={selectedImage} alt="" style={imageStyle} />
                        </div>
                        <br />
                        <input type="file" accept=".jpeg, .jpg, .png" onChange={handleImageChange} />
                    </div>
                    <br />
                    <br />
                    <h1>First Name</h1>
                    <input type="text" className="bg-blue-100 rounded py-2 px-2" style={{ width: '80%', height: '40px' }}/>
                    <br />
                    <br />
                    <h1>Last Name</h1>
                    <input type="text" className="bg-blue-100 rounded py-2 px-2" style={{ width: '80%', height: '40px' }}/>
                    <br />
                    <br />
                    <h1>Birthday</h1>
                    <input type="text" pattern="\d{2}/\d{2}/\d{4}" title="Format DD/MM/YYYY" className="bg-blue-100 rounded py-2 px-2" style={{ width: '80%', height: '40px' }}required/>
                    <br />
                    <br />
                    <h1>City</h1>
                    <input type="text" className="bg-blue-100 rounded py-2 px-2" style={{ width: '80%', height: '40px' }}/>
                    <br />
                    <br />
                    <h1>Description</h1>
                    <textarea maxlength={500} title="max 500 characters" className="bg-blue-100 rounded resize-none py-2 px-2" style={{ width: '80%', height: '200px' }} onChange={handleTextareaChange}></textarea>
                    <p>number of characters : {characterCount}/500</p>
                    <br />
                </div>
                <div className="grid grid-col-1 md:grid-cols-2 justify-center">
                    <div col-span-1 >
                        <Link to="/profile/:id">
                            <div className="flex items-center space-x-6 bg-purple-600 px-4 py-2 text-white hover:bg-slate-400 rounded-full cursor-pointer" style={{ width: '60%', height: '40px' }}>
                                <DoneIcon fontSize="large" />
                                <p>Validate</p>
                            </div>
                        </Link>
                    </div>
                    <div col-span-2 >
                        <Link to="/profile/:id">
                            <div className="flex items-center space-x-6 bg-red-500 px-4 py-2 text-white hover:bg-slate-400 rounded-full cursor-pointer" style={{ width: '60%', height: '40px' }}>
                                <CloseIcon fontSize="large" />
                                <p>Cancel</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <br /> 
            </div>      
            </form>     
        
        );
};

export default Manage; 