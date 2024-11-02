 import React, {useId} from 'react'
//with this one we're using props
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
    //these are all props we have to take in count to show up and make changes through them overtime

}) {
    const id = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1-2'>
            <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
            <input
            //what does htmlfor and id help these go together for?
            id= {id}
            type='number'
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Enter Amount'
            
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            //using {onAmountChange} alone doesn't work because we have no idea about the functionality
            //so we use callback and we should track an event we need to make sure we have presense of
            //this on amount change cause this might break our application for standard practices check
            //onAmountChange... if it exists go get the value. when we do this we grab string but we need
            //number. so we use onAmountChange(Number(e.target.value)) to make sure and keep everything
            //safe on our terms and our app doesn't break.
            // these are all safety checks to have a very smooth app and no issues pop up on debugging.

            // if onAmountChange && exists then go to onAmountChange(Number(e.target.value))
            ></input>
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'> Currency Type</p>
        <select
        className='rounded-lg px-1 py-1 bg-slate-400 cursor-pointer outline-none'
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        //again thats what we do to make sure we have smooth app
        disabled={currencyDisabled}
        //disabled just incase we want to develop a project where we want to lock in a specific
        //field so that the user has a specific option and nothing else
        // now onto for our next thing we have to use mapping cause there is way to many options
        //to take care of for our project to choose a currency. loop through values using map
        //because currencyOptions is an array.
        >
            {currencyOptions.map((currency) => (
                <option key ={currency} value= {currency}> {currency}</option>
                ))}
        {/* instead of using curly bracelets we use () so we dont have to return anything*/}
        </select>
        </div>
    </div>
  )
}

export default InputBox