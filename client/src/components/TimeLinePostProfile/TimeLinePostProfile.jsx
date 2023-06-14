import React, {useEffect, useState} from "react";
import axios from "axios";
import PostProfile from "../PostProfile/PostProfile";
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
        <div className="mt-2">
          {timeLine &&
            timeLine.map((post) => {
              if(post.userId === currentUser._id){
                return (
                  <div key={post._id}>
                      <PostProfile post = {post} setData={setTimeLine} />
                  </div>
                );
              }
            })}
        </div>
      );
    
    
    
   
        
};  

export default TimeLinePostProfile;
