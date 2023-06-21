import React from "react";
import {Link } from "react-router-dom";
function Navbar(){
    return <div className="navbar">
          <img className="logo-img" src={require("../images/Logo.png")} alt="" />
          <div className="links">
            <ul>
              <li><Link  to="/">Home</Link></li>
              <li><Link  to="/lostItems">Lost Items</Link></li>
              <li><Link to="/FoundItems">Found Items</Link></li>
              <li><Link  to="/addItems">Add Items</Link></li>
              <li> <Link  to="/myListings">My Listings</Link></li>
            </ul>
          </div>
          
          <button className="registerButton"><img style={{paddingRight:"10px"}} src={require("../images/googleIcon.png")} alt="" /> SIGN IN</button>
    </div>
}
export default Navbar;