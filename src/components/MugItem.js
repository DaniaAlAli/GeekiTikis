import React from "react";
import { Link } from "react-router-dom";

//Style
import { MugWrapper } from "../styles";

//Component
import DeleteButton from "./Buttons/DeleteButton";

const MugItem = ({ mug, deleteCollection }) => {
  return (
    <MugWrapper>
      <Link to={`/mugs/${mug.slug}`}>
        <img alt={mug.name} src={mug.image} />
      </Link>
      <p className="mug-type">{mug.name}</p>
      <p className="mug-text">{mug.fix}</p>

      <p className="mug-price">
        {mug.price} KD{" - "}
        <span className="mug-barcode"> {mug.barcode}</span>
      </p>
      <DeleteButton mugId={mug.id} deleteCollection={deleteCollection} />
    </MugWrapper>
  );
};
export default MugItem;
