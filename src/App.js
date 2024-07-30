import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import HeaderTwo from './components/HeaderTwo';
import Body from './components/Body';
import {Bannerr} from './utils/constants';


const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <HeaderTwo images={Bannerr} />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
