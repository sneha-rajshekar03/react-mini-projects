import React, { useState } from "react";
import "./App.css";

function SimpleForm() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      alert("Please enter all details.");
      return;
    }
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    alert("Form submitted!");
    setformData({ name: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Minimum 6 characters"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
