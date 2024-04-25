//Is method me jo bhi tm elements pass kroge wo apne reactElement k hisaab se kroge kyunki ye isi type k elements ko render krne k lie designed hai
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
    //Yha hm loop lgake DOM elements ko le liya tha 
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    for(const prop in reactElement.props){
        if(prop ===  'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement);
}

//Ab hme nahi pta tha react k elements kaise bnte hai to hmne khudke hisaab se ek element bna lia
const reactElement= {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'Click me to visit Google'
}

const mainContainer= document.querySelector('#root')   //Phle to query krke utha liya 

customRender(reactElement,mainContainer) //Ab mujhe ek render method chahie jo mere customReact ko implement kre 