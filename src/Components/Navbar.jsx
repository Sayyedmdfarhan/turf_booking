import React from "react";
import "../Style/Navar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          {/* Logo */}
          <div onClick={()=>navigate("/")} className="logo">Turf Booking</div>

          {/* Links */}
          <div className="links">
            <a className="nav-item" onClick={()=>navigate("/rule")}>Rules</a>
            <a className="nav-item" onClick={()=>navigate("/mybooking")}>MyBooking</a>
            <a className="nav-item" onClick={()=>navigate("/singup")}>SingUp</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
