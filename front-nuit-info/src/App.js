import infoImg from "./assets/motionblur.png";
import "./App.css";
import { useEffect, useState } from "react";
import { InfoItem } from "./components/info/infoComponent.js";
import { CustomButton } from "./components/CustomButton/CustomButton.js";
import { NavBar } from "./components/NavBar/NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Home/Home";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <NavBar />
        </BrowserRouter>
    );
}

export default App;
