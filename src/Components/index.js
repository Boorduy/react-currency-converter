import InputBox from './InputBox.jsx'
import UseCurrencyInfo from '../hooks/UseCurrencyInfo.js'
export { InputBox, UseCurrencyInfo }

//now onto why we are using custom hooks
//we can ofcourse put this all in the useEffect inside app.jsx but there are so many things
//we require from this that its better we don't do it all in one place and seperate them into
// different parts. and place them in a folder called hooks