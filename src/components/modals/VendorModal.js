import React, { useState } from "react";
import Modal from "react-modal";

//Style
import { CreateButtonStyled } from "../../styles";

//Store
import vendorStore from "../../stores/vendorStore";

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

const VendorModal = ({ isOpen, closeModal, oldVendor }) => {
  const [vendor, setVendor] = useState(
    oldVendor ?? {
      name: "",

      image: "",
    }
  );

  const handleChange = (event) => {
    const newVendor = { ...vendor, [event.target.name]: event.target.value };
    setVendor(newVendor);
  };

  const handleImage = (event) =>
    setVendor({ ...vendor, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();

    vendorStore[oldVendor ? "updateVendor" : "createVendor"](vendor);

    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Vendor Modal"
    >
      <h3> New Vendor </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group ">
          <label>Name</label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={vendor.name}
          />
        </div>

        <div className="form-group">
          <label color="red">Image</label>
          <input
            name="image"
            type="file"
            onChange={handleImage}
            className="form-control"
          />
        </div>
        <CreateButtonStyled className=" btn float-right">
          {oldVendor ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default VendorModal;
