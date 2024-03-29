import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
