import React, { useState } from "react";
import Modal from "react-modal";

//Style
import { CreateButtonStyled } from "../../styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MugModal = ({ isOpen, closeModal, createMug }) => {
  const [mug, setMug] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    console.log("handleChange -> event", event.target.name);
    console.log("handleChange -> event", event.target.value);
    const newMug = { ...mug, [event.target.name]: event.target.value };
    setMug(newMug);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createMug(mug);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Mug Modal"
    >
      <h3> New Modal </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-4">
            <label>Name</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-4">
            <label>Price</label>
            <input
              name="price"
              type="number"
              onChange={handleChange}
              min="1"
              className="form-control"
            />
          </div>
          <div className="col-4">
            <label>Barcode</label>
            <input
              name="barcode"
              type="text"
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label color="red">Image</label>
          <input
            name="image"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <CreateButtonStyled className=" btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default MugModal;
