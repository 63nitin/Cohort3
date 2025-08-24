import React, { useState } from "react";
import Table from "./Table";

export default function Form() {
    const [formData, setFormData] = useState([]);
    const [showTable, setShowTable] = useState(false)
    const [values, setValues] = useState({
        petName: "",
        petType: "Dog",
        breed: "",
        adopterName: "",
        email: "",
        phone: ""
    });

    const {petName, petType, breed, adopterName, email, phone} = values;


    function handleChange(event){
        const {name, value} = event.target;
        setValues((preveValues) =>({
            ...preveValues,
            [name]: value
        }))
    };

    const data = {petName, petType, breed, adopterName, email, phone};
    function handleSubmit(e){
        e.preventDefault();
        setFormData((prevData) => [...prevData, data]);
        setShowTable(true);

    }
   return showTable ? (
  <Table userData={formData} />
) : (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }}>
    <form onSubmit={handleSubmit} style={{
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      width: "100%",
      maxWidth: "400px"
    }}>
      <h2 style={{ marginBottom: "8px", textAlign: "center", color: "#374151" }}>Pet Info Form</h2>

      <label htmlFor="petName">Pet Name:</label>
      <input type="text" onChange={handleChange} id="petName" name="petName" required style={inputStyle} />

      <label htmlFor="petType">Pet Type:</label>
      <input type="text" id="petType" onChange={handleChange} name="petType" required style={inputStyle} />

      <label htmlFor="petBreed">Pet Breed:</label>
      <input type="text" id="petBreed" onChange={handleChange} name="breed" required style={inputStyle} />

      <label htmlFor="yourName">Your Name:</label>
      <input type="text" id="yourName" onChange={handleChange} name="adopterName" required style={inputStyle} />

      <label htmlFor="yourEmail">Your Email:</label>
      <input type="email" id="yourEmail" onChange={handleChange} name="email" required style={inputStyle} />

      <label htmlFor="yourPhone">Your Phone:</label>
      <input type="tel" id="yourPhone" onChange={handleChange} name="phone" required style={inputStyle} />

      <button type="submit" style={{
        padding: "10px",
        backgroundColor: "#3b82f6",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600"
      }}>Submit</button>
    </form>
  </div>
);

}

const inputStyle = {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    fontSize: "16px",
    backgroundColor: "#316fad31",
    outline: "none",
    width: "100%",
    boxSizing: "border-box"
};