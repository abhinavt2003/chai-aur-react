import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setCounter]=useState(15)          //array return krta hai useState hook. [Phla index jisko set krna hai wo lega,dusra index krna kya hai wo lega]. Basically react jitni bhi values hoti hai document me sbko update kr deta rather than going to each and updating it. Thats why isko React khte hai because it reacts.
  //setCounter ka naam kuch bhi rkh skte hai
  // let counter=15
  const addValue= () =>{
    // counter=counter+1
    if(counter<20){
      setCounter(counter+1)  //Ab kaisi hui values?
      setCounter(counter+1) 
      setCounter(counter+1)  //Fibre saari values ko batches me bhejta hai, To sb kaam ka ek batch bn jaega aur saare milke ek hi counter ko increase krenge to at the end aisa nhi hai ki ki individually kaam kr rhe saare, they are working together and in one batch
      setCounter((prevCounter) => prevCounter+1)  //Ab maanlo bdhana hi hai to aise krna hai pdega setCounter ka hidden feature hai ye function le skta hai //This will give you prevCount //Callback k baad agr value aa rhi to ek batch complete hoke values aati hai thats why wo purani values hoti hai
      setCounter(prevCounter+1) 
      setCounter(prevCounter+1)   //Ab ye value hr jgh update ho jaegi, react apne se DOM analyse krega aur jha jha ye value hai wha update kr dega
    }
    else{
      alert("Counter exceeds 20")
    }
  }
  const removeValue= () =>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      alert("Negative values not allowed in counter")
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick= {addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
