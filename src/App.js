import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingParent from './LandingPage/LandingParent';
import AdminDashboard from './AdminPage/AdminDashboard';
import RegisterAdmin from './AdminPage/AdminReg/RegisterAdmin';
import AddVariant from './AdminPage/AddVarient';
import Variant from './AdminPage/Variant';
import LandingPage from './Components/LandingPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Routes>

          {/* DEFAULT LANDING PAGE */}
          <Route path="/" element={<LandingPage />} />
          {/* ADMIN DASHBOARD */}
          <Route path="/admindashboard" element={<AdminDashboard />} />

          {/* ADMIN REGISTRATION */}
          <Route path="/registeradmin" element={<RegisterAdmin />} />

          {/* ADMIN VARIANT MANAGEMENT */}
          <Route path="/addvariant" element={<AddVariant />} />
          <Route path="/variant" element={<Variant />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
