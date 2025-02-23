import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
import SignupForm from "./SignupForm";
import Footer from "./Footer";
import Slot from "./Slot";
import Rules from "./Rules";

const MainComponent = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="singup" element={<SignupForm />} />
    <Route path="rule" element={<Rules />} />
    <Route path="slot" element={<Slot />} />
  </Routes>
  <Footer></Footer>
  </BrowserRouter>
  );
};

export default MainComponent;
