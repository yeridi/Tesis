import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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

/* darkmode */
import { Toggle } from '../toggle/Toggle'
import { GlobalStyle, lightTheme, darkTheme } from '../stylesGeneral/globalStyles'
import { useDarkMore } from '../stylesGeneral/useDarkMode'
import { ThemeProvider } from 'styled-components'

const App = () => {
    const [theme, toggleTheme] = useDarkMore();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <Toggle theme={theme} toggleTheme={toggleTheme}/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index}></Route>
                    <Route exact path="/application" component={Application}></Route>
                    <Route exact path="/product" component={Product}></Route>
                    <Route exact path="/load" component={Loader}></Route>
                    <Route exact path="/business" component={Companies}></Route>
                    <Route exact path="/product/information" component={productInfo}></Route>
                    <Route exact path="/chat" component={chat}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;