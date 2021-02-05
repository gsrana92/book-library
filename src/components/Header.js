import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/auth";

export const Header = ({startLogout}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link to="/home" exact="true" className="header__title">
          <h1>BookZy</h1>
        </Link>

        <Link to="/library" className="header__title">
          My Library
        </Link>
        <button onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = () => {
  return {
    startLogout
  }
}

export default connect(undefined, mapDispatchToProps())(Header);
