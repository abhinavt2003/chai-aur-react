# chai-aur-react

# 1 Lecture 1: 

1. Props is properties in JS i.e. key-value pair.
2. Library is cool dude and framework is military.
3. React makes a single page application(SPA) i.e. page never reloads. So we need new url everytime so here comes router /login, /signup , /about . React router is not the functionality of React. We have to install another package. There is a different library for this. 
4. Add ons of React
    Routers in React
    State Management  -  Redux, Zustand , context API
5. Class based components - Legacy code
6. BAAS Apps - Backend as a Service - AppWrite, FireBase, Superbase

8. Limitations of ReactJS
    ReactJs codes generated is not good according to SEO perspective
    React does all the HTML, CSS and JS work in browser so it makes it slow
    Not have by default routing option 
7. So we are having frameworks over React. After React i.e. NextJS, GatsBy, Remix
   NextJS allows u to write backend and frontend in one place.

# 2 Creating small projects 

1. When we are working on Web dev we work on React+ React-DOM and if we are working on Mobile development then we works on React+ React-Native
2. We can use create react app or Vite or Parcel for creating React utility.Create react app is a heavy utility.
3. We are having two filse in source that is app.js and index.js, app.js is used to return the jsx file that u r doing operation on and index file is used to render the routes.

# 3 React flow and Structure

1. React is called SPA because it have a single html file means single page and all work will be done on it.
2. React creates its own DOM rather than the main DOM and then it compares the changes and implement it. Done by diffing algorithm , study later.
3. React gives u power to render html files through js that is jsx file
4. We are rendering <App/> on index.js that is a jsx file. App.js is returning a html and index.js will render it. So we are able to write html file thru javascript. So we are now having programming capabilities in HTML. It will help in coplex UIs.
5. We have not load javascript in html file so how does index.js got loaded.?
6. So basically react_scripts in package.json is responsible for loading index.js file. Behind the scenes it goes and loads the index.js file in index.html.
7. In Vite project we have directly loaded the js file in html thru scripts tag.
8. Then we created a custom Chai.js in 01vitereact/src and imported it in App.js. We are just testing that we can send any jsx response to main.jsx.
9. So if u are creating a react component thru Vite like chai.jsx try to name it as jsx only. And write the components name starting with capital letters coz vite is a framework, so its military while create-react-app is cool dude.
10. import Chai.jsx in App.jsx and return <Chai/> and import Chai in main.jsx and render <App>.
11. You can return a single jsx in every file. For this you have to use fragments(<> </>).
12. Same chai thing we will are trying to do in create-react-app 
13. IMPORTANT<--Jb aap components bna rhe hai ya jo Chai maine bnaya ya jo mai Chai export kr rha ye component hi hai, To chahe hm Vite p kaam
    kr rhe ya create-react-app p ye jo function hai uska naam capital me rkho, acchi practice ye bhi hai ki file ka naam bhi capital me hi rkho-->
    Vite hme force krti hai ki file ka naam jsx rkhiye kyunki agr wha jsx(js+html) return ho rha hai
    Actually hm create app me bhi agr jsx return ho rha hai to file ka naam .jsx hi rkh lete hai.
14. To actually me hmare pass bs ek root page , user ko sirf page hi dikhta hai pr hm usme jsx inject krte jaate hai aur jo bhi user ko dekhna hai wo dikhate rhte hai. Bs inject krna aur nikalne ka khel hai.

# 4 Create our own React library and JSX- Custom React

1. We will try to our own React library which will try to render a <a> tag. But in react we were giving in some function so we will create a reactElement and then return it.
2. React tried to create a tree but how does it sees all elements so first comes "type":'a' tag, second is "props"
const reactElement= {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'Click me to visit Google'
}
We are creating our library with these properties.
3. Now we want to render or insert some jsx into it. I will create my customRender

