import React from 'react';
//import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'

const store = createStore(Reducers, compose(applyMiddleware(thunk)))

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
   <React.StrictMode>
     <App />
    </React.StrictMode>
  </Provider>,
)

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );
