import React, { useState } from "react";
import Modal from "react-modal";

//Style
import { CreateButtonStyled } from "../../styles";

//Store
import mugStore from "../../stores/MugStore";

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

const MugModal = ({ isOpen, closeModal, oldMug }) => {
  const [mug, setMug] = useState(
    oldMug ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    const newMug = { ...mug, [event.target.name]: event.target.value };
    setMug(newMug);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //oldMug ? mugStore.updateMug(mug) : mugStore.createMug(mug);

    mugStore[oldMug ? "updateMug" : "createMug"](mug);

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
              value={mug.name}
            />
          </div>
          <div className="col-4">
            <label>Price</label>
            <input
              name="price"
              type="float"
              onChange={handleChange}
              min="1"
              className="form-control"
              value={mug.price}
            />
          </div>
          <div className="col-4">
            <label>Barcode</label>
            <input
              name="barcode"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={mug.barcode}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-4">
            <label>Type</label>
            <input
              name="barcode"
              type="type"
              onChange={handleChange}
              className="form-control"
              value={mug.type}
            />
          </div>
          <div className="col-8">
            <label>Description</label>
            <input
              name="description"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={mug.description}
            />
          </div>
        </div>
        <div className="form-group">
          <label color="red">Image</label>
          <input
            name="image"
            onChange={handleChange}
            className="form-control"
            value={mug.image}
          />
        </div>
        <CreateButtonStyled className=" btn float-right">
          {oldMug ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default MugModal;
