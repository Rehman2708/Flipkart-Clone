import React from "react";
import { products } from "../../Data";
import "./productGrid.scss";
import Filters from "./Filter/Filters";
import { AiFillStar } from "react-icons/ai";
const ProductGrid = () => {
  return (
    <div className="mainProdGrid">
      <Filters />
      <div className="productGrid">
        {products.map((ele: any, i: number) => (
          <a href={`/details/${ele.id}`}>
            <div className="singleProduct">
              <div className="flexCenter">
                <img src={ele.image} className="productImage" alt="" />
              </div>
              <p className="productName">
                {ele.value} | best product | click to buy | fast delivery
              </p>
              <p className="productDiscount">
                Get {ele.discount ? ele.discount : "15"}% off
              </p>
              <div className="ratings">
                <p className="ratingStar">
                  <span>4.2</span> <AiFillStar />
                </p>
                <p className="ratingNumber">(201765)</p>
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                  className="assuredImg"
                />
              </div>
              <p className="productPrice">₹{ele.price}/-</p>
              <p className="bankOffer">Bank offer</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
