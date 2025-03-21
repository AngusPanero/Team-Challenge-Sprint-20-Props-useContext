import { React, createContext, useContext, useState } from "react";

const CalculatorContext = createContext()

const CalculatorProvider = ({ children }) => {
    const [ numbers, setNumbers ] = useState("")
    const [ numbersTwo, setNumbersTwo ] = useState("")
    const [ operator, setOperator ] = useState("")
    const [ result, setResult ] = useState(null)

    const handleCount = (newCount) => {
        if (operator === "") {
            setNumbers(numbers + newCount);
            setNumbersTwo(numbers + newCount)
        } else {
            setNumbersTwo(numbersTwo + newCount);
        }
        console.log("Uno", numbers);
        console.log("Dos", numbersTwo);
        
    }
    
    const handleOperator = (newOperator) => {
        setOperator(newOperator)
    }

    const handleResult = () => {
        const number1 = parseFloat(numbers); 
        const number2 = parseFloat(numbersTwo); 

        let resultCount = 0;
        switch (operator) {
            case "+":
                resultCount = number1 + number2;
                break;
            case "-":
                resultCount = number1 - number2;
                break;
            case "x":
                resultCount = number1 * number2;
                break;
            case "/":
                resultCount = number1 / number2;
                break;
            case "%":
                resultCount = number1 % number2;
                break;
            default:
                break;
        }
        setResult(parseFloat(resultCount)); 
        setNumbers(""); 
        setNumbersTwo(""); 
        setOperator(""); 
        console.log(result);
        
    }

    return(
        <CalculatorContext.Provider value={ {numbers, numbersTwo, operator, result, handleResult, handleCount, handleOperator} }>
            { children }
        </CalculatorContext.Provider>
    )
}

const useCalculator = () => useContext(CalculatorContext)

export { CalculatorProvider, useCalculator }