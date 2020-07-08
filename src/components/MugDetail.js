import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";

//Component
import DeleteButton from "./Buttons/DeleteButton";

//Style
import { DetailWrapper, BackButton, MugWrapper, ListWrapper } from "../styles";

const MugDetail = ({ mug, deleteCollection }) => {
  const { mugSlug } = useParams();

  const mugs = mug.find((mug) => mug.slug === mugSlug);

  if (!mugs) return <Redirect to="/mugs" />;
  return (
    <MugWrapper className="col-lg-5">
      <ListWrapper>
        <DetailWrapper>
          <img alt={mug.name} src={mugs.image} />
          <p className="mug-type">{mugs.name}</p>
          <p className="mug-text">{mugs.fix}</p>
          <p className="mug-descrip">{mugs.description}</p>
          <p className="mug-descrip">{mugs.types}</p>
          <p className="mug-descrip">{mugs.descriptionP}</p>
          <p className="mug-barcode">{mugs.barcode}</p>

          <DeleteButton mugId={mug.id} deleteCollection={deleteCollection}>
            Delete
          </DeleteButton>
          <Link to="/mugs">
            <BackButton> Back to Mugs</BackButton>
          </Link>
        </DetailWrapper>
      </ListWrapper>
    </MugWrapper>
  );
};

export default MugDetail;
