import React, {useState, useEffect} from "react";
import Leftbar from "../../components/ProfileLeftbar/ProfileLeftbar"; 
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from 'react-redux';
import Post from "../../components/Post/Post";
import axios from 'axios';

const Profile = () => {

    const {currentUser} = useSelector((state) => state.user);
    const [timeLine, setTimeLine] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const timeLinePost = await axios.get(`http://localhost:8000/api/posts/timeline`);
                setTimeLine(timeLinePost.data);
                console.log(timeLinePost.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [currentUser._id]);

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
                <form className="bg-gradient-to-bl from-form-pink via-form-purple to-form-blue flex flex-col px-8 py-12 rounded-lg w-8/12 mx-0 gap-5">
                        <h2 className="text-3xl text-text font-bold text-center rounded">
                            Your Profile
                        </h2> 
                    <div className="bg-blue-100 text-xl px-4 py-2 rounded-full">
                        <h1><b>User Name : </b> {currentUser.userName}</h1>
                    </div>
                    <div className="bg-blue-100 text-xl px-4 py-2 rounded-full">
                        <h1><b>Last Name : </b> {currentUser.firstName}</h1>
                        <h1><b>First Name : </b> {currentUser.lastName}</h1>
                    </div>
                    <div className="bg-blue-100 text-xl px-4 py-2 rounded-full">
                        <h1><b>Email : </b> {currentUser.email}</h1>
                    </div>
                    <div className="bg-blue-100 text-xl px-4 py-2 rounded-full">
                        <h1><b>Birth Date : </b> {currentUser.birthDate}</h1>
                    </div>
                    <div className="bg-blue-100 text-xl px-4 py-2 rounded-lg text-justify">
                        <h1><b>Description : </b> {currentUser.description}</h1>
                    </div>
                </form>     
                </div>
            </div>
            <div className="mt-6">
            {timeLine &&
            timeLine.map((post) => {
                console.log(currentUser.id);
                console.log(post.userId);
                if(post.userId === currentUser._id){
                return (
                    <div key={post._id} className="p-5">
                        <Post post = {post} setData={setTimeLine} />
                    </div>
                );
                }
            })}
      </div>
    </div>
);};
export default Profile;