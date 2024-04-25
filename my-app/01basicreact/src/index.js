import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));   //React apna khud ka virtual DOM bna rha hai aur isko main DOM compare krk jo cheeze leni hogi wo lw lenge
root.render(
  <React.StrictMode>   
  {/* JSX file */}
    <App />   
  </React.StrictMode>
);
