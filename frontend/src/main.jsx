import React from 'react'

import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './components/services/store.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
console.log('rensersuccess')