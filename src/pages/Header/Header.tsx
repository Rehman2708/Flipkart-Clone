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

const Header = () => {
  return (
    <div className="header flexCenter">
      <div>
        <img
          className="fkLogo"
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""
        />
        <p className="plusExplore">
          Explore
          <strong className="plusExplorePlus">Plus</strong>
        </p>
      </div>
      <div className="headInputTextDiv flexCenter">
        <input
          className="headInputText"
          type="text"
          placeholder="Search for products, brands and more"
        />
        <BsSearch />
      </div>
      <button className="loginButton">Login</button>
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
        Cart
        <BsFillCartFill />
      </p>
    </div>
  );
};

export default Header;
