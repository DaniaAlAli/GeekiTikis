import React from "react";

//Photos
import logo from "../photos/logo2.png";

//Style
import { ThemeButton, LogoLink, NavStyled, NavItem } from "../styles";

const NavBar = ({ toggleTheme, currentTheme }) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <LogoLink to="/">
          <img alt="logo" src={logo} />
        </LogoLink>

        <ul className="navbar-nav ml-auto">
          <NavItem
            className="nav-item "
            to="/mugs"
            style={{ margin: 10, float: "right" }}
          >
            Mugs
          </NavItem>
          <ThemeButton className="nav-item" onClick={toggleTheme}>
            {currentTheme === "Warm"
              ? "Light"
              : currentTheme === "Light"
              ? "Dark"
              : "Warm"}{" "}
            Mode
          </ThemeButton>
        </ul>
      </div>
    </NavStyled>

    // <div>

    // </div>
  );
};

export default NavBar;
