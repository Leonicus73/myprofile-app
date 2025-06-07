import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./pages/Profile";
import FinancialPage from "./pages/FinancialPage";
import HealthPage from "./pages/HealthPage";
import SocialPage from "./pages/SocialPage";
import LuckPage from "./pages/LuckPage";
import Expenditure from "./pages/Expenditure";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/financialpage" element={<FinancialPage />} />
      <Route path="/healthpage" element={<HealthPage />} />
      <Route path="/socialpage" element={<SocialPage />} />
      <Route path="/luckpage" element={<LuckPage />} />
      <Route path="/expenditure" element={<Expenditure />} />
    </Routes>
  </Router>
);