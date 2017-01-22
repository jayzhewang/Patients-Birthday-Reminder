import React from 'react';

const App = ({children}) => (
  <div>
    Welcome to drchrono's app!!!!
    <a href='https://drchrono.com/o/authorize/?redirect_uri=REDIRECT_URI_ENCODED&response_type=code&client_id=CLIENT_ID_ENCODED&scope=SCOPES_ENCODED'>drchrono oauth</a>
    {children}
  </div>
);

export default App;
