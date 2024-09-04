import { useState } from "react"
import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput"
function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})

  const isValidInput = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue){

  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue
      }
  })
} 


  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!isValidInput && (<p className="center">Please Enter the duration greater than zero.</p>)}
      {isValidInput && <Result input={userInput} />}  
    </>
  )
}

export default App
