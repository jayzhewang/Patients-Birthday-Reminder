import React from 'react';
import dc from '../../../env';

const Welcome = () => (
  <div className='welcome'>
    <div className='login-in'>
      Welcome to drchrono's app!!!!
      <a href={`https://drchrono.com/o/authorize/?redirect_uri=${encodeURIComponent(dc.REDIRECT_URI)}&response_type=code&client_id=${dc.CLIENT_ID}&scope=${encodeURIComponent(dc.SCOPES)}`}>drchrono oauth</a>
    </div>
    <div className='artwork'>
      <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1485379033/san_francisco_mi5gdq.png' />
    </div>
  </div>
);

export default Welcome;
