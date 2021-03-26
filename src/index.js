import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';
import Todo from './Todo';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'

import {createStore} from "redux";
import counterReducer from "./reducers/counterReducer";
import userReducer from "./reducers/userReducer";
import todoReducer from "./reducers/todoReducer";

// const store = createStore(counterReducer)
const store = createStore(todoReducer)

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
