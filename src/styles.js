import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

//Alphabetically Order

export const BackButton = styled.button`
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.colorh};
  background-color: ${(props) => props.theme.backgroundh};
  &:hover {
    color: ${(props) => props.theme.backgroundh};
    background-color: ${(props) => props.theme.colorh};
  }
`;

export const DeleteButtonStyled = styled.p`
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: red;
  :hover {
    cursor: pointer;
    border: 1px solid red;
    background-color: ${(props) => props.theme.colorDB};
    border-radius: 20px;
  }
`;

export const DetailName = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  img {
    width: 500%;
  }
`;

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: red;
  color: black;
`;

export const Footer = styled.p`
  text-align: center;
  font-family: "Hanalei", cursive;
  font-size: xx-large;
  color: ${(props) => props.theme.colorF};
`;

export const FooterImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 46%;
  border: ${(props) => props.theme.border};
  border-radius: 25px;
`;

export const GlobalStyle = createGlobalStyle`
body{
background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 54%;
`;

export const LogoLink = styled(Link)`
  padding: 0.05em;
  img {
    width: 120px;
  }
`;

export const MugWrapper = styled.div`
  margin: 20px;

  img {
    width: 250px;
    height: 250px;
    border: ${(props) => props.theme.border};
    border-radius: 30px;
    margin-bottom: 10px;
  }

  p {
    text-align: center;

    &.mug-type {
      color: ${(props) => props.theme.colorT};
      background-color: ${(props) => props.theme.backgroundT};
      font-family: Caesar Dressing, cursive;
      font-size: xxx-large;
      border: ${(props) => props.theme.border};
      border-radius: 20px;
    }

    &.mug-text {
      color: ${(props) => props.theme.colorC};
      font-family: Caesar Dressing, cursive;
      font-size: xx-large;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
    }

    &.mug-descrip {
      color: ${(props) => props.theme.colorC};
      font-family: "Special Elite", cursive;
      font-size: large;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      width: 400px;
    }

    &.mug-barcode {
      color: ${(props) => props.theme.colorB};
      font-family: "Libre Barcode 128 Text", cursive;
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

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: black;

  &.active {
    color: ${(props) => props.theme.colorF};
  }
`;

export const NavStyled = styled.nav`
  border: 1px solid ${(props) => props.theme.backgroundh};
  border-radius: 5px;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ThemeButton = styled.button`
  font-size: 15px;
  padding: 0.3em 1em;
  border: 3px;
  background-color: grey;
  color: black;
`;

export const TitleWrap = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  margin-top: 60px;
  text-align: center;
  color: ${(props) => props.theme.colorh};
  background-color: ${(props) => props.theme.backgroundh};
  border: ${(props) => props.theme.borderh};
  border-radius: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  padding: 0.1px;
  font-family: "Hanalei", cursive;
  font-size: 55px;
`;

export const UpdateButtonStyled = styled.p`
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: blue;
  :hover {
    cursor: pointer;
    border: 1px solid blue;
    background-color: ${(props) => props.theme.colorDB};
    border-radius: 20px;
  }
`;
