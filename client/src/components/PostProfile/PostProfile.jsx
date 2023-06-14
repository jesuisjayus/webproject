import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Post = ({post, setData}) => {
    const [userData, setUserData] = useState();

    useEffect(() => {
            const fetchData = async () => {
                try{
                    const findUser = await axios.get(`http://localhost:8000/api/users/find/${post.userId}`);
                    console.log(findUser.data);
                    setUserData(findUser.data);
                } catch (error) {
                    console.log(error);
        
                }
    
        };
    
        fetchData();
    },[post.userId]);
    const handleDelete = async(e) => {
        e.preventDefault();
        alert('Delete');
        try{
            const res = await axios.delete("http://localhost:8000/api/posts/", {userId : post.userId});
        } catch(err){
            console.log(err);
        }
    };

    return (
        <div>
        {userData && ( 
            <>
            <form className="bg-gradient-to-bl from-form-pink via-form-purple to-form-blue flex flex-col px-8 py-4 rounded-lg mx-auto gap-3">
                <div className="grid grid-cols-[85%_15%]">
                    <h1 className="text-3xl text-text font-bold text-left">
                        {post.title}
                    </h1>
                    <button className="bg-button px-2 py-1 text-white rounded-full float-right hover:bg-button-hover" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
                <p className="text-1xl text-text text-center bg-blue-100 px-4 py-1 w-3/12 rounded-full">
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