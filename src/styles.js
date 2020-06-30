import styled, { createGlobalStyle } from "styled-components";

const ListWrapper = styled.div`
  align-item: center;
  justify-content: center;
  display: flex;
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Hanalei", cursive;
  font-size: xxx-large;
  color: #a02500;
  background: #292929;
`;

const Title2 = styled.h2`
  text-align: center;
  font-family: "Hanalei", cursive;
  font-size: xxx-large;
  color: #a02500;
  background: #292929;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 48%;
`;

const Footer = styled.p`
  text-align: center;
  font-family: "Hanalei", cursive;
  font-size: xx-large;
  color: green;
`;

const FooterImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 46%;
`;

const MugWrapper = styled.div`
  margin: 20px;

  img {
    width: 250px;
    height: 250px;
  }

  p {
    text-align: center;

    &.mug-type {
      ${(props) => props.theme}
    }

    &.mug-text {
      font-family: Caesar Dressing, cursive;
      font-size: xx-large;
    }

    &.mug-price {
      color: blue;
      span {
        &.mug-barcode {
          color: purple;
          font-family: "Libre Barcode 128 Text", cursive;
          font-size: xx-large;
        }
      }
    }
  }
`;
const GlobalStyle = createGlobalStyle`
body{
background-color: white;
}
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
