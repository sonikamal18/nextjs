import Link from "next/link";
import React from "react";

const HEader = () => {
  const a = "Aditya";
  return (
    <div style={{ maxWidth: "1200px", margin: "0px auto", width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>HEllo all of u</h1>
      <img
        src="https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg"
        alt=""
        style={{ maxWidth: "600px", margin: "0px auto", width: "100%" }}
      />
      <Link href='/aadi'>,                      
        Good MOrning        
        </Link> 
    </div>
  );
};

export default HEader;
