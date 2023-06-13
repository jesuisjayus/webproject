import React, {useEffect, useState} from "react";
import axios from "axios";
import Post from "../Post/Post";
import { useSelector } from "react-redux";


const TimeLinePost = () => {
    const [timeLine, setTimeLine] = useState(null);
    const {currentUser} = useSelector((state) => state.user);
    const [category, setCategory] = useState("");

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
        <div className="mt-6">
          <div className="p-5">
              <select className="bg-blue-100 px-4 py-2 rounded-full"onChange={(e) => setCategory(e.target.value)}>
              <option value="">Choix de la catégorie</option>
              <option value="musique">Musique</option>
              <option value="art">Art</option>
              <option value="moncul">MonCul</option>
              </select>                       
          </div>
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

export default TimeLinePost;
