import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { InfoList } from "./Info/InfoList/InfoList.js";
import { Home } from "./Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<InfoList />} />
            </Routes>
            <NavBar />
        </BrowserRouter>
    );
}

export default App;
