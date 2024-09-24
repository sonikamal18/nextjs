import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px auto",
          maxWidth:'1200px'
        }}
      >
        <h2>Logo</h2>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          <li>Home</li>
          <li>ABout</li>
          <li>Services</li>
          <li>BLog</li>
        </ul> 
      </div>
    </>
  );
};

export default Navbar;
