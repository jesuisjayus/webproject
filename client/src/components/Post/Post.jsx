import React, {useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import { ThemeContext } from "../../App";

const Post = ({post, setData}) => {
    const [userData, setUserData] = useState();
    const theme = useContext(ThemeContext);

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
    let gradientColors1;
    if (theme === "light") {
      gradientColors1 = "from-form-pink via-form-purple to-form-blue";
    } else {
      gradientColors1 = "from-form-pink-dark via-form-purple-dark to-form-blue-dark";
    }

    return (
        <div class="md:shrink-0">
        {userData && ( 
            <>
            <form className={`bg-gradient-to-bl ${gradientColors1} flex flex-col px-8 py-4 rounded-lg mx-auto mb-3 gap-3`}>
                <div className="grid grid-cols-[98%_2%]">
                    <h1 className="text-3xl text-text font-bold text-left">
                        {post.title}
                    </h1>
                    <Link to={`/PostDetail/${post._id}`} state={post}>
                        <div className="bg-button px-2 py-1 text-white rounded-full float-right hover:bg-button-hover">
                            <AddIcon fontsize="large"/>
                        </div>
                    </Link>
                </div>
                <p className={`text-1xl text-center ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} px-4 rounded-full mr-auto`}>
                    {post.category}
                </p>
                
                <p className="text-2xl text-center text-left">
                    {post.text}
                </p>            
                <p className={`text-1xl text-center ${theme === "dark" ? "bg-sky-950" : "bg-blue-100"} px-4 rounded-full ml-auto`}>
                    {userData.userName}
                </p>
            </form>
        </>)}
        </div>
    );
 
};
export default Post;