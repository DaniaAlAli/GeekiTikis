import React, { useState } from "react";
import { Route, Switch } from "react-router";
import slugify from "react-slugify";
//Components
import MugList from "./components/MugList";
import MugDetail from "./components/MugDetail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import MugModal from "./components/modals/MugModal"

//Data
import mugs from "./mugs";

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
    colorD: "red",
    colorF: "white",
    colorButton: "#e1d7ae",
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
    colorP: "blue",
    colorB: "purple",
    colorD: "red",
    colorF: "green",
    colorButton: "#292929",
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
    colorD: "red",
    colorF: "#805342",
    colorButton: "#e1d7ae",
    border: "3px solid #805342",
    borderh: "3px solid #d19985",
    colorDB: "#805342",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("Light");
  const [mugsD, setMugs] = useState(mugs);

  const createMug = (newMug) => {
    newMug.id = mugsD[mugsD.length - 1].id + 1;
    newMug.slug = slugify(newMug.name);
    const updatedMugs = [...mugsD, newMug];
    setMugs(updatedMugs);
  };

  const deleteCollection = (mugID) => {
    const updateMugs = mugsD.filter((mugs) => mugs.id !== mugID);
    setMugs(updateMugs);
  };

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
          <MugDetail mug={mugsD} deleteCollection={deleteCollection} />
        </Route>
        <Route path="/mugs">
          <MugList
            mug={mugsD}
            deleteCollection={deleteCollection}
            createMug={createMug}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
