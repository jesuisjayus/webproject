import React, {useEffect, useState} from "react";
import axios from "axios";
import Post from "../Post/Post";
import { useSelector } from "react-redux";


const TimeLinePostProfile = () => {
    const [timeLine, setTimeLine] = useState(null);
    const {currentUser} = useSelector((state) => state.user);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const TimeLinePostProfile = await axios.get(`http://localhost:8000/api/posts/timeline`);
                setTimeLine(TimeLinePostProfile.data);
                console.log(TimeLinePostProfile.data);
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
              if(post.userId === currentUser._id){
                return (
                  <div key={post._id} className="p-5">
                      <Post post = {post} setData={setTimeLine} />
                  </div>
                );
              }
            })}
        </div>
      );
    
    
    
   
        
};  

export default TimeLinePostProfile;
