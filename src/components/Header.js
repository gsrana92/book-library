import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link to="/" exact="true" className="header__title">
          <h1>BookZy</h1>
        </Link>

        <Link to="/library" className="header__title">
          My Library
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
