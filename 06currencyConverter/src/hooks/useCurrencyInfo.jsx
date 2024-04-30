import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]= useState({})
    useEffect(()=> {
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
        .then((res) => res.json())   //yha string return hoga to usko json me convert kr do
        .then((res) => setData(res[currency])) //ab us string ko setdata se operation kr do
        console.log(data);
    },[currency])
    console.log(data);
    return data   //Ab us method me se konsa data lena chahte ho 
} 

export default useCurrencyInfo;  //Pura ka pura method hi return hp jaata hai