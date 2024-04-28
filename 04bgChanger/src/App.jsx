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
            className="red outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "red"}}>
            Red
            </button>
            <button 
            onClick={() => setColor("green")} 
            className="green outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "green"}}>
            Green
            </button>
            <button 
            onClick={() => setColor("blue")} 
            className="blue outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "blue"}}>
            Blue
            </button>
            <button 
            onClick={() => setColor("yellow")} 
            className="yellow outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "yellow"}}>
            Yellow
            </button>
            <button 
            onClick={() => setColor("orange")} 
            className="orange outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "orange"}}>
            Orange
            </button>
            <button 
            onClick={() => setColor("brown")} 
            className="brown outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "brown"}}>
            Brown
            </button>
            <button 
            onClick={() => setColor("beige")} 
            className="beige outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "beige"}}>
            Beige
            </button>
            <button 
            onClick={() => setColor("pink")} 
            className="pink outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "pink"}}>
            Pink
            </button>
          </div>
        </div>
      </div>
  )
}

export default App