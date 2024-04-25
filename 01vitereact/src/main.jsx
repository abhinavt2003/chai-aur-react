import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'  
import {jsx as _jsx} from "react/jsx-runtime.js"     //Isko include krke hm evaluated expression k jgh apna jsx bhi de skte hai

import Chai from "./chai"

//Agr App.jsx koi method hai to hm check kr rhe the ki koi bhi method chlna chahie -> Likh skte hai
//Ab react at the end mere jitne elements hai unko tree struture bnati hai aur implement krti hai to ab mai apna element inject krke dekhunga
// function MyApp(){
//   return (
//     <div>Custom App!</div>
//   )
// }

// Mai apna element inject krna chahta hun
// Nhi chlega
// Kyunki maine saari properties apne mn se bna li hai lekin react ka rendering to defined hai
// const reactElement= {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children : 'Click me to visit Google'
// }

//Pr agr is trh se de rha hu to kaam kr rha hai
const anotherElement= (
    <a href="https:/>/google.com" target="_blank"> Visit Google</a>
)

const anotherUser= "chai aur react"

//Isilie hme ek aisa element dena hoga to react ka element ho aur uski rendering support krta ho jaise ki ye syntax
const reactElement= React.createElement(    //Babble inject krta hai
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google',                       //('attribute',{attribute set krna hai},children ,Evaluated expression)
    anotherElement  //Evaluated expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MyApp/> */}
    <App/>  
    {/* reactElement */}
  </React.StrictMode>,
)
