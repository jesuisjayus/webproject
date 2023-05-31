import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import New from './pages/New/New';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar';


const Layout = () => {
  return(
    <div className="md:w-8/12 mx-auto">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );

};

const router = createBrowserRouter([
  {  
    path: "/",
    element: <Layout />,
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
        path: "/new",
        element: <New />,
      },
      {
        path: "/signout",
        element: <SignIn />,
    },
  ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
