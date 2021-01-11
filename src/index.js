import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './Components/ReduxComponent/rootReducer'

function loggerMiddleware(store) {
  return function(next) {
    return function(action) {
      const result = next(action)
      console.log('LOG', store.getState());
      return result
    }
  }
}


const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, reduxThunk))

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        { app }
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
