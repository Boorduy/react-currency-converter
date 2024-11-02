import {useEffect, useState} from 'react';


//whenever whoever is using this UseCurrencyInfo they need to provide us the currency they want data
//from
    function UseCurrencyInfo(currency) {
        const [data, setData] = useState({});

        useEffect(() => {
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
        }, [currency])
        console.log(data)
        return data 

        //rn we're returning alot of currencies into
        
        //this is an object we're working with
    }


export default UseCurrencyInfo
//only thing to do
//this hook is nothing more than a function use classic react classic javascript fetch
//api and get the data and return the value
