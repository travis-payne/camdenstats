import { AmplifySignIn, AmplifyAuthenticator } from '@aws-amplify/ui-react'
import '../css/Auth.css';




const AuthComponent = (props) => {

  const handleStateChange = state => {
    if (state === 'signedin') {
      props.onUserSignIn();
      props.history.push('/')
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
