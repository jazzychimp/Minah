import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NorthAmerica from "./pages/NorthAmerica";
import Asia from "./pages/Asia";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NorthAmerica" element={<NorthAmerica />} />
          <Route path="/Asia" element={<Asia />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
