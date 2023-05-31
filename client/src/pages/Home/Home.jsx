import React from "react";
import Leftbar from "../../components/Leftbar/Leftbar";

const Home = () => {
    return (
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div><Leftbar /></div>
                <div className="col-span-3 border-x-2 border-t-slate-800 px-6">
                    <p>Annonce</p>
                </div>
            </div>
        );
};

export default Home;