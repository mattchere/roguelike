import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';

// let store = createStore(todoApp, window.STATE_FROM_SERVER)

ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
