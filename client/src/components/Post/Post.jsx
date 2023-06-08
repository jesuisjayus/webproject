import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Post = ({post, setData}) => {
    const {currentUser} = useSelector((state) => state.user);
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

    return (
        <div>
        {userData && ( 
            <>
            <form className="bg-form flex flex-col px-8 py-4 rounded-lg  mx-auto">
                <div className="grid grid-cols-[98%_2%]">
                    <h1 className="text-3xl text-text font-bold text-left">
                        {post.title}
                    </h1>
                    <Link to={`/PostDetail/${post._id}`} state={post}>
                        <button className="bg-red-500 px-2 py-1 text-white rounded-full float-right hover:bg-slate-200">
                            +
                        </button>
                    </Link>
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