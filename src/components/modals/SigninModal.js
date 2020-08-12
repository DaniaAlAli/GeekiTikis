import React, { useState } from "react";
import Modal from "react-modal";

//Style
import { CreateButtonStyled } from "../../styles";
import authStore from "../../stores/authStore";

//Store

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

const SigninModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const newUser = { ...user, [event.target.name]: event.target.value };
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Signup Modal"
    >
      <h3> New User </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group ">
          <label>UserName</label>
          <input
            required
            name="username"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={user.username}
          />
        </div>
        <div className="form-group ">
          <label>Password</label>
          <input
            required
            name="password"
            type="password"
            onChange={handleChange}
            className="form-control"
            value={user.password}
          />
        </div>

        <CreateButtonStyled className=" btn float-right">
          Sign in
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default SigninModal;
