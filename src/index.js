import Reatc from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './app/store'
/* page */
/* import Index from './pages/index'
import Application from './pages/application'
import Product from './pages/products' */

/* router */

import App from './components/routes/App'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);