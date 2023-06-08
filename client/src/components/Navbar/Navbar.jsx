import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout}  from "../../redux/userSlice";
const Navbar = () =>{
  const dispatch = useDispatch();

  const handleLogout = () =>{
      dispatch(logout());
    } 

  return (
    <div className="flex flex-wrap justify-between items-center my-5">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" width="40px" className="ml-8" />
        <h2 className="font-bold text-2xl ml-2">SkillConnect</h2>
      </div>
      <div className="w-full md:w-auto px-4 md:px-6 sm:my-4 mx-auto" style={{ position: 'relative'}}>
        <SearchIcon className="absolute m-2" />
        <input type="text" className="bg-blue-100 rounded-full py-2 px-8 w-full md:w-auto md:w-[170%] md:min-w-[10rem] md:left-2" placeholder="Search..."/>
      </div>
      <div className="w-full md:w-auto col-span-5 md:my-0 px-6 mx-auto md:flex md:justify-end" style={{ position: 'relative' }}>
        <div className="md:hidden">
          <Link to="/">
            <button className="bg-red-500 px-4 py-2 text-white rounded-full" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:w-auto col-span-5 md:my-0 px-6 mx-auto md:flex md:justify-end" style={{ position: 'relative' }}>
        <div>
          <Link to="/">
            <button className="bg-red-500 px-4 py-2 text-white rounded-full" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>

    );

};

export default Navbar;