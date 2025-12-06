import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "../Components/Hero";
import Register from "../Components/Register";
import Navbar from "../Components/Navbar";

function LandingParent() {
  const [activeForm, setActiveForm] = useState("user");

  return (
    <BrowserRouter>
      <div className="landing-background">

        {/* Dark Blur Overlay */}
        <div className="overlay"></div>

        {/* Navbar remains visible above overlay */}
        <Navbar setActiveForm={setActiveForm} />

        {/* Page Routing */}
        <Routes>
          <Route 
            path="/" 
            element={<Hero activeForm={activeForm} setActiveForm={setActiveForm} />} 
          />

          <Route
            path="/register"
            element={<Register setActiveForm={setActiveForm} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default LandingParent;
