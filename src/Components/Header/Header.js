import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="d-flex flex-column">
        <div>Home</div>
      </div>
      <div className="d-flex align-items-center">
        <div style={{ marginLeft: "20px" }}>Zelp</div>
      </div>
    </div>
  );
}

export default Header;
