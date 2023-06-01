import React from "react";
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () =>{
    return (
        <div  className = "grid grid-col-1 md:grid-cols-4 my-5 justify-center">
            <div className= "mx-auto md:mx-0">
                <img src = "/logo.png" alt = "Logo" width = {"40px"} className="ml-8"></img>
            </div>
            <div className="col-span-2 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0">
                <div className= "flex justify-between item-center">
                    <h2 className="font-bold text-2xl">SkillConnect</h2>
                </div>
            </div>


            <div className="px-0 md:px-6 mx-auto" style={{ position: 'relative' }}>
                <SearchIcon className="absolute m-2" />
                <input type="text" className="bg-blue-100 rounded-full py-2 px-8" style={{ left: '2rem' }} placeholder="Search..." />
            </div>

        </div>

    );

};

export default Navbar;