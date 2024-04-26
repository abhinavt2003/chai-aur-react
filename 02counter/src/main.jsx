import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(  //createRoot ek apna DOM create krta hai aur phir apne DOM aur main DOM ko comapare krta hai,fir apne aur main DOM ko compare krta hai aur fir sirf unhi cheezo ko update krta hai jo actually me UI me update hui hai. Pr apna browser pura DOM remove krta aur fir usko repaint krta hai isi ko Page Reload bolte hai
  // Browser ka DOM baar baar DOM bnata hai reload krne p lekin virtual DOM compare krte aur jo cheeze update hui hai unhi ko dubara paint kr deta hai
  //Maan lo network se koi update aaya UI me to usko immediately update na krke kuch der baad update optimisely algorithm lgak update kro
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// Refer this Github Article for theories


// https://github.com/acdlite/react-fiber-architecture

// reconciliation
// The algorithm React uses to diff one tree with another to determine which parts need to be changed.

// Reconciliation versus rendering
// The DOM is just one of the rendering environments React can render to, the other major targets being native iOS and Android views via React Native. (This is why "virtual DOM" is a bit of a misnomer.)

// The reason it can support so many targets is because React is designed so that reconciliation and rendering are separate phases. The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.

// This separation means that React DOM and React Native can use their own renderers while sharing the same reconciler, provided by React core.

// Fiber reimplements the reconciler. It is not principally concerned with rendering, though renderers will need to change to support (and take advantage of) the new architecture.

// The key points are:

// In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
// Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
// A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

// We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

// pause work and come back to it later.
// assign priority to different types of work.
// reuse previously completed work.
// abort work if it's no longer needed.