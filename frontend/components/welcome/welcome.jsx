import React from 'react';
import dc from '../../../env';

const Welcome = () => (
  <div className='welcome'>
    <div className='login'>
      <div className='login-text'>
        <h1>Patient Birthday Reminder</h1>
      </div>
      <div className='login-text'>
        <p>How awesome would it be to get a text or email from your doctor wishing you a Happy Birthday?
        drreminder is a birthday reminder system to tell patients it’s their birthday, e.g. Happy bday from Dr Smith!</p>
      </div>
      <div className='login-button'>
        <a href={`https://drchrono.com/o/authorize/?redirect_uri=${encodeURIComponent(dc.REDIRECT_URI)}&response_type=code&client_id=${dc.CLIENT_ID}&scope=${encodeURIComponent(dc.SCOPES)}`}>Login with drchrono</a>
      </div>
    </div>
    <div className='artwork'>
      <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1485379033/san_francisco_mi5gdq.png' />
    </div>
  </div>
);

export default Welcome;
