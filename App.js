import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DonorForm from "./components/DonorForm";
import DonorList from "./components/DonorList";
import './style.css'; // Importing the CSS file

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<DonorForm />} />
          <Route path="/donors" element={<DonorList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
