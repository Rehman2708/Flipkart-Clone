import React from "react";
import { Box, Modal, TextField } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import handleLoginClose from "./LoginModal";
import "./loginModal.scss";
const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 20,
  borderRadius: 1,
};
export default function RegisterModal({
  open,
  handleOpen,
  handleClose,
  handleOpenLogin,
  hide,
}: {
  open: boolean;
  handleOpen: any;
  handleClose: any;
  handleOpenLogin: any;
  hide?: boolean;
}) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  const handleLogin = () => {
    handleOpenLogin();
    handleClose();
  };

  return (
    <div>
      <p className="registerButton" onClick={handleOpen}>
        New to Flipkart? Create an account
      </p>

      <Modal open={open} onClose={handleClose}>
        <Box className="loginModal" sx={modalStyle}>
          <div className="modalLeft">
            <h1 className="loginHead">Looks like you're new here!</h1>
            <p className="loginHeadText">
              Sign up with your mobile number to get started
            </p>
          </div>
          <div className="modalRight">
            <AiOutlineClose className="closeIcon" onClick={handleClose} />

            <TextField
              id="standard-basic"
              label="Enter Mobile Number"
              variant="standard"
            />
            <p className="terms">
              By continuing, you agree to Flipkart's
              <span className="blueText"> Terms of Use </span>
              and <span className="blueText"> Privacy Policy</span>.
            </p>
            <button className="loginButton">Continue</button>
            <button
              className="loginButton loginButton1 boxShadow1"
              onClick={handleLogin}
            >
              Existing User? Log in
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
