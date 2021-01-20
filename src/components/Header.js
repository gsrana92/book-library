import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export const Header = () => (
  <div className="header-wrapper">
    <header>
      <div>
        <Link to="/" exact={true} className="header__title">
          <h1>Book-shelf</h1>
        </Link>
      </div>
      <div>
        <Link to="/library" activeClassName="">
          Library
        </Link>
      </div>
    </header>
  </div>
);

export default Header;
