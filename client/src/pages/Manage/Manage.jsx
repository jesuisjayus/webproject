import React from "react";
import { useState } from 'react';
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import { loginFailed, loginStart, loginSuccess } from "../../redux/userSlice";
import Leftbar from "../../components/ManageLeftbar/ManageLeftbar";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import axios from "axios";
import SignIn from "../SignIn/SignIn";
import { ThemeContext } from "../../App";
import '../../App.css';
import { useContext } from "react";


const Manage = () => {
    const {currentUser} = useSelector((state) => state.user);
    const [description, setDescription] = useState(currentUser.description);
    const [characterCount, setCharacterCount] = useState(0);
    const [userName, setUserName] = useState(currentUser.userName);
    const [birthDate, setBirthDate] = useState(currentUser.birthDate);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const theme = useContext(ThemeContext);
    const cookie = document.cookie;

    const handleUserName = (e)=>{
        const name = e.target.value;
        console.log(name.length);
        if (name !== null && name.trim() !== ''){
            setUserName(name);
        }
    };
    
    const handleTextareaChange = (event) => {
        const text = event.target.value;
        setCharacterCount(text.length);
        if (text.length !== 0) {
            setDescription(text);
            console.log(text);
        }
        
    };

    const handleBirthDate = (event) => {
        var regex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (regex.test(event.target.value)) {
          // Le format de la date est correct, vous pouvez mettre à jour la variable
          setBirthDate(event.target.value);
          console.log(event.target.value);
        } else {
          // Afficher un message d'erreur ou prendre d'autres mesures en cas de format incorrect
          console.log("Format de date incorrect !");
        }
    };

    const handleValidate = async(event) => {
        event.preventDefault();
        console.log("manage cookie : ",cookie);
        dispatch(loginStart());
        try{
            const headers = {
                Authorization: `Bearer ${cookie}`
            };
        
            const res = await axios.put(`http://localhost:8000/api/users/${currentUser._id}`, {userName,birthDate,description},{headers});
            dispatch(loginSuccess(res.data));
            navigate(`/profile/${currentUser._id}`);
            console.log(res.data);
        }catch(err){
            alert('Somethong went wrong');
            dispatch(loginFailed());
            console.log(err);
        }
    }

    const handleCancel = (event) => {
        event.preventDefault();
        navigate(`/profile/${currentUser._id}`);
    }

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
                <>
                    <div>
                        <div>
                            <Navbar />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4">
                            <div className="px-6">
                                <Leftbar />
                            </div>
                            <div className="col-span-3 border-t-slate-800 px-6 mt-8 mb-8">
                            <form className={`bg-gradient-to-br ${gradientColors1} from-form-pink via-form-purple to-form-blue flex flex-col px-8 py-12 rounded-lg w-8/12 mx-0 gap-10${theme}`}>
                                <h2 className="text-3xl text-text font-bold text-center mb-5">
                                    Manage Profile
                                </h2>
                                    <input type="text" placeholder="Username" className={`rounded-full py-2 px-2 mt-5 mb-5 ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`} onChange={handleUserName}/>
                                    <input type="text" placeholder="Birth Date (DD/MM/YYYY)" pattern="\d{2}/\d{2}/\d{4}" title="Format DD/MM/YYYY" className={`rounded-full py-2 px-2 mb-5 ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`} onChange={handleBirthDate} required/>
                                    <textarea maxlength={500} title="max 500 characters" placeholder={"Write a little description..." }className={`rounded-lg py-2 px-2 mb-2 ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`} onChange={handleTextareaChange}></textarea>
                                    <p className="mb-5">number of characters : {characterCount}/500</p>
                                    <div className="flex gap-1">
                                            <button className="bg-button resize-none flex items-center justify-center px-4 py-2 mb-5 text-white rounded-full hover:bg-button-hover w-full" onClick={handleValidate}>
                                            <DoneIcon fontSize="large" style={{ marginRight: "8px" }} />
                                            Validate
                                            </button>
                                            <button className="bg-red-500 text-white resize-none flex items-center justify-center px-4 py-2 mb-5 rounded-full hover:bg-red-300 w-full" onClick={handleCancel}>
                                                <CloseIcon fontSize="large" style={{ marginRight: "8px" }} />
                                                Cancel
                                            </button>
                                    </div>
                            </form>    
                            </div>
                        </div>
                    </div>
           </>
           )}
       </>
);};

export default Manage;