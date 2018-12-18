import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

ReactDOM.render(
  <Provider store={store}>
   <App />
 </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
