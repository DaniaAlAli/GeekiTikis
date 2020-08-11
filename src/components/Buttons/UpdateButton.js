import React, { useState } from "react";

//Style
import { UpdateButtonStyled } from "../../styles";

//Store

import MugModal from "../modals/MugModal";
import VendorModal from "../modals/VendorModal";

const UpdateButton = ({ vendor, mug }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>

      {vendor ? (
        <VendorModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldVendor={vendor}
        />
      ) : (
        <MugModal isOpen={isOpen} closeModal={closeModal} oldMug={mug} />
      )}
    </>
  );
};

export default UpdateButton;
