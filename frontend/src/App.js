import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import DonorSignUp from "./components/DonorSignUp/DonorSignUp";
import BeneficiarySignUp from "./components/BeneficiarySignUp/BeneficiarySignUp";
import DonorDashBoard from "./components/DonorDashboard/DonorDashBoard";
import DonateNow from "./components/DonateNow/DonateNow";
import DonateThank from "./components/DonateThank/DonateThank";
import BeneficiaryDashboard from "./components/BeneficiaryDashboard/BeneficiaryDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donor-signup" element={<DonorSignUp />} />
          <Route path="/beneficiary-signup" element={<BeneficiarySignUp />} />
          <Route path="/donor/dashboard" element={<DonorDashBoard />} />
          <Route path="/donor/DonateNow" element={<DonateNow />} />
          <Route path="/donor/Thankyou" element={<DonateThank />} />
          <Route path="/beneficiary/dashboard" element={<BeneficiaryDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
