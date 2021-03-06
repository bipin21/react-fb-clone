import React from 'react'
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
                console.log(result.user)
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="fb_logo.png" alt="" />
                {/* <img src="logo1.png" alt="" /> */}
            </div>

            <Button type="submit" onClick={signIn} >
                Sign In
            </Button>
        </div>
    )
}

export default Login
