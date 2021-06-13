import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/* pages */
import Index from '../../pages/index'
import Application from '../../pages/application'
import Product from '../../pages/products'
import Error from '../../pages/Error'
import Loader from '../loader/Loader'

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}></Route>
                <Route exact path="/application" component={Application}></Route>
                <Route exact path="/product" component={Product}></Route>
                <Route exact path="/load" component={Loader}></Route>
                <Route component={Error}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;