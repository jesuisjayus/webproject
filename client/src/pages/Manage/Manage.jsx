import React from "react";
import { useEffect, useState } from 'react';
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
        <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-1">
                <Leftbar />
            </div>
            <div className="col-span-3 border-t-slate-800 px-6">
                <h1>Manage Profile</h1> 
                <br />
                <div>
                    <div>
                        <div style={profilePictureStyle}>
                            <img src={selectedImage} style={imageStyle} />
                        </div>
                        <br />
                        <input type="file" accept=".jpeg, .jpg, .png" onChange={handleImageChange} />
                    </div>
                    <br />
                    <br />
                    <h1>FirstName</h1>
                    <input type="text" className="bg-blue-100 rounded py-2 px-2" style={{ width: '80%', height: '40px' }}/>
                    <br />
                    <br />
                    <h1>LastName</h1>
                    <input type="text" className="bg-blue-100 rounded py-2 px-2" style={{ width: '80%', height: '40px' }}/>
                    <br />
                    <br />
                    <h1>Birthday</h1>
                    <input type="text" pattern="\d{2}/\d{2}/\d{4}" title="Format DD/MM/YYYY" className="bg-blue-100 rounded py-2 px-2" style={{ width: '80%', height: '40px' }}required/>
                    <br />
                    <br />
                    <h1>Description</h1>
                    <textarea maxlength={500} title="max 500 characters" className="bg-blue-100 rounded resize-none py-2 px-2" style={{ width: '80%', height: '200px' }} onChange={handleTextareaChange}></textarea>
                    <p>number of characters : {characterCount}/500</p>
                    <br />
                </div>
            </div>
        </div>
        );
};

export default Manage;