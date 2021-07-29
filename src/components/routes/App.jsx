import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/* pages */
import Index from '../../pages/index'
import Application from '../../pages/application'
import Product from '../../pages/products'
import Error from '../../pages/Error'
import Loader from '../loader/Loader' /* is not necesary */
import Business from '../../pages/Business'
import productInformation from '../../pages/productInformation'

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
                    <Route exact path="/business" component={Business}></Route>
                    <Route exact path="/product/information" component={productInformation}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;