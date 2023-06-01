import React from "react";
import Leftbar from "../../components/NewPostLeftbar/NewPostLeftbar";
const NewPost = () => {
    return (
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="px-6">
                    <Leftbar />
                </div>
            <div>
                New Post
            </div>
            </div>
        );
};

export default NewPost;