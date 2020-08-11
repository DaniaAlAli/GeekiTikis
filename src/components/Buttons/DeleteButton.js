import React from "react";

//Style
import { DeleteButtonStyled } from "../../styles";

//Store
import mugStore from "../../stores/MugStore";
import vendorStore from "../../stores/vendorStore";

const DeleteButton = ({ vendorId, mugId }) => {
  const handleDelete = () => {
    if (mugId) mugStore.deleteCollection(mugId);
    else vendorStore.deleteVendor(vendorId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
