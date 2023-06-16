import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Post = ({post, setData}) => {
    const [userData, setUserData] = useState();
    const [userId, setUserId] = useState("");
    const cookie = document.cookie;
    useEffect(() => {
            const fetchData = async () => {
                try{
                    const findUser = await axios.get(`http://localhost:8000/api/users/find/${post.userId}`);
                    console.log(findUser.data);
                    setUserId(post.userId.toString());
                    setUserData(findUser.data);
                } catch (error) {
                    console.log(error);
        
                }
    
        };
    
        fetchData();
    },[post.userId]);
    const handleDelete = async(e) => {
        e.preventDefault();
        try{
            const headers = {
                Authorization: `Bearer ${cookie}`
            };
            console.log("profile",userId);
            const res = await axios.delete(`http://localhost:8000/api/posts/delete/${post._id}`, {data:{userId: userId}}, {headers});
            window.location.reload(false);
        } catch(err){
            console.log(err);
        }
    };

    return (
        <div className='mt-4'>
        {userData && ( 
            <>
            <form className="bg-gradient-to-bl from-form-pink via-form-purple to-form-blue flex flex-col px-8 py-4 rounded-lg mx-auto gap-3">
                <div className="grid grid-cols-[85%_15%]">
                    <h1 className="text-3xl text-text font-bold text-left">
                        {post.title}
                    </h1>
                    <button className="bg-button text-1xl text-center ml-auto rounded-lg px-2 text-white float-right hover:bg-button-hover" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
                <p className="text-1xl text-center bg-blue-100 px-4 rounded-full mr-auto">
                    {post.category}
                </p>   
                <p className="text-2xl text-center text-left">
                    {post.description}
                </p>            
            </form>
        </>)}
        </div>
    );
};
export default Post;