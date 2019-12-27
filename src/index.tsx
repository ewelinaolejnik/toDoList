import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './redux/reducers';
import { watchToDoList } from './redux/sagas';
import { addToDoValidationMiddleware } from './middleware/toDoListMiddleware';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(addToDoValidationMiddleware, sagaMiddleware)));

sagaMiddleware.run(watchToDoList);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
