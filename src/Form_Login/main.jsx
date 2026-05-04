import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Ini adalah file utama (entry point) yang bertugas
// memasukkan (mount) komponen App ke dalam file HTML.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
