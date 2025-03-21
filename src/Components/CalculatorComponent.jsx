import { useCalculator } from "../CalculatorContext/CalculatorContext"

const CalculatorComponent = () => {
    const { handleResult, handleCount, handleOperator } = useCalculator()
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const operators = ["+", "-", "x", "/", "%"]
    const resultOperator = "="

    return(
        <>
            <div className="cl-numbers-container">
                {buttons.map((bt) => <button className="cl-numbers-ind" onClick={() => handleCount(bt)} key={bt}>{bt}</button>)}
            </div>
            <div className="cl-operators-container">
                {operators.map((bt) => <button onClick={() => handleOperator(bt)} className="cl-operators-ind" key={bt}>{bt}</button>)}
                <button key="=" onClick={() => handleResult()}>{resultOperator}</button>
            </div>
        </>
    )
}

export default CalculatorComponent