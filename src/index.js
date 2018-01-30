import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

import configureStore from './store/configureStore';

import rootSaga from './sagas';

import RouterContainer from './containers/RouterContainer';

import './less/main.less';

const store = configureStore();
store.runSaga(rootSaga);
const history = createHashHistory();

render(
    <Provider
        store={store}
    >
        <Router
            history={history}
        >
            <RouterContainer />
        </Router>
    </Provider>,
    document.getElementById('react-root'),
);
