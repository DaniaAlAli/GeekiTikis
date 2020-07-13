import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//Style
import { MugWrapper } from "../styles";

//Component
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";

const MugItem = ({ mug }) => {
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
      <UpdateButton mug={mug} />
      <DeleteButton mugId={mug.id} />
    </MugWrapper>
  );
};
export default observer(MugItem);
