import React from 'react';
import dc from '../../env';

const App = ({children}) => (
  <div>
    Welcome to drchrono's app!!!!
    <a href={`https://drchrono.com/o/authorize/?redirect_uri=${encodeURIComponent(dc.REDIRECT_URI)}&response_type=code&client_id=${dc.CLIENT_ID}&scope=${encodeURIComponent(dc.SCOPES)}`}>drchrono oauth</a>
    store has been added
  </div>
);

export default App;
