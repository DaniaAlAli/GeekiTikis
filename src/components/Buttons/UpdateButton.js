import React, { useState } from "react";

//Style
import { UpdateButtonStyled } from "../../styles";

//Store

import MugModal from "../modals/MugModal";

const UpdateButton = ({ mug }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <MugModal isOpen={isOpen} closeModal={closeModal} oldMug={mug} />
    </>
  );
};

export default UpdateButton;
