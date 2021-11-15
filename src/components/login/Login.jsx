import React from 'react'

import { useHistory } from 'react-router';
import { auth, provider } from '../../firebase'

/* style */
import './login.scss'

function Login() {


    const history = useHistory();

    const handleAuth = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
        history.push('/selectuser')
    };
    return (

        <div class="login">
            <div class="login__container">
                <div class="login__leftSection">
                    <div class="logo">
                        <h3>Go App</h3>
                    </div>
                    <div class="login__text">
                        <h2>Wait a moment !!!!</h2>
                        <p>Sign in to continue</p>
                    </div>

                </div>

                <div class="login__rightSection">
                    <h3>Sign In</h3>
                    <button onClick={handleAuth}><i class="fab fa-google"></i>Google</button>
                    <div class="login__advantages">
                        <p>If you are login in the App you can submit your product and enter to the comunity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
