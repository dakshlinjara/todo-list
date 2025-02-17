import React from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import "./header.css";

function Header() {
 

  return (
    <div className="header-container">
      {/* Logout Button */}

      {/* Header Content */}
      <div className="header-content">
        <h1>Website Todo</h1>
      </div>
    </div>
  );
}

export default Header;

