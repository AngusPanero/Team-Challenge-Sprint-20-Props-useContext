import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useCalculator } from "../CalculatorContext/CalculatorContext";

const Resultado = () => {
    const [ resultado, setResultado ] = useState([])

    const { result } = useCalculator()

    return(
        <>
            <h3>Soy Resultado</h3>
            <h3>Resultado: {result}</h3>
            <Link to={"/"}>Calculadora</Link>
        </>
    )
}

export default Resultado