import React, { useState } from 'react'
import Routes from './Components/Routes.js';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {

  const [authState, setAuthState] = useState(false);

  const handleUserSignIn = () => {
    setAuthState(true);
  };
  const handleUserSignOut = () => {
    setAuthState(false);
  };

  const childProps = {
    isLoggedIn: authState,
    onUserSignIn: handleUserSignIn,
    onUserSignOut: handleUserSignOut
  };


  return (     
      <div className="App">
      <h2 className="text-center">Camden Capybaras Stats Site</h2>
        <Navigation childProps={childProps} />
        <Routes childProps={childProps} />
      </div>
  )

}
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;