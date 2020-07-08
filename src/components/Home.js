import React from "react";

//Photos
import logo from "../photos/logo2.png";
import CLC from "../photos/Colc.jpg";

//Styles
import { Footer, FooterImage, Logo, Title, TitleWrap } from "../styles";

const Home = () => {
  return (
    <>
      <TitleWrap>
        <Title>Explore and Show Your Geek Side</Title>
        <Title>on your mug!!</Title>
      </TitleWrap>
      <Logo src={logo} alt="Geeki Tikis Shop" />

      <FooterImage src={CLC} alt="Collection Mugs" />
      <Footer>Grab yours & rock your drink</Footer>
      <Footer>CHEERS!</Footer>
    </>
  );
};

export default Home;
