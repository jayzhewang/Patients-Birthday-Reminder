import React from 'react';

const Welcome = () => {
  window.console.log(process.env);
  return(
    <div className='welcome'>
      <div className='login'>
        <div>
          <h1>Patient Birthday Reminder</h1>
        </div>
        <div>
          <p>How awesome would it be to get an email from your doctor wishing you a Happy Birthday?
            drreminder is a birthday reminder system to tell patients it’s their birthday, e.g. Happy Birthday from Dr. Smith!</p>
        </div>
        <div>
          <div className='login-button'>
            <a href={`https://drchrono.com/o/authorize/?redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}&response_type=code&client_id=${process.env.CLIENT_ID}&scope=${encodeURIComponent(process.env.SCOPES)}`}>Login with drchrono</a>
          </div>
        </div>
        <div>
          <div id='footnote'>
            <p>
              Logins required. Sign up for free. drreminder requires patient's basic information (e.g. name, birthday) in order to send out birthday emails.
            </p>
          </div>
        </div>
      </div>
      <div className='artwork'>
        <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1485379033/san_francisco_mi5gdq.png' />
      </div>
    </div>
  );
};

export default Welcome;
