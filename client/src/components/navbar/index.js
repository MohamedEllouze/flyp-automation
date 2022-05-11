import React from "react";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav id="navbar" className="nav-menu weight-regular">
      <div className="bottom-nav">
        <div className="bottom-right">
          <ul className="nav-links">
            <Link to="/user" className="link">
              USER
            </Link>
            <div className="rejoignez-nous"></div>
          </ul>
          <Link to="/" className="prendre-rdv-link">
            <p className="prendre-rdv weight-regular">SIGN-UP</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
