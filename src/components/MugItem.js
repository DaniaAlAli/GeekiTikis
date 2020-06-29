import React from "react";

//Style
import styles from "../styles";

const MugItem = (props) => {
  return (
    <div style={styles.dc}>
      <img style={styles.image} alt={props.mug.name} src={props.mug.image} />
      <p style={styles.text}>{props.mug.name}</p>
      <p style={styles.price}>{props.mug.price} KD</p>
    </div>
  );
};
export default MugItem;
