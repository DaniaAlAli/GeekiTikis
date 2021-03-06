import React, { useState } from "react";

//Components
import MugModal from "../modals/MugModal";

//Style
import { FaPlusSquare } from "react-icons/fa";
import VendorModal from "../modals/VendorModal";

const AddButton = ({ vendor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <FaPlusSquare
        className="float-right"
        size="2em"
        color="red"
        onClick={openModal}
      />
      {vendor ? (
        <MugModal vendor={vendor} isOpen={isOpen} closeModal={closeModal} />
      ) : (
        <VendorModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AddButton;
