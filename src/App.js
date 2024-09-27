import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import HeaderTwo from './components/HeaderTwo';
import Body from './components/Body';
import {Bannerr} from './utils/constants';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Error from './components/Error';
import About from './components/About';
import Restaurent_Menu from './components/Restaurent_Menu';


const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  )
}
const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
    {
      path:'/',
      element:<Body/>,
    },
    {
      path:'/profile',
      element: <Profile/>,
    },
    {
      path:'/contact',
      element:<Contact/>,
    },
    {
      path:'/about',
      element:<About/>,
    },
    {
      path:'/restaurent/:resId',
      element:<Restaurent_Menu />,
    },
  
  ],
    errorElement: <Error />,
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRoute}/>);
