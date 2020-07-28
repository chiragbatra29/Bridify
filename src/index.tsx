import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
             <App/>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
