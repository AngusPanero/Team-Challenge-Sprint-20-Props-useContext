import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useCalculator } from "../CalculatorContext/CalculatorContext";

const Home = () => {
    const [ home, setHome ] = useState([])
    const { result, numbers, numbersTwo, operator } = useCalculator()

    return(
        <>
            <h2>Cuenta: {numbersTwo} {operator} {numbers}</h2>
            <Link to={"/resultado"}>Resultado</Link>
        </>
    )
}

export default Home