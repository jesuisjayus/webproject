import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <div className="flex justify-between items-center my-5">
        <div className="mx-auto md:mx-0">
          <img src="/logo.png" alt="Logo" width="40px" className="ml-8" />
        </div>
        <div className="col-span-2">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl">SkillConnect</h2>
          </div>
        </div>
        <div className="col-span-3 md:border-x-2 md:border-slate-200 px-0 md:px-6 mx-auto" style={{ position: 'relative' }}>
          <SearchIcon className="absolute m-2" />
          <input type="text" className="bg-blue-100 rounded-full py-2 px-8" style={{ width: '170%', left: '2rem' }} placeholder="Search..." />
        </div>
        <div className="col-span-5 md:border-x-2 md:border-slate-200 md:my-0 px-6 mx-auto flex-end" style={{ position: 'relative' }}>
          <div>
            <Link to="/">
              <button className="bg-red-500 px-4 py-2 text-white rounded-full">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
      

    );

};

export default Navbar;