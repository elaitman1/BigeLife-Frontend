import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {responsiveStoreEnhancer} from 'redux-responsive'
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import './index.css'
import './components/App.css'

import App from './components/App';
import reducers from './reducers';

//
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
const store = createStore(
  reducers,
  compose(
    responsiveStoreEnhancer,
  composeEnhancers(applyMiddleware(reduxThunk))
)
)

ReactDOM.render(
  <Provider store={store} >
  <div className='around'>
    <App />
  </div>
  </Provider>,
  document.querySelector('#root')
);
