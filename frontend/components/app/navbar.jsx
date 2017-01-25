import React from 'react';

const Navbar = () => (
  <div className='nav-bar'>
    <div className='logo'>
      <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1485322744/dr_reminder_bq5pkw.png' />
    </div>
    <div className='links'>
      <ul id='links'>
        <li>About</li>
        <li>drchrono</li>
        <div className='signup-button'>
          <div><a href='https://www.drchrono.com/sign-up/'>Sign Up for Free</a></div>
        </div>
      </ul>
    </div>
  </div>
);

export default Navbar;
