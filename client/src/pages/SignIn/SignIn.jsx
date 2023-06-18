import React, { useState, useContext } from "react";
import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "../../redux/userSlice";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { ThemeContext } from "../../App";
import '../../App.css';

const SignIn = () => {
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const theme = useContext(ThemeContext);

    const handleSignUp = async(e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
            console.log("test");
            const res = await axios.post("http://localhost:8000/api/auth/signup/", {firstName, lastName, userName, email, password});
            console.log(res.data);
            // Stocker le cookie côté client
            const accessToken = res.data.access_token;
            document.cookie = `access_token=${accessToken}`;
            console.log(document.cookie);           
            dispatch(loginSuccess(res.data));
            navigate("/home")
        } catch (error) {
            alert("Compte non créé, oups")
            dispatch(loginFailed());
        }
    };

    let gradientColors1;
    if (theme === "light") {
      gradientColors1 = "from-form-pink to-form-purple";
    } else {
      gradientColors1 = "from-form-pink-dark to-form-purple-dark";
    }

    let gradientColors2;
    if (theme === "light") {
      gradientColors2 = "from-form-purple to-form-blue";
    } else {
      gradientColors2 = "from-form-purple-dark to-form-blue-dark";
    }

    console.log('Current theme:', theme);
    const handleLogin = async(e) => {
        e.preventDefault();
        dispatch(loginStart());
        try{
            const res = await axios.post("http://localhost:8000/api/auth/signin/", {userName, password});
            // Stocker le cookie côté client
            const accessToken = res.data.access_token;
            document.cookie = `access_token=${accessToken}`;
            console.log("accessToken : ",accessToken)
            console.log("cookie : ",document.cookie);   
            dispatch(loginSuccess(res.data));
            navigate("/home");
            console.log("res", res.data);

        } catch(err){
            alert("Wrong username or password");
            dispatch(loginFailed());
            console.log(err);
        }
    };
    let logo;
    if (theme === "light") {
      logo = "/logo.png";
    } else {
      logo = "/logo-dark.png";
    }
  let nom;
    if (theme === "light") {
      nom = "/nom.png";
    } else {
      nom = "/nom-dark.png";
    }

    return (

        <div className={`p-4 ${theme}`}>
            <div className="flex flex-col items-center justify-center gap-2">
                <img src={logo} alt="skillshare" width="150px"/>
                <img src={nom} alt="skillshare" width="150px"/>
            </div>
            <form className={`bg-gradient-to-b ${gradientColors1} from-form-pink to-form-purple flex flex-col px-8 py-12 rounded-lg w-6/12 mx-auto gap-8 my-5 ${theme}` }>
                <h2 className="text-3xl text-text font-bold text-center">
                    Sign in to your account
                </h2>
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="text" 
                    placeholder="Username" 
                    className={`text-xl px-4 py-2 rounded-full ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}
                    />
                        <input
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="Password" 
                    className={`text-xl px-4 py-2 rounded-full ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}/>
                <button className="bg-button text-white text-xl px-4 py-2 rounded-full hover:bg-button-hover" onClick={handleLogin}>Sign In</button>
            </form>
            <form className={`bg-gradient-to-b  ${gradientColors2} from-form-purple to-form-blue flex flex-col px-8 py-12 rounded-lg w-6/12 mx-auto gap-8 my-5 ${theme}`}>
                <p className="mx-auto text-text">Don't have any account?</p>
                <h2 className="text-3xl text-text font-bold text-center">
                    Create an account
                </h2>
                <div className="grid grid-cols-2 gap-4">
                <input type="text" 
                     onChange={(e) => setFirstname(e.target.value)}
                     placeholder="Firstname" 
                     className={`text-xl px-4 py-2 rounded-full ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}
                     />
                <input type="text"
                    onChange={(e) => setLastname(e.target.value)}
                     placeholder="Lastname"
                     className={`text-xl px-4 py-2 rounded-full ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}
                     />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <input type="text" 
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Username" 
                    className={`text-xl px-4 py-2 rounded-full ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}
                />
                <input type="text"
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    className={`text-xl px-4 py-2 rounded-full ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}
                />
                </div>
                <input type="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    className={`text-xl px-4 py-2 rounded-full ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}
                />
                <button className="bg-button text-white text-xl px-4 py-2 rounded-full hover:bg-button-hover" onClick={handleSignUp}>Sign Up</button>
            </form>
            <div className=" grid-cols-3  flex justify-center">
                <SocialMedia/>
                </div>
            </div>

        );
};

export default SignIn;