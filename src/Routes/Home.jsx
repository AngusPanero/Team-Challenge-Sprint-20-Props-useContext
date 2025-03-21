import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";

const Home = () => {
    const [ home, setHome ] = useState([])

    return(
        <>
            <h3>Soy Home</h3>
            <Link to={"/resultado"}>Resultado</Link>
        </>
    )
}

export default Home