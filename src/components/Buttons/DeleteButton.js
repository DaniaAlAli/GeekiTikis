import React from "react";

//Style
import { DeleteButtonStyled } from "../../styles";

//Store
import mugStore from "../stores/MugStore";

const DeleteButton = ({ mugId }) => {
  const handleDelete = () => mugStore.deleteCollction.mugId;

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
