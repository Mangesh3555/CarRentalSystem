import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import LandingParent from './LandingPage/LandingParent';
import AdminDashboard from './AdminPage/AdminDashboard';
import RegisterAdmin from './AdminPage/AdminReg/RegisterAdmin';
import AddVariant from './AdminPage/AddVarient';

function App() {
  

  return (
      <div className="App">
        {/* <AddVariant/> */}
        <RegisterAdmin/>
        {/* <AdminDashboard/> */}
        {/* <LandingParent/> */}
      </div>
   
  );
}

export default App;
