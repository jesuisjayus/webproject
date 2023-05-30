import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/Profile';


const Layout = () => {
  return(
    <div>
      <h1>Navbar</h1>
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