function customRender(reactElement,container){

    //Phla approach jha hm ek ek element set kr rhe hai
    /*
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement);
    */

    //Dusra approach
    //Jb hme ek se jyada element insert krana hai
    //Yha hm loop lgake DOM elements ko le liya tha 
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    for(const prop in reactElement.props){
        if(prop ===  'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement);
}

4. So basically React me bhi yhi hota hai wha pr bhi reactElement defined hai jisme apn apna element eject kra rhe hai index.html me
5. Now in Vite we will try to verify our facts. So basically App is a function which is return jsx to main.jsx and it is just rendering the App.js return value. So now we will create a customApp MyApp() and will return a html file and now will see if its working.
6. So if MyApp is a function so how is <MyApp/> is being rendered by main.jsx so Every React uses a bundler like Bable , Veed, so basically the return value in understandable format.
7. So this syntax
function Chai(){
    return (
        <h2>chai aur react |</h2>
    )
} 
is converted into understandable tree format like this 
const reactElement= {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'Click me to visit Google'
}    to make a proper DOM. by parsing.
So we can run <MyApp/> as MyApp() also.
We dont have to write this for sake of optimisation and coding convention but under the hood this is function only.
8. When we have to write variables of JS we will write it in {Iske andr}
   <h1>Chai aur react {username}</h1>  $ nhi lga rhe hai dhyan dena. Evaluated expression bolte hai isko. Iska mtlb we cant write {if(true){}}. It should be an evaluated expression.

# 5 Hooks and projects
 
1. We will design a counter project, in which u will have a up counter and a down counter.
2. We will create a scenario at which we will learn actually why we needed hooks.
3. We have defined a addCounter and removeCounter function to increase decrease counter. 
4. So we explicitely insert {counter} in Add Counter button and Remove counter button then it will automatically update counter in all buttons.
5. So thats the usecase of React basically it reacts. It manages the UI part and rest variables part is managed by us.
6. For doing this thing in proper JS you have to use document.getElementById(button) and update it everytime but since we are using React it can be done easily. 
7. So basically React gives us certain methods by which data will change, we call it hooks.
8. useState hook
   function App(){
       let [counter,setCounter]=useState(15)        //setCounter is a function 
       const addValue= ()=>{

       }
       const removeValue=() =>{

       }
       return( 
       <>
        <!-- <h1>Chai aur React</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick= {addValue}>Add value {counter}</button>
        <br/>
        <button onClick={removeValue}>Remove value {counter}</button>
        <p>footer: {counter}</p> -->
       </>
       )
   }

# 6 - Virtual DOM, Fibres and Reconciliation

1. Ab react me Virtual DOM use nhi hota hai.
2. createRoot method k baare me pdhna hai
3. createRoot ek apna virtual DOM bnata hai aur sirf unhi cheezo ko update krta hai jo UI me change hui hai. But our browser deletes the whole DOM and repaints the DOM i.e. Page Reload.
4. React fibre Architecture
   --> React Fibre is an implementation of Reacts core algorithm
   --> React hr cheez ko fatafat update krta tha isse React k animations, layout aur gestures me dikkat aati hai. Maan lo React DOM bna rha tha tbhi network se ek req aayi do aayi teen aayi to React ek ek krke saare updates krega usse accha hai ki ek last hi third update kr de usse direct ek baar me DOM update ho jayega. Whi concept yha pdhna hai.
   --> Hydration is something when ur web layout is ready and u are button is ready but it will not be clicked because JS is not ready yet. This concept is called Hydration.
   --> Reconciliation is React algorithm which considers elements that is to be updated. It is used to diff one tree with another to determine which parameter to be changed. EK browser wla tree dusra React ka createRoot ka tree.
   --> Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM".
   --> Diffing of lists is performed using keys. Keys should be "stable,predictable,and unique". Ask in interviews why u use keys while rendering .
   --> What is Fiber?
       We are about to start the heart of React Fibre architecture.
       Fibre can do-
       Pause work and come back to it later
       assign priority to different types of work
       reuse previosly completed work
       abort work if its no longer needed.

# 7 - Tailwind CSS and Props

1. Props makes the components reusable.
2. We are making an component of card and imported it in App.js through <Card/> , if we call this card multiple times it will again create cards. But we want different properties for the cards. So here comes the props in the picture.
3. Props k andr objects milte hai console log kroge to starting me objects empty honge.
4. I can create objects in <Card/> and can send them to Card and my props will include that object.
5. Basically I can pass values from one components to another through and the another component have the access to passed values as props. Like this 
function Card(props){
    return (
        <>
        </>
    )
}
6. So if we passed an username props from App.jsx to Card.jsx then username must be in Card and use it as props.username in Card.
7. You can also destructure like a JS then u dont need to write props.username everytime.
function Card({username}){
    return(
        <>
            <h1 className=" ">{username}</h1>
        </>
    )
}
8. function Card({username, btnText=""}){
    return (
        <></>
    )
}
It may be possible that App.jsx has not passed any props to Card.jsx in that case we need to have default values . It can be passed theough btnText="" like this.

# 8 - React Interview 

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

  So when we hit the add button what will be the counter value.?
  prevCounter will give the last updated state. Actually setCounter k andr ek callback milta hai. Hidden feature.
  setCounter((prevCounter) => prevCounter+1)    
  OR
  setCounter((counter) => counter+1)

# 9 - Project - Background changer

1. onClick= {()=> setColor("red")}     it wants to a function not a variable

# 10 Project - Password Generator

1. length ko track krne k lie useState lgega.
2. number ki default value true/false hogi useState
3. character ki default value true/false hogi useState me.
4. Input field me password aayega to uska bhi useState bnao default value 
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]= useState(false)
  const [charAllowed,setCharAllowed]= useState(true)
  const [password,setPassword]= useState("")
5. Now design passwordGenerator function to generate function but as I know it must be implemented to length,number,character.
6. For this we will use useCallBack hook in React.
7. useCallBack is a React Hook that lets you cache a function definition between re renders.
8. It means that we have a function keep the part that can be used in the memory and leave the rest to React.
9. Length,Number,character,setPassword dependancies hai
10. useCallBack(fn , dependancies)

const passwordGenerator= useCallback(()=> {
    let pass= ""                                                         //Will fill it thru setPassword
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"    // Will be used to generate password
    if(numberAllowed) str+= "0123456789"                                // if number allowed then also use this 
    if(charAllowed) str+="@!$%^&*()~|?><{}_+="                          //if char allowed then use this

    //Run a loop and generatePassword accordingly

    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()* str.length+1)      // It will give a char everytime basically an index of the char in str
      pass += str.charAt(char)
    }
    setPassword(pass)                                   // And everytime you have to setPassword, it will read the password that is been set
  }, [length,numberAllowed,charAllowed,setPassword])

11. passwordGenerator() //Ab hm aise call nhi kr skte hai kyunki hmne useCallback lgaya hai
    Ab function call krne ke lie ek aur hook ko study krna pdega ----> useEffect 
    useEffect hook lets you synchronise a component with an external system.
    Rendering the code.
12. Usecallback sirf run krne k lie nhi hai memoise bhi krta hai jo run ho jata hai usko ye cache memory m rkhta hai
    useCallback me hm wo dependancy dete hai jinhe hme optimise krna hai
    useEffect me hm wo dependancy dete hai jinke chhed chaad se values change ho jaa rhi hai
13. Clipboard p copy krna is the main task
    So to know which text to copy when u click on copy button for that another hook is there i.e. useRef hook.
    Jb kisi ka reference lena ho
    <input
              type='text'
              value={password}  // state wla password hai ye
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
