import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resultado from "./Resultado";
import Home from "./Home"

const RouterComponent = () => {
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Home/>} />
                <Route path="/resultado" element={<Resultado/>} />
            </Routes>
        </Router>
    )
}

export default RouterComponent