import React, { useState } from "react";

//Components
import MugModal from "../modals/MugModal";

//Style
import { FaPlusSquare } from "react-icons/fa";

const AddButton = () => {
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
      />{" "}
      <MugModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddButton;
