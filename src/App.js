import React from "react";
import logo from "./photos/logo.png";
import DC from "./photos/DC.jpg";
import Marv from "./photos/Marv.jpg";
import SW from "./photos/SW.jpg";
import CLC from "./photos/Colc.jpg";

const styles = {
  // back: {
  //   background: "black",
  // },
  text: {
    textAlign: "center",
    //background: "red",
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "48%",
  },
  price: {
    color: "red",
    textAlign: "center",
  },
  centering: {
    alignItem: "center",
    justifyContent: "center",
    display: "flex",
  },
  dc: {
    margin: "20px",
  },
  dcimage: {
    width: "250px",
    hieght: "250px",
  },
  collection: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "46%",
  },
};

function App() {
  return (
    <div style={styles.back}>
      <div>
        <h1 style={styles.text}> Explore and Show Your Geek Side</h1>
        <h2 style={styles.text}>on your mug!!</h2>
        <img src={logo} alt="Geeki Tikis Shop" style={styles.image} />
      </div>
      <div style={styles.centering}>
        <div style={styles.dc}>
          <img src={DC} alt="DC Mugs" style={styles.dcimage} />
          <p style={styles.text}>DC Collection Mugs</p>
          <p style={styles.price}>8.5 KD </p>
        </div>
        <div style={styles.dc}>
          <img src={Marv} alt="Marvel Mugs" style={styles.dcimage} />
          <p style={styles.text}>Marvel Collection Mugs</p>
          <p style={styles.price}>8.5 KD </p>
        </div>
      </div>
      <div style={styles.centering}>
        <div style={styles.dc}>
          <img src={SW} alt="Star Wars Mugs" style={styles.dcimage} />
          <p style={styles.text}>Star Wars Collection Mugs</p>
          <p style={styles.price}>9 KD </p>
        </div>
      </div>
      <div>
        <img src={CLC} alt="Collection Mugs" style={styles.collection} />
        <p style={styles.text}>so many ways to rock your drink *CHEERS*!</p>
      </div>
    </div>
  );
}

export default App;
