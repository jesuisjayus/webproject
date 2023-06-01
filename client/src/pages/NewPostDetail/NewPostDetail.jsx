import React from "react";
import Leftbar from "../../components/NewPostLeftbar/NewPostLeftbar";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const NewPostDetail = () => {
    
    return (
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="px-6">
                    <Leftbar />
                </div>
                <div className="col-span-3 border-t-slate-800 px-6">
                <h1 className="text-3xl font-bold mb-4">Detailed Post</h1>
                <br />
                <div>
                </div>
                </div>

            </div>
        );
};

        

export default NewPostDetail;