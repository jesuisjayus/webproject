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
      <div>
      <div className="flex justify-between items-center mb-5">
      <div>
        <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <img src="/logo.png" alt="Logo" width="40px" className="ml-8" />
        </Link>
      </div>
      <div className="col-span-2 flex justify-between items-center ml-4 -mr-20">
          <Link to="/home">
          <img src="/nom.png" alt="SkillConnect" width="150px"/>
          </Link>
      </div>
      <div className="col-span-5 md:my-0 px-6 mx-auto ml-auto mr-5 flex-end">
        <div>
          <Link to="/">
            <button className="bg-red-button px-4 py-2 text-white rounded-full hover:bg-red-button-hover" onClick={handleLogout} onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <span className="ml-2 mr-2">Logout</span>
            {isLogoutIcon ? <LogoutIcon /> : <LoginIcon />}
            </button>
          </Link>
        </div>
      </div>
    </div>
    <hr style={{ backgroundColor: 'lightgrey', height: '2px', width: '100%', marginright: '5' }} />
    </div>

      

    );

};

export default Navbar;