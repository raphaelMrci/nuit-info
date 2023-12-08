import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { InfoList } from "./Info/InfoList/InfoList.js";
import { Home } from "./Home/Home";
import { InfoDetails } from "./Info/InfoDetails/InfoDetails.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/infos" element={<InfoList />} />
                <Route path="/info" element={<InfoDetails />} />
            </Routes>
            <NavBar />
        </BrowserRouter>
    );
}

export default App;
