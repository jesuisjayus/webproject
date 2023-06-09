import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/Profile';
import Manage from './pages/Manage/Manage';
import Error from './pages/Error/Error';
import NewPost from './pages/NewPost/NewPost';
import NewPostDetail from './pages/NewPostDetail/NewPostDetail';
import AboutUs from './pages/AboutUs/AboutUs';
import Chat from './pages/Chat/Chat';
import { createContext, useState, useEffect } from 'react';

export const ThemeContext=createContext(null);


const Layout = () => {
  return(
    <div className="md:w-8/12 mx-auto">
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
      path: "/NewPostDetail",
      element: <NewPostDetail />,
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
  const [theme, setTheme]=useState("light")
  useEffect(() => {
    document.body.className = theme;
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
  return (

      <div className={`App ${theme}`}>
              <button onClick={ToggleTheme}>Toggle Theme</button>
      <RouterProvider router={router}></RouterProvider>
    </div>
 
  );
}



export default App;
