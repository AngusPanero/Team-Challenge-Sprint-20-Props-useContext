import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useCalculator } from "../CalculatorContext/CalculatorContext";

const Resultado = () => {
    const [ resultado, setResultado ] = useState([])

    const { result, numbers, numbersTwo, operator } = useCalculator()

    return(
        <>
            <h1>Resultado: {result}</h1>
            <Link to={"/"}>Calculadora</Link>
        </>
    )
}

export default Resultado