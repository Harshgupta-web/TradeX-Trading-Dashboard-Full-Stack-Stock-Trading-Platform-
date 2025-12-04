import React from "react";

import Menu from "./Menu";
import axios from "axios";
axios.defaults.withCredentials = true;


const handleLogout = async () => {
  try {
    await axios.get("http://localhost:3000/auth/logout");
  } catch (err) {
    console.error("logout failed", err);
  } finally {
    // redirect to public login
    window.location.href = "http://localhost:3001/login";
  }
};

const TopBar = () => {
  return (
    
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
        <button className="btn" style={{borderRadius:"20px"}} onClick={handleLogout}>Logout</button>

      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
