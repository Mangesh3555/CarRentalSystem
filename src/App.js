import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './Components/LandingPage';
import AdminDashboard from './AdminPage/AdminDashboard';
import RegisterAdmin from './AdminPage/AdminReg/RegisterAdmin';
import AddVariant from './AdminPage/AddVarient';
import Variant from './AdminPage/Variant';
import Home from './UserHomePage/pages/Home';   // 👈 USER HOME PAGE
import UserProfile from './UserHomePage/pages/UserProfile'; // 👈 NEW: import UserProfile

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>

          {/* DEFAULT LANDING PAGE */}
          <Route path="/" element={<LandingPage />} />

          {/* ADMIN */}
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/registeradmin" element={<RegisterAdmin />} />
          <Route path="/addvariant" element={<AddVariant />} />
          <Route path="/variant" element={<Variant />} />

          {/* USER HOME PAGE */}
          <Route path="/home" element={<Home />} />

          {/* USER PROFILE PAGE */}  {/* 👈 NEW ROUTE */}
          <Route path="/profile" element={<UserProfile />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
