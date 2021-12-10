import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router';
import { auth, provider } from '../../firebase'

import { loginUser } from '../../services/login';

import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail, selectGoogleId } from '../../features/user/userSlice';
import { setCompanyDetails } from '../../features/company/companySlice';
/* style */
import './login.scss'

function Login() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [id, setId] = useState(() => {
        return window.localStorage.getItem('id');
    })

    const email = useSelector(selectUserEmail)
    const googleId = useSelector(selectGoogleId)
    const [security, setSecurity] = useState(null)

    const handleAuth = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error))
        setSecurity(true)
        //history.push('/')
    };

    const handleContinue = async () => {
        const response = await loginUser({ email, googleId });
        console.log(response)
        dispatch(setCompanyDetails(response))
        window.localStorage.setItem('id', response.data.user._id)
        window.localStorage.setItem('hasEnterprise', response.data.hasEnterprise)
        history.push('/')
    }



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
                    {
                        security &&
                        <button onClick={handleContinue}>Continuar</button>
                    }
                    <div class="login__advantages">
                        <p>If you are login in the App you can submit your product and enter to the comunity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
