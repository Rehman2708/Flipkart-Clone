import React from "react";

import "./header.scss";
import {
  BsArrow90DegUp,
  BsBellFill,
  BsChevronDown,
  BsFillCartFill,
  BsFillCloudDownloadFill,
  BsFillQuestionSquareFill,
  BsSearch,
} from "react-icons/bs";
import LoginModal from "../Auth/LoginModal";
import RegisterModal from "../Auth/RegisterModal";
const Header = () => {
  //login modal

  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  //Register Modal
  const [openRegister, setOpenRegister] = React.useState(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);
  return (
    <div className="header flexCenter">
      <a href="/home">
        <img
          className="fkLogo"
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""
        />
        <p className="plusExplore">
          Explore
          <strong className="plusExplorePlus">Plus</strong>
        </p>
      </a>
      <div className="headInputTextDiv flexCenter">
        <input
          className="headInputText"
          type="text"
          placeholder="Search for products, brands and more"
        />
        <BsSearch />
      </div>
      <LoginModal
        open={openLogin}
        handleOpen={handleOpenLogin}
        handleClose={handleCloseLogin}
        handleOpenRegister={handleOpenRegister}
      />
      <div style={{ display: "none" }}>
        <RegisterModal
          open={openRegister}
          handleOpen={handleOpenRegister}
          handleClose={handleCloseRegister}
          handleOpenLogin={handleOpenLogin}
          hide={true}
        />
      </div>
      <p className="headOption">Become a Seller</p>
      <p className="headOption floatingParent flexCenter">
        More
        <BsChevronDown className="DownArrow" />
        <div className="floatingOptions boxShadow1">
          <p className="floatingOption">
            <BsBellFill />
            Notification Preference
          </p>
          <p className="floatingOption">
            <BsFillQuestionSquareFill />
            24/7 Customer Help
          </p>
          <p className="floatingOption">
            <BsArrow90DegUp />
            Advertise
          </p>
          <p className="floatingOption">
            <BsFillCloudDownloadFill />
            Download App
          </p>
        </div>
      </p>
      <p className="headOption flexCenter">
        <BsFillCartFill />
        Cart
      </p>
    </div>
  );
};

export default Header;
