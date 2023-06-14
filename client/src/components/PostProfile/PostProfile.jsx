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
            <form className="bg-form flex flex-col px-8 py-4 rounded-lg mb-3 mx-auto">
                <div className="grid grid-cols-[85%_15%]">
                    <h1 className="text-3xl text-text font-bold text-left">
                        {post.title}
                    </h1>
                        <button className="bg-red-500 px-2 py-1 text-white rounded-full float-right hover:bg-slate-200" onClick={handleDelete}>
                            Delete
                        </button>
                </div>
                <p className="text-1xl text-text  text-left">
                    {post.category}
                </p>
                
                <p className="text-1xl text-center  text-left">
                    {post.text}
                </p>            
                <p className="text-1xl text-center  text-right">
                    {userData.userName}
                </p>
               

            </form>
        </>)}
        </div>
    );
};
export default Post;