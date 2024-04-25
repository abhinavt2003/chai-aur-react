import Chai from "./chai"

function App() {
  const username= "Chai aur code"
  return (
    // fragments
    <>  
      <Chai/>
      <h1>Chai aur react {username}</h1>   
      {/* {treats as a variable}   {evaluated javascript}  {isme koi bhi javascript nhi likh skte hai}*/}
      <p>test para</p>
    </>
  )
}

export default App
