import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")
  return (
     <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl"> 
            <button 
            onClick={() => setColor("red")}   //Onclick ko function hi chahie function ka return value nhi chahie, To hm onClick function me setColor("red") ka function return kr rhe hai
            className="red outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}>
            </button>
            <button 
            onClick={() => setColor("green")} 
            className="green outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}>
            </button>
            <button 
            onClick={() => setColor("blue")} 
            className="blue outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}>
            </button>
            <button 
            onClick={() => setColor("yellow")} 
            className="yellow outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "yellow"}}>
            </button>
          </div>
        </div>
      </div>
  )
}

export default App
