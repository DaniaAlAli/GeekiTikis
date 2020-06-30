import React from "react";

//Style
import styles from "../styles";
import { MugWrapper } from "../styles";

const MugItem = (props) => {
  return (
    <MugWrapper>
      <img alt={props.mug.name} src={props.mug.image} />
      <p className="mug-type">{props.mug.name}</p>
      <p className="mug-text">{props.mug.fix}</p>

      <p className="mug-price">
        {props.mug.price} KD{" - "}
        <span className="mug-barcode"> {props.mug.barcode}</span>
      </p>
    </MugWrapper>
  );
};
export default MugItem;
