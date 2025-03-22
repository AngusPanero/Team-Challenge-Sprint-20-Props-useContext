import { React, createContext, useContext, useState, useEffect } from "react";

const CalculatorContext = createContext()

const CalculatorProvider = ({ children }) => {
    const [ numbers, setNumbers ] = useState("")
    const [ numbersTwo, setNumbersTwo ] = useState("")
    const [ operator, setOperator ] = useState("")
    const [ result, setResult ] = useState(null)

    const handleCount = (newCount) => {
        if (!operator) {
            setNumbers(numbers + newCount);
            setNumbersTwo(numbers + newCount)
        } else {
            setNumbers(newCount);
        }
        console.log("Uno", numbers);
        console.log("Dos", numbersTwo);
        
    }

    const handleOperator = (newOperator) => {
        setOperator(newOperator)
        setNumbers("")
        console.log("Uno", numbers);
        console.log("Dos", numbersTwo);
    }

    const handleReset = () => {
        setOperator()
        setNumbers("")
        setNumbersTwo("")
        setResult("")
    }

    const handleResult = () => {
        const number1 = parseFloat(numbers); 
        const number2 = parseFloat(numbersTwo); 

        let resultCount = 0;
        switch (operator) {
            case "+":
                resultCount = number2 + number1;
                setResult(parseFloat(resultCount)); setNumbers(""); setNumbersTwo(""); setOperator(""); 
                break;
            case "-":
                resultCount = number2 - number1;
                setResult(parseFloat(resultCount)); setNumbers(""); setNumbersTwo(""); setOperator(""); 
                break;
            case "x":
                resultCount = number2 * number1;
                setResult(parseFloat(resultCount)); setNumbers(""); setNumbersTwo(""); setOperator(""); 
                break;
            case "/":
                resultCount = number2 / number1;
                setResult(parseFloat(resultCount)); setNumbers(""); setNumbersTwo(""); setOperator(""); 
                break;
            case "%":
                resultCount = number2 % number1;
                setResult(parseFloat(resultCount)); setNumbers(""); setNumbersTwo(""); setOperator(""); 
                break;
            default:
                break;
        }
        console.log(result);
    }

/*     useEffect(() => {
        if (numbers && numbersTwo && operator) {
            handleResult();
        }
    }, [numbers, numbersTwo, operator]); */

    return(
        <CalculatorContext.Provider value={ {numbers, numbersTwo, operator, result, handleResult, handleCount, handleOperator, handleReset} }>
            { children }
        </CalculatorContext.Provider>
    )
}

const useCalculator = () => useContext(CalculatorContext)

export { CalculatorProvider, useCalculator }