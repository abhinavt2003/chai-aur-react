import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// We are having a div with id = root in html there we are loading all this.
const root = ReactDOM.createRoot(document.getElementById('root'));   //React apna khud ka virtual DOM bna rha hai aur isko main DOM compare krk jo cheeze leni hogi wo lw lenge
root.render(              //render kro
  <React.StrictMode>   
  {/* JSX file */}
    <App />           //App ko render kro // React gives u power to render html files through js that is jsx file
  </React.StrictMode>
);
