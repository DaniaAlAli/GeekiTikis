import React from "react";

//Components
import MugList from "./components/MugList";

//Photos
import logo from "./photos/logo.png";
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
} from "./styles";

const theme = {
  fontFamily: "Caesar Dressing, cursive",
  fontSize: "xxx-large",
  color: "grey",
  background: "black",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
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
