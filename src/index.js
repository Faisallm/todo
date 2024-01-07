import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// root is where react injects our app in the html code.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
