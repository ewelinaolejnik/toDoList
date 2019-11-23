import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './redux/reducers';

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
