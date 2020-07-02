import styled, { createGlobalStyle } from "styled-components";

const ListWrapper = styled.div`
  align-item: center;
  justify-content: center;
  display: flex;
`;

const Title = styled.h1`
  text-align: center;
  padding: 0.2em;
  font-family: "Hanalei", cursive;
  font-size: xxx-large;
  color: ${(props) => props.theme.colorh1};
  background-color: ${(props) => props.theme.backgroundh1};
`;

const Title2 = styled.h2`
  text-align: center;
  padding: 0.2em;
  font-family: "Hanalei", cursive;
  font-size: xxx-large;
  color: ${(props) => props.theme.colorh2};
  background-color: ${(props) => props.theme.backgroundh2};
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 55%;
`;

const Footer = styled.p`
  text-align: center;
  font-family: "Hanalei", cursive;
  font-size: xx-large;
  color: ${(props) => props.theme.colorF};
`;

const FooterImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 46%;
  border: ${(props) => props.theme.border};
`;

const MugWrapper = styled.div`
  margin: 20px;

  img {
    width: 250px;
    height: 250px;
    border: ${(props) => props.theme.border};
  }

  p {
    text-align: center;

    &.mug-type {
      color: ${(props) => props.theme.colorT};
      background-color: ${(props) => props.theme.backgroundT};
      font-family: Caesar Dressing, cursive;
      font-size: xxx-large;
    }

    &.mug-text {
      color: ${(props) => props.theme.colorC};
      font-family: Caesar Dressing, cursive;
      font-size: xx-large;
    }

    &.mug-price {
      color: ${(props) => props.theme.colorP};
      span {
        &.mug-barcode {
          color: ${(props) => props.theme.colorB};
          font-family: "Libre Barcode 128 Text", cursive;
          font-size: xx-large;
        }
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
body{
background-color: ${(props) => props.theme.backgroundColor};
}
`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 0.9em;
  padding: 0.3em 0.8em;
  border-radius: 3px:
  background-color: ${(props) => props.theme.colorButton};
`;

const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.colorD};
`;

export {
  Title,
  Title2,
  GlobalStyle,
  Logo,
  Footer,
  ListWrapper,
  MugWrapper,
  FooterImage,
  ThemeButton,
  DeleteButtonStyled,
};

// const styles = {
// introText: {
//   textAlign: "center",
//   fontFamily: "'Hanalei', cursive",
//   fontSize: "xxx-large",
//   color: "#a02500",
//   background: "#292929",
// },

// image: {
//   display: "block",
//   marginLeft: "auto",
//   marginRight: "auto",
//   width: "48%",
// },

// type: {
//   textAlign: "center",
//   fontFamily: "Caesar Dressing, cursive",
//   fontSize: "xxx-large",
//   color: "grey",
//   background: "black",
// },

// text: {
//   textAlign: "center",
//   fontFamily: "Caesar Dressing, cursive",
//   fontSize: "xx-large",
// },

// barcode: {
//   color: "purple",
//   textAlign: "center",
//   fontFamily: "'Libre Barcode 128 Text', cursive",
//   fontSize: "xx-large",
// },

// price: {
//   color: "red",
//   textAlign: "center",
// },

// centering: {
//   alignItem: "center",
//   justifyContent: "center",
//   display: "flex",
// },

// dc: {
//   margin: "20px",
// },

// dcimage: {
//   width: "250px",
//   hieght: "250px",
// },

// collection: {
//   display: "block",
//   marginLeft: "auto",
//   //   // marginDown: "900px",
//   //   marginRight: "auto",
//   //   width: "46%",
//   // },

//   footer: {
//     textAlign: "center",
//     fontFamily: "'Hanalei', cursive",
//     fontSize: "xx-large",
//     color: "green",
//   },
// };

// export default styles;
