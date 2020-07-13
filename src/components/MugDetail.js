import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";

//Component
import DeleteButton from "./Buttons/DeleteButton";

//Style
import { DetailWrapper, MugWrapper, ListWrapper } from "../styles";

const MugDetail = ({ mug, deleteCollection }) => {
  const { mugSlug } = useParams();

  const mugs = mug.find((mug) => mug.slug === mugSlug);

  if (!mugs) return <Redirect to="/mugs" />;
  return (
    <MugWrapper>
      <ListWrapper>
        <DetailWrapper>
          <ListWrapper>
            <img alt={mug.name} src={mugs.image} />
          </ListWrapper>
          <ListWrapper>
            <p className="mug-type">{mugs.name}</p>
          </ListWrapper>
          <p className="mug-text">{mugs.fix}</p>
          <ListWrapper>
            <p className="mug-descrip">{mugs.description}</p>
          </ListWrapper>
          <p className="mug-barcode">{mugs.barcode}</p>

          <DeleteButton mugId={mug.id} deleteCollection={deleteCollection} />
        </DetailWrapper>
      </ListWrapper>
    </MugWrapper>
  );
};

export default MugDetail;
