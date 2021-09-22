import React from 'react';
import { AmplifySignIn, AmplifyAuthenticator,AmplifySignOut } from '@aws-amplify/ui-react'
import '../css/Auth.css';




const AuthComponent = (props) => {
  const handleStateChange = state => {
    if (state === 'signedin') {
      props.onUserSignIn();
    }
    else {
      props.onUserSignOut();

    }
  };

  
  return (
    <AmplifyAuthenticator handleAuthStateChange={handleStateChange} >
      <AmplifySignIn 
      slot="sign-in" 
      hideSignUp={true}
      headerText="Camden Capybaras Stats"
      ></AmplifySignIn>
    </AmplifyAuthenticator>
  );

}




export default AuthComponent;
