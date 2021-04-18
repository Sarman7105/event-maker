import React,{useContext,useState} from 'react';
import './Login.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';



const Login = () => {

    const [user, setUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
    }
    
    const setInfo = (data) => {
        console.log(data.displayName)
		const newUser = { ...user };
		newUser.name = data.displayName;
		newUser.email = data.email;
		newUser.isValidUser = true;
		setUser(newUser);
	}

    //Google SignIn
    const handleGoogleLogin = (event) => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				var credential = result.credential;
				var token = credential.accessToken;
				
				const userInfo = result.user;
				console.log('success');
                setInfo(userInfo);
                history.replace(from);
                // storeAuthToken();
			})
		.catch((error) => {
				var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorMessage);
				
			});
		event.preventDefault();
    };
    
//     const storeAuthToken = () => {
//     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
//       .then(function (idToken) {
//         sessionStorage.setItem('token', idToken);
//         history.replace(from);
//       }).catch(function (error) {
//         // Handle error
//       });
//   }


    return (
        <div>
            
            <div className="d-flex justify-content-center align-items-center">
                <h3>welcome { user.name}</h3>
                <div className="col-md-4 mt-5">
                    <div className="d-flex align-items-center justify-content-center">
                        <img className="logo" src="https://i.ibb.co/DkC1BtF/event-Management-Icon.png" alt="event-Management-Icon" border="0"></img>
                        <h3>Event maker</h3>
                    </div>
                    <h5 className="mt-5">Login with</h5>
                    <button className="login mt-2" onClick={handleGoogleLogin}>
                        <img className="login-image" src="https://i.ibb.co/TgdQSf5/Group-573.png" alt="Group-573" border="0"></img>
                        Continue With Google
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;