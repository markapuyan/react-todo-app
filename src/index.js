import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware  from 'redux-saga'
import thunk from 'redux-thunk'
import todoListReducer from './store/reducers/todoList'
import todoListItemReducer from './store/reducers/todoListItem'
import history from './store/history'
import { watchTodoList, watchTodoListItem } from './store/sagas/index'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    todoList: todoListReducer,
    todoListItem: todoListItemReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(watchTodoList)
sagaMiddleware.run(watchTodoListItem)
const app = (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
