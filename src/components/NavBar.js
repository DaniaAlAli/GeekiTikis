import React from "react";
import { observer } from "mobx-react";

//Photos
import logo from "../photos/logo2.png";

//Style
import { ThemeButton, LogoLink, NavStyled, NavItem } from "../styles";
import { FiLogOut } from "react-icons/fi";

//Components
import SingupButton from "./Buttons/SignupButton";
import SinginButton from "./Buttons/SigninButton";
import authStore from "../stores/authStore";

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
          {authStore.user ? (
            <>
              <p>Hello, {authStore.user.username}</p>
              <FiLogOut
                onClick={authStore.signout}
                style={{ size: "2em", color: "red" }}
              />
            </>
          ) : (
            <>
              <SinginButton />
              <SingupButton />
            </>
          )}
          {authStore.user && authStore.user.role === "admin" && (
            <>
              <NavItem
                className="nav-item "
                to="/mugs"
                style={{ margin: 10, float: "right" }}
              >
                Mugs
              </NavItem>
              <NavItem
                className="nav-item "
                to="/vendors"
                style={{ margin: 10, float: "right" }}
              >
                Vendors
              </NavItem>
            </>
          )}

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

export default observer(NavBar);
