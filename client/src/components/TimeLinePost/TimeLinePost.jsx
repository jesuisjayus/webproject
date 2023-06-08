import React, {useEffect, useState} from "react";
import axios from "axios";
import Post from "../Post/Post";
import { useSelector } from "react-redux";


const TimeLinePost = () => {
    const [timeLine, setTimeLine] = useState(null);
    const {currentUser} = useSelector((state) => state.user);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const timeLinePost = await axios.get(`/api/timeline/${currentUser.id}`);
                setTimeLine(timeLinePost.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [currentUser._id]);
    
    return (
        <div className="mt-6">
          {timeLine &&
            timeLine.map((post) => {
              return (
                <div key={post._id}>
                    <Post />
                </div>
              );
            })}
        </div>
      );
    
    
    
   
        
};  

export default TimeLinePost;
