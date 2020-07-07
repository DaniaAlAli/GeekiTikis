import React from "react";

//Style
import {
  DetailWrapper,
  DeleteButtonStyled,
  BackButton,
  MugWrapper,
  ListWrapper,
} from "../styles";

const MugDetail = (props) => {
  const mug = props.mug;

  const handleDelete = () => {
    props.deleteCollection(mug.id);
  };

  const handleList = () => {
    props.backToList();
  };

  return (
    <MugWrapper>
      <ListWrapper>
        <DetailWrapper>
          <img alt={mug.name} src={mug.image} />
          <p className="mug-type">{mug.name}</p>
          <p className="mug-text">{mug.fix}</p>
          <p className="mug-descrip">{mug.description}</p>
          <p className="mug-descrip">{mug.types}</p>
          <p className="mug-descrip">{mug.descriptionP}</p>
          <p className="mug-barcode">{mug.barcode}</p>

          <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
          <BackButton onClick={handleList}> Back to List</BackButton>
        </DetailWrapper>
      </ListWrapper>
    </MugWrapper>
  );
};

export default MugDetail;
