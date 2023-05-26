import React from 'react';
import ReactDOM from 'react-dom/client';
import HeroesApp from './HeroesApp.jsx';
import './index.css';
//React-Router-Dom
import { BrowserRouter } from 'react-router-dom';
//Redux
import { store } from './app/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <HeroesApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
