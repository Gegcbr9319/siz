import React from 'react';
import ReactDOM from 'react-dom/client'
import { App } from './components/index';
import { Provider } from 'react-redux';
import { store } from './assets/redux/store';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
)
