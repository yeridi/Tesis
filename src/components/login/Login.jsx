import React from 'react'
/* style */
import './login.scss'

function Login() {
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
                    <button><i class="fab fa-google"></i>Google</button>
                    <div class="login__advantages">
                        <p>If you are login in the App you can submit your product and enter to the comunity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
