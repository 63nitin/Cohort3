import React from "react";  

export default function Table({ userData }) {
    console.log(userData);

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Pet Information</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>Pet Breed</th>
                        <th>Your Name</th>
                        <th>Your Email</th>
                        <th>Your Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userData[0].petName}</td>
                        <td>{userData[0].petType}</td>
                        <td>{userData[0].breed}</td>
                        <td>{userData[0].adopterName}</td>
                        <td>{userData[0].email}</td>
                        <td>{userData[0].phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const tableStyle = {
    width: "100%",
    maxWidth: "800px",
    borderCollapse: "collapse",
    marginTop: "20px",
    fontSize: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
};

const headingStyle = {
    marginBottom: "16px",
    color: "#1f2937",
    fontSize: "24px",
    fontWeight: "600",
    textAlign: "center"
};

const containerStyle = {
    padding: "32px",
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#f3f4f6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh"
};

// Add this to style table headers and cells
const thStyle = {
    backgroundColor: "#e5e7eb",
    color: "#374151",
    padding: "12px 16px",
    borderBottom: "2px solid #d1d5db",
    textAlign: "left"
};

const tdStyle = {
    padding: "12px 16px",
    borderBottom: "1px solid #d1d5db",
    color: "#4b5563"
};

// Apply hover effect via inline style workaround
const trHoverStyle = {
    transition: "background-color 0.3s ease"
};