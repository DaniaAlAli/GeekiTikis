import React, { useState } from "react";

//Components
import MugList from "./components/MugList";
import MugDetail from "./components/MugDetail";
//Photos
import logo from "./photos/logo2.png";
import CLC from "./photos/Colc.jpg";

//Data
import mugs from "./mugs";

//Styles
import { ThemeProvider } from "styled-components";
import {
  Footer,
  FooterImage,
  GlobalStyle,
  Logo,
  ThemeButton,
  Title,
  TitleWrap,
} from "./styles";

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
  const [mug, umMug] = useState(null);
  const [mugsD, setMugs] = useState(mugs);

  const deleteCollection = (mugID) => {
    const updateMugs = mugsD.filter((mugs) => mugs.id !== mugID);
    setMugs(updateMugs);
    umMug(null);
  };

  const backToList = () => {
    umMug(null);
  };

  const selectMug = (mugId) => {
    const SelectedMug = mugs.find((mug) => mug.id === mugId);
    umMug(SelectedMug);
  };

  const setView = () =>
    mug ? (
      <MugDetail
        mug={mug}
        backToList={backToList}
        deleteCollection={deleteCollection}
      />
    ) : (
      <MugList
        mug={mugsD}
        deleteCollection={deleteCollection}
        selectMug={selectMug}
      />
    );

  const toggleTheme = () => {
    if (currentTheme === "Warm") setCurrentTheme("Light");
    else if (currentTheme === "Light") setCurrentTheme("Dark");
    else if (currentTheme === "Dark") setCurrentTheme("Warm");
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
      <TitleWrap>
        <Title>Explore and Show Your Geek Side</Title>
        <Title>on your mug!!</Title>
      </TitleWrap>
      <Logo src={logo} alt="Geeki Tikis Shop" />

      {setView()}
      <FooterImage src={CLC} alt="Collection Mugs" />
      <Footer>Grab yours & rock your drink</Footer>
      <Footer>CHEERS!</Footer>
    </ThemeProvider>
  );
}

export default App;
