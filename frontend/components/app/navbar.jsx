import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <div className='nav-bar'>
    <div className='nav-container'>
      <Link to='/' className='logo'>
        <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1485322744/dr_reminder_bq5pkw.png' />
      </Link>
      <div className='links'>
        <ul id='links'>
          <li>About</li>
          <li><a id='a' href='https://www.drchrono.com/'>drchrono</a></li>
          <div className='signup-button'>
            <div><a id='a' href='https://www.drchrono.com/sign-up/'>Sign Up for Free</a></div>
          </div>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
