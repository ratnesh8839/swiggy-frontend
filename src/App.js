import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import HeaderTwo from './components/HeaderTwo';
import Body from './components/Body';
import { Bannerr } from './utils/constants';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Error from './components/Error';
import About from './components/About';
import Restaurent_Menu from './components/Restaurent_Menu';
// import GroceryItem from './components/GroceryItem';
import { lazy, Suspense } from 'react';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
const GroceryItem = lazy(() => import('./components/GroceryItem'));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    // Api call to fetch userName and Password
    const data = {
      name: "Ratnesh",
    }
    setUserName(data.name);
  }, [])
  return (
    // outside of this the value of loggedInUser will be Default User
    <UserContext.Provider value={{ loggedInUser: userName ,setUserName}}>
      <div className='app'>
        {/* inside this in all the loggedInUser will be Ratnesh */}
            <UserContext.Provider value={{ loggedInUser: "Ratnesh Shrivastava" }}>
              {/* But inside this the loggedInUser value will be Ratnesh Shrivastava */}
                <Header />
            </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  )
}
const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/grocery',
        element: (<Suspense fallback={<Shimmer />}><GroceryItem /></Suspense>),
      },
      {
        path: '/restaurent/:resId',
        element: <Restaurent_Menu />,
      },

    ],
    errorElement: <Error />,
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRoute} />);
