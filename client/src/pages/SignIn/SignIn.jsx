import React, { useState } from "react";
import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "../../redux/userSlice";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
const SignIn = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignUp = async(e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
            console.log("test");
            const res = await axios.post("http://localhost:8000/api/auth/signup/", {firstName, lastName, userName, email, password});
            console.log(res.data);
            dispatch(loginSuccess(res.data));
            navigate("/home")
        } catch (error) {
            dispatch(loginFailed());
        }
    };

    const handleLogin = async(e) => {
        e.preventDefault();
        dispatch(loginStart());
        try{
            const res = await axios.post("http://localhost:8000/api/auth/signin/", {userName, password});
            dispatch(loginSuccess(res.data));
            navigate("/home");
            console.log("res", res.data);
        } catch(err){
            alert("Wrong username or password");
            dispatch(loginFailed());
            console.log(err);
        }
    };

    return (
        <div className="mt-10 grid grid-cols-3 gap-20">
            <img src="/logo.png" alt="Logo" width="1000px"/>
            <form className="bg-form flex flex-col px-8 py-12 rounded-lg  mx-auto gap-10">
                <h2 className="text-3xl text-text font-bold text-center">
                    Sign in to your account
                </h2>
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="text" 
                    placeholder="Username" 
                    className="text-xl px-4 py-2 rounded-full"/>
                <input
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="Password" 
                    className="text-xl px-4 py-2 rounded-full"/>
                <button className="bg-button text-white text-xl px-4 py-2 rounded-full hover:bg-button-hover" onClick={handleLogin}>Sign In</button>
            </form>
            <form className="bg-form flex flex-col px-8 py-12 rounded-lg mx-auto gap-10">
                <p className="mx-auto text-text">Don't have any account?</p>
                <h2 className="text-3xl text-text font-bold text-center">
                    Create an account
                </h2>
                <div className="grid grid-cols-2 gap-4">
                <input type="text" 
                     onChange={(e) => setFirstname(e.target.value)}
                     placeholder="Firstname" 
                     className="text-xl px-4 py-2 rounded-full"
                />
                <input type="text"
                    onChange={(e) => setLastname(e.target.value)}
                     placeholder="Lastname"
                     className="text-xl px-4 py-2 rounded-full"
                />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <input type="text" 
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Username" 
                    className="text-xl px-4 py-2 rounded-full"
                />
                <input type="text"
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    className="text-xl px-4 py-2 rounded-full"
                />
                </div>
                <input type="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    className="text-xl px-4 py-2 rounded-full"
                />
                <button className="bg-button text-white text-xl px-4 py-2 rounded-full hover:bg-button-hover" onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
        );
};

export default SignIn;