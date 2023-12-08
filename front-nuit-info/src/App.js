import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {Home} from "./Home/Home";
import { Navbar } from './Navbar/Navbar';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Navbar></Navbar>
    </BrowserRouter>
  );
}


export default App;
