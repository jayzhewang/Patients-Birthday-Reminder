import React from 'react';
import Welcome from '../welcome/welcome';
import Navbar from './navbar';
import Footer from './footer';

const App = ({children}) => (
  <div className='app'>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default App;
