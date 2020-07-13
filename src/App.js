import React, { useState } from "react";
import { Route, Switch } from "react-router";

//Components
import MugList from "./components/MugList";
import MugDetail from "./components/MugDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import MugModal from "./components/modals/MugModal"

//Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

const lightTheme = {
  Dark: {
    colorButton: "#e1d7ae",
    backgroundColor: "#292929",
    backgroundh: "white",
    colorh: "#a02500",
    colorT: "#292929",
    backgroundT: "white",
    colorC: "white",
    colorP: "white",
    colorB: "red",
    colorF: "white",
    // colorButton: "#e1d7ae",
    border: "3px solid #a02500",
    borderh: "3px solid #a02500",
    colorDB: "white",
  },

  Light: {
    colorButton: "red",
    backgroundColor: "white",
    backgroundh: "#292929",
    colorh: "#a02500",
    colorT: "grey",
    backgroundT: "black",
    colorC: "black",
    colorP: "green",
    colorB: "purple",
    colorF: "green",
    // colorButton: "#292929",
    border: "3px solid black",
    borderh: "3px solid black",
    colorDB: "black",
  },

  Warm: {
    colorButton: "red",
    backgroundColor: "#e1d7ae",
    backgroundh: "#805342",
    colorh: "#d19985",
    colorT: "#d19985",
    backgroundT: "#805342",
    colorC: "#d19985",
    colorP: "#38f251d",
    colorB: "orange",
    colorF: "#805342",
    // colorButton: "#e1d7ae",
    border: "3px solid #805342",
    borderh: "3px solid #d19985",
    colorDB: "#805342",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("Light");

  const toggleTheme = () => {
    if (currentTheme === "Warm") setCurrentTheme("Light");
    else if (currentTheme === "Light") setCurrentTheme("Dark");
    else if (currentTheme === "Dark") setCurrentTheme("Warm");
  };

  return (
    <ThemeProvider theme={lightTheme[currentTheme]}>
      <GlobalStyle />
      <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />

      <Switch>
        <Route path="/mugs/:mugSlug">
          <MugDetail />
        </Route>
        <Route path="/mugs">
          <MugList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
