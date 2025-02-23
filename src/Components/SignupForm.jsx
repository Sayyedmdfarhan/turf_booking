import React, { useState } from "react";
import "../Style/SignupForm.css";

const SignupForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    if (/^\d{10}$/.test(value)) {
      setError("");
    } else {
      setError("Enter a valid phone number");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error || !/^\d{10}$/.test(phoneNumber)) {
      setError("Enter a valid phone number");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <div className="signup-form">
      <div className="banner">
        <h2>Great Turf, Lowest Prices</h2>
        {/* <div className="categories">
          <div className="item">₹250<br />Sarees</div>
          <div className="item">₹200<br />Kurtis</div>
          <div className="item">₹150<br />Furniture</div>
          <div className="item">₹175<br />Menswear</div>
        </div> */}
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up to Play and Enjoy</h3>
        <div className="input-group">
          <label htmlFor="country" className="label-form">Country</label>
          <div className="country-code">IN +91</div>
        </div>
        <div className="input-group">
          <label htmlFor="phoneNumber" className="label-form2">Phone Number</label>
          <input
          className="input"
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
          {error && <span className="error">{error}</span>}
        </div>
        <button type="submit" className="button-form">Continue</button>
      </form>
    </div>
  );
};

export default SignupForm;
