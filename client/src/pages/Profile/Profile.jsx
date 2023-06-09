
import SignIn from "../SignIn/SignIn";
import Leftbar from "../../components/ProfileLeftbar/ProfileLeftbar"; 
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from 'react-redux';
import TimeLinePostProfile from "../../components/TimeLinePostProfile/TimeLinePostProfile";
import axios from 'axios';
import { ThemeContext } from "../../App";
import React, { useState, useContext, useEffect } from "react";
const Profile = () => {

    const theme = useContext(ThemeContext);

    const {currentUser} = useSelector((state) => state.user);
    const [TimeLineBis, setTimeLineBis] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const TimeLineBisPost = await axios.get(`http://localhost:8000/api/posts/timeline`);
                setTimeLineBis(TimeLineBisPost.data);
                console.log(TimeLineBisPost.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [currentUser._id]);

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
                <div className="px-6">
                    <Leftbar />
                </div>
                <div className="col-span-3 border-t-slate-800 px-6 mt-8">
                    <form className={`mdmd:shrink-0 bg-gradient-to-bl ${gradientColors1} from-form-pink via-form-purple to-form-blue flex flex-col px-8 py-12 rounded-lg w-8/12 mx-0 gap-5  ${theme} `}>
                            <h2 className="text-3xl text-text font-bold text-center rounded">
                                Your Profile
                            </h2> 
                        <div className={`text-xl px-4 py-2 rounded-full truncate ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}>
                            <h1><b>User Name : </b> {currentUser.userName}</h1>
                        </div>
                        <div className={`text-xl px-4 py-2 rounded-full truncate ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}>
                            <h1><b>Last Name : </b> {currentUser.firstName}</h1>
                        </div>
                        <div className={`text-xl px-4 py-2 rounded-full truncate ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}>
                            <h1><b>First Name : </b> {currentUser.lastName}</h1>
                        </div>
                        <div className={`text-xl px-4 py-2 rounded-full truncate ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}>
                            <h1><b>Email : </b> {currentUser.email}</h1>
                        </div>
                        <div className={`text-xl px-4 py-2 rounded-full truncate ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}>
                            <h1><b>Birth Date : </b> {currentUser.birthDate}</h1>
                        </div>
                        <div className={`text-xl px-4 py-2 rounded-lg text-justify ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`}>
                            <h1><b>Description : </b> {currentUser.description}</h1>
                        </div>
                    </form>
                    <div className="flex flex-col w-8/12">
                        <h1 className={`py-5 text-3xl ${theme === "dark" ? "text-white" : "text-text"} font-bold text-center rounded`}>Your Posts</h1>
                        <TimeLinePostProfile/>
                    </div>     
                </div>
            </div>
        </div>
            )}
        </>
);};
export default Profile;