import React from "react";

//Style
import { MugWrapper, DeleteButtonStyled } from "../styles";

const MugItem = (props) => {
  const mugs = props.mugs;
  const handleDelete = () => {
    props.deleteCollection(props.mugs.id);
  };

  return (
    <MugWrapper>
      <img alt={mugs.name} src={mugs.image} />
      <p className="mug-type">{mugs.name}</p>
      <p className="mug-text">{mugs.fix}</p>

      <p className="mug-price">
        {mugs.price} KD{" - "}
        <span className="mug-barcode"> {mugs.barcode}</span>
      </p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </MugWrapper>
  );
};
export default MugItem;
