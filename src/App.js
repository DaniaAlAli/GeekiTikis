import React from "react";

//Components
import MugList from "./components/MugList";

//Photos
import logo from "./photos/logo.png";
import CLC from "./photos/Colc.jpg";

//Styles
import styles from "./styles";

function App() {
  return (
    <div style={styles.back}>
      <div>
        <h1 style={styles.introText}> Explore and Show Your Geek Side</h1>
        <h2 style={styles.introText}>on your mug!!</h2>
        <img src={logo} alt="Geeki Tikis Shop" style={styles.image} />
      </div>

      <MugList />

      <div>
        <img src={CLC} alt="Collection Mugs" style={styles.collection} />
        <p style={styles.text}>so many ways to rock your drink *CHEERS*!</p>
      </div>
    </div>
  );
}

export default App;
