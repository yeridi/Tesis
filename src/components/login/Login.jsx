import React, { useEffect } from 'react'

import { auth, provider } from '../../firebase'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { setUserLoginDetails, selectUserName, selectUserPhoto } from '../../features/user/userSlice'

/* style */
import './login.scss'

function Login() {

    const dispatch = useDispatch()
    const history = useHistory()

    const userName = useSelector(selectUserName)

    useEffect(()=>{
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user)
                history.push('/')
            }
        })   
    },[userName])

    const handleAuth = ()=>{
        if(!userName){
            auth
            .signInWithPopup(provider)
            .then((result)=>{
                setUser(result.user)
            })
            .catch((error)=>{
                alert(error.message)
            })
        }
    }

    const setUser = (user) =>{
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
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
                    <div class="login__advantages">
                        <p>If you are login in the App you can submit your product and enter to the comunity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
