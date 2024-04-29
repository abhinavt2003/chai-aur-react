//Input box hai isme

import React,{useId} from 'react'
// useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
//Hr HTML k ander accessbility attributes hote hai jo user tab tab krk access le skta hai
//Lekin uski mapping kbhi kabhar difficult ho jaati hai users k saath 
//Apne case me itna unique dena possible nhi hai kyunki currency values bhot saari aa rhi hai
//Aisi situation me useId hook bhot kaam aata hai

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",
    amountDisable= false,
    currencyDisable= false,
    className = "",
}) {
   const amountInputId= useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled= {amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //Agr ye available hai tb hm ye onamountChange ko pass krenge && yhi check krne k lie h
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled= {currencyDisable}
                >
                    
                        {currencyOptions.map( (currency) =>{   //Agr aap loop kr rhe to key ka dhyan rkhe to let React know which element to rerender
                            <option key={currency} value={currency}>
                            usd
                            </option>
                        })}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
