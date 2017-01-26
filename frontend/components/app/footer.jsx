import React from 'react';

const Footer = () => (
  <div className='footer'>
    <div className='footer-logo'>
      <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1485375457/drchrono_logo_white_tan7je.png' />
      <div id='copyright'>
        Demo application.
      </div>
      <div id='copyright'>
        &copy; Copyright 2017 Zhe Wang.
      </div>
    </div>
    <div className='about'>
      drreminder is a patient birthday reminder application for drchrono's providers.
      drreminder uses Django and PostgreSQL for providing database queries and React/Redux for the views.
      OAuth 2.0 is used to authenticate data access between the provider and the application.
    </div>
    <div className='about-links'>
      <div>
        <div>Links</div>
        <ul id='about-links'>
          <li><a href='https://github.com/jz-wang'>Github</a></li>
          <li><a href='https://www.linkedin.com/in/zhe-wang-b282b4127/'>LinkedIn</a></li>
          <li><a href='http://www.jayzhewang.com/'>Portfolio</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
