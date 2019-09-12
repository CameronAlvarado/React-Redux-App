import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import {reducer} from "./reducers"

import "./App.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const spaceXState = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  

ReactDOM.render(
    <Provider store={spaceXState}>
        <App />
    </Provider>, document.getElementById('root'));
