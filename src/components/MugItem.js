import React from "react";

//Style
import { MugWrapper, DeleteButtonStyled } from "../styles";

const MugItem = (props) => {
  const mug = props.mug;

  const handleDelete = () => {
    props.deleteCollection(props.mugs.id);
  };

  return (
    <MugWrapper>
      <img
        alt={mug.name}
        src={mug.image}
        onClick={() => props.selectMug(mug.id)}
      />
      <p className="mug-type">{mug.name}</p>
      <p className="mug-text">{mug.fix}</p>

      <p className="mug-price">
        {mug.price} KD{" - "}
        <span className="mug-barcode"> {mug.barcode}</span>
      </p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </MugWrapper>
  );
};
export default MugItem;
