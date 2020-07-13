import React, { useState } from "react";

//Components
import MugModal from "../modals/MugModal";

//Style
import { FaPlusSquare } from "react-icons/fa";

const AddButton = ({ createMug }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <FaPlusSquare
        className="float-right"
        size="2em"
        color="red"
        onClick={openModal}
      />{" "}
      <MugModal isOpen={isOpen} closeModal={closeModal} createMug={createMug} />
    </div>
  );
};

export default AddButton;
