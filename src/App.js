import React, { useState } from "react";

//Components
import MugList from "./components/MugList";

//Photos
import logo from "./photos/logo2.png";
import CLC from "./photos/Colc.jpg";

//Styles
import { ThemeProvider } from "styled-components";
import {
  Title,
  Title2,
  Logo,
  Footer,
  FooterImage,
  GlobalStyle,
  ThemeButton,
} from "./styles";

const lightTheme = {
  Light: {
    colorButton: "red",
    backgroundColor: "white",
    backgroundh1: "#292929",
    colorh1: "#a02500",
    backgroundh2: "#292929",
    colorh2: "#a02500",
    colorT: "grey",
    backgroundT: "black",
    colorC: "black",
    colorP: "blue",
    colorB: "purple",
    colorButton: "White",
    colorD: "red",
    colorF: "green",
    border: "3px solid black",
  },
  Dark: {
    colorButton: "#e1d7ae",
    backgroundColor: "#292929",
    backgroundh1: "white",
    colorh1: "#a02500",
    backgroundh2: "white",
    colorh2: "#a02500",
    colorT: "#292929",
    backgroundT: "white",
    colorC: "white",
    colorP: "white",
    colorB: "red",
    colorD: "red",
    colorF: "white",
    border: "3px solid white",
  },
  Warm: {
    colorButton: "red",
    backgroundColor: "#e1d7ae",
    backgroundh1: "#805342",
    colorh1: "#d19985",
    backgroundh2: "#805342",
    colorh2: "#d19985",
    colorT: "#d19985",
    backgroundT: "#805342",
    colorC: "#d19985",
    colorP: "#38f251d",
    colorB: "orange",
    colorButton: "White",
    colorD: "red",
    colorF: "#805342",
    border: "3px solid #805342",
  },
  // Cold: {
  //   backgroundColor: "blue",
  //   backgroundh1: "#292929",
  //   backgroundh2: "#292929",
  //   colorT: "grey",
  //   backgroundT: "black",
  //   colorC: "black",
  //   colorP: "blue",
  //   colorB: "purple",
  //   colorButton: "White",
  //   colorD: "red",
  // },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("Light");

  const toggleTheme = () => {
    if (currentTheme === "Warm") setCurrentTheme("Light");
    else if (currentTheme === "Light") setCurrentTheme("Dark");
    else if (currentTheme === "Dark") setCurrentTheme("Warm");
    // else if (currentTheme === "Cold") setCurrentTheme("Warm");
  };

  return (
    <ThemeProvider theme={lightTheme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "Warm"
          ? "Light"
          : currentTheme === "Light"
          ? "Dark"
          : "Warm"}{" "}
        Mode
      </ThemeButton>

      <div>
        <Title>Explore and Show Your Geek Side</Title>
        <Title2>on your mug!!</Title2>
        <Logo src={logo} alt="Geeki Tikis Shop" />
      </div>

      <MugList />

      <div>
        <FooterImage src={CLC} alt="Collection Mugs" />
        <Footer>Grab yours & rock your drink</Footer>
        <Footer>CHEERS!</Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
