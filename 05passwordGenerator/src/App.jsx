import { useState,useCallback,useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]= useState(false)
  const [charAllowed,setCharAllowed]= useState(true)
  const [password,setPassword]= useState("")

  //useRef hook
  //Jb kisi ka reference lena ho
  const passwordRef= useRef(null)

  const passwordGenerator= useCallback(()=> {
    let pass= ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+="@!$%^&*()~|?><{}_+="

    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()* str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length,numberAllowed,charAllowed,setPassword]) //Setpassword de bhi skte ho nhi bhi optimisation k lie diya gya h
  //Usecallback sirf run krne k lie nhi hai memoise bhi krta hai jo run ho jata hai usko ye cache memory m rkhta hai
  //useCallback me hm wo dependancy dete hai jinhe hme optimise krna hai
  //useEffect me hm wo dependancy dete hai jinke chhed chaad se values change ho jaa rhi hai

  const copyPasswordToClipboard= useCallback(() => {
    passwordRef.current?.select()  //Effect dene k lie user ko acche se dikhe UI uske lie reference lie hai passwordRef variable se useRef ka use krk
    passwordRef.current?.setSelectionRange(0,20);  //hr baar 3 se jyada values nhi chahie
    window.navigator.clipboard.writeText(password)
  },[password])

  // passwordGenerator() //Ab hm aise call nhi kr skte hai kyunki hmne useCallback lgaya hai
  //Ab function call krne ke lie ek aur hook ko study krna pdega ----> useEffect
  //useEffect is a React Hook that lets you synchronize a component with an external system.
  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  //useCallback is a React Hook that lets you cache a function definition between re-renders.
  //const cachedFn = useCallback(fn, dependencies)
  // dependancies -> numbers,characters (arrays in which you have to pass dependency values)
  // const cachedFn = useCallback(fn, dependencies)
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700  text-orange-500' >
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
            <input
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passwordRef} //Ye line no 13 se baat kr rha hai
            />
            <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
              Copy
            </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={()=>{
                    setNumberAllowed((prev)=>!prev)
                }}
              />
              <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={()=>{
                    setCharAllowed((prev)=>!prev) //Interview question wla concept hai values ko function me pass krane pr hi true false hoga nhi to hmesa true hi rhega question me btaya gya tha batches me implementation hota hai udhr dekho,udhr btaya tha ki aise case me callback fire krte hai jisse prev value ka access milta hai aur fir ab change krne pr values change hongi
                }}
              />
              <label htmlFor='CharacterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
