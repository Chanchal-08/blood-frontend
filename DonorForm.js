import React, { useState } from "react";
import axios from "axios";

const DonorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/donors", formData);
      alert("Donor registered successfully!");
    } catch (error) {
      console.error("Error registering donor", error);
    }
  };

  return (
    <div>
      <h2>Register as a Donor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default DonorForm;
