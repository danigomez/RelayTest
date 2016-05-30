import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import MainRoutes from '../shared/Main/routes/routes.jsx'
import configureStore from '../shared/Main/store/configureStore'


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={MainRoutes} />
    </Provider>,
    document.getElementById('root')
);
