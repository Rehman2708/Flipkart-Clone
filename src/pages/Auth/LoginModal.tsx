import React from "react";
import { Box, Modal, TextField } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import "./loginModal.scss";
import intro from "../../assets/Images/carousel/Auth.png";
const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 20,
  borderRadius: 1,
  outline: "none",
};

export default function LoginModal({
  open,
  handleOpen,
  handleClose,
  handleOpenRegister,
}: {
  open: boolean;
  handleOpen: any;
  handleClose: any;
  handleOpenRegister: any;
}) {
  const handleRegister = () => {
    handleOpenRegister();
    handleClose();
  };

  return (
    <div>
      <button className="loginButton" onClick={handleOpen}>
        Login
      </button>

      <Modal open={open} onClose={handleClose}>
        <Box className="loginModal" sx={modalStyle}>
          <div className="modalLeft">
            <h1 className="loginHead">Login</h1>
            <p className="loginHeadText">
              Get access to your Orders, Wishlist and Recommendations
            </p>
            <img className="introImg" src={intro} alt="" />
          </div>
          <div className="modalRight">
            <AiOutlineClose className="closeIcon" onClick={handleClose} />

            <TextField
              id="standard-basic"
              label="Enter Email/Mobile Number"
              variant="standard"
            />
            <p className="terms">
              By continuing, you agree to Flipkart's
              <span className="blueText"> Terms of Use </span>
              and <span className="blueText"> Privacy Policy</span>.
            </p>
            <button className="loginButton">Request OTP</button>
            <p className="registerButton" onClick={handleRegister}>
              New to Flipkart? Create an account
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
