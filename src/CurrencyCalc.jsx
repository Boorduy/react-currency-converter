
export default CurrencyCalc;
import background from './assets/Currency.png';
import React, {useState} from 'react';
import {InputBox , UseCurrencyInfo} from './Components/index.js';
//note importing it like InputBox is totally wrong it should be {InputBox}
function CurrencyCalc() {

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('eur')
    const [convertedAmount, setConvertedAmount] = useState(0)
    

  
    const currencyInfo = UseCurrencyInfo(from)
    
    const options = Object.keys(currencyInfo)
  
    const swap = () => {
        //const amountA = amount
        //const amountB = convertedAmount
        //setConvertedAmount(amountA)
       // setAmount(amountB)
       
        setFrom(to)
      setTo(from)
      setConvertedAmount()
       setAmount()

       //tried making a function inside it aswell yet didnt work
    //    function swapVal() {
    //    }
    //    swapVal() 
        
    }
  
  //we need to extract the keys from the urls as options to select from
    const convert = () => {
     setConvertedAmount(a => amount * currencyInfo[to])
    
     
    
     // I  FFIXEXEXEEDDD   ITTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT

    //IT WAS THIS EASY MY BRRAIN DIED BUT I DID IT
      
      
    }  // we go to currencyInfo then to to access the object and what the number should be multiplied
    //with to get to the convertedAmount
    // u can access objects with dot notation aswell as square notation.
  
    return(<>
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${background})`}}>
        {/* well for background u can also just put a simple url without ${} */}
        <div className='w-full'>
            <div className='w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-6 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e) => {
                e.preventDefault()
                convert()
            }}><div className='w-full mb-1 ' >
                <InputBox
                label= 'from'
                amount={Math.floor(amount)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency= {from}
                // we use selectedCurrency which is the <select value= selectedCurrency> so
                //we change that to from so we get the changed example
                //time to provide data to our InputBox
                />
                </div>
                <div className='relative w-full h-0.5'>
                    <button className='absolute left-1/2 -translate-x-3 -translate-y-1 border-2 border-white rounded-lg bg-blue-300 text-black px-2 py-0.5' onClick={swap}
                    >Swap </button>
                    {/* works but we need to give it better looks so we have to make some
                    changes */}
                </div>
                <div className='w-full mb-1 ' >
                <InputBox
                label= 'to'
                //math floor to remove the decimals and make it whole number
                amount={Math.floor(convertedAmount)}
                amountDisabled 
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                
                //didnt have the same mistake as the man himself

                
                selectedCurrency= {to}
                // we use selectedCurrency which is the <select value= selectedCurrency> so
                //we change that to from so we get the changed example
                //time to provide data to our InputBox
                />
                </div>
                <button
                type='submit' className='w-full bg-blue-600 text-black px-4 py-3 rounded-xl'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
                </form>
            </div>
        </div>
        
    </div>
    </>)
}