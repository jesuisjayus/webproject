import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/Profile';
import Manage from './pages/Manage/Manage';
import Error from './pages/Error/Error';
import NewPost from './pages/NewPost/NewPost';
import PostDetail from './pages/PostDetail/PostDetail';
import AboutUs from './pages/AboutUs/AboutUs';
import Chat from './pages/Chat/Chat';
import { createContext, useState, useEffect,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
export const ThemeContext=createContext(null);


const Layout = () => {
  const theme = useContext(ThemeContext);

  const formStyles = {
    background: theme === 'light' ? '#ffffff' : '#000000',
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  if (theme === 'dark') {
    formStyles['filter'] = 'saturate(50%) brightness(70%)';
  }

  return (
    <div className="md:w-8/12 mx-auto" >
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {  
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/manage/:id",
        element: <Manage />,
      },
      {
        path: "/signout",
        element: <SignIn />,
      },
     {
      path: "/NewPost",
      element: <NewPost />,
     },
     {
      path: "/PostDetail/:id",
      element: <PostDetail />,
     },
     {
      path: "/AboutUs",
      element: <AboutUs />,
     },
     {
      path: "/Chat",
      element: <Chat />,
     },
  ],
},
]);

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
    useEffect(() => {
      localStorage.setItem('theme', theme);
    }, [theme]);
        
        const ToggleTheme=()=>{
        
           if (theme==='light')
          {
             setTheme('dark');

          }
          else{
             setTheme('light');
          };
      
        }
        
  

        const formStyles = {

          background: theme === 'light' ? '#ffffff' : '#000000',
          color: theme === 'light' ? '#000000' : '#ffffff',
          filter: theme === "dark" ? "saturate(50%) brightness(70%)" : "none",

        };


  return (

      <div className={`App ${theme}`}>
        
      <button className="theme-toggle" onClick={ToggleTheme}>
        <FontAwesomeIcon
          icon={theme === 'light' ? faSun : faMoon}
          size="2x"
          formStyles={formStyles}
        />
      </button>
      <ThemeContext.Provider value={theme}> 
        <RouterProvider router={router} formStyles={formStyles}></RouterProvider>
      </ThemeContext.Provider>
    </div>
 
  );
}



export default App;
