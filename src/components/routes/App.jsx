import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router'

/* pages */
import Index from '../../pages/index'
import Application from '../../pages/application'
import Product from '../../pages/products'
import Error from '../../pages/Error'
import Loader from '../loader/Loader' /* is not necesary */
import Companies from '../../pages/Companies'
import productInfo from '../../pages/productInfo'
import chat from '../../pages/chat'
import Login from '../../components/login/Login'
import CompyInfo from '../../pages/CompyInfo'
import RegisterProd from '../../pages/RegisterProd'

/* darkmode */
import { Toggle } from '../toggle/Toggle'
import { GlobalStyle, lightTheme, darkTheme } from '../stylesGeneral/globalStyles'
import { useDarkMore } from '../stylesGeneral/useDarkMode'
import { ThemeProvider } from 'styled-components'
import UserType from '../modalUser/UserType'
/* redux */
import { selectUserName, setUserLoginDetails } from '../../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { auth } from '../../firebase'


const App = () => {

    /* login */
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(selectUserName)
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(setUserLoginDetails({
                    name: authUser.displayName,
                    email: authUser.email,
                    photo: authUser.photoURL,
                    type: ""
                }));
            } else {
                //the user dont exist
            }
        })
    }, [user])


    const [theme, toggleTheme] = useDarkMore();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index}></Route>
                    <Route exact path="/application" component={Application}></Route>
                    <Route exact path="/product" component={Product}></Route>
                    <Route exact path="/load" component={Loader}></Route>
                    <Route exact path="/business" component={Companies}></Route>
                    <Route exact path="/business/go" component={CompyInfo}></Route>
                    <Route exact path="/product/information" component={productInfo}></Route>
                    <Route exact path="/chat" component={chat}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/selectuser" component={UserType}></Route>
                    <Route exact path="/producto/nuevo" component={RegisterProd}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;