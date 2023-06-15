import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout}  from "../../redux/userSlice";
import React, { useState, useContext } from "react";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeContext } from "../../App";
import '../../App.css';

const Navbar = () =>{
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [isLogoutIcon, setIsLogoutIcon] = useState(false);

  const handleLogout = () =>{
      dispatch(logout());
  }; 

  const handleMouseEnter = () => {
    setIsLogoutIcon(true);
  };

  const handleMouseLeave = () => {
    setIsLogoutIcon(false);
  };

  return (
      <div className="flex justify-between items-center mb-5">
      <div className="mx-auto md:mx-0">
        <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <img src="/logo.png" alt="Logo" width="40px" className="ml-8" />
        </Link>
      </div>
      <div className="col-span-2 flex justify-between items-center ml-4 -mr-20">
          <Link to="/home">
          <img src="/nom.png" alt="SkillConnect" width="150px"/>
          </Link>
      </div>
      <div className="col-span-3 px-0 md:px-6 mx-auto" style={{ position: 'relative' }}>
        <SearchIcon className="absolute m-2" />
        <input type="text" className={`bg-blue-100 rounded-full py-2 px-8 ${theme === "dark" ? "bg-blue-200" : "bg-blue-100"} ${theme === "dark" ? "text-white" : "text-black"}`} style={{ width: '180%', left: '2rem' }} placeholder="Search..." />
      </div>
      <div className="col-span-5 md:my-0 px-6 mx-auto flex-end">
        <div>
          <Link to="/">
            <button className="bg-red-button px-4 py-2 text-white rounded-full hover:bg-red-button-hover" onClick={handleLogout} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            {isLogoutIcon ? <LogoutIcon /> : <LoginIcon />}
            </button>

          </Link>
        </div>
      </div>
    </div>
      

    );

};

export default Navbar;