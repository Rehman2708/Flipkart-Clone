import React from "react";
import { products } from "../../Data";
import { useParams } from "react-router-dom";
import "./detailPage.scss";
const offers = [
  "Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*",
  "Purchase now & get 1 surprise cashback coupon in Future",
  "10% Instant Discount on Canara Bank Credit Card Txns, up to ₹250 on orders of ₹2,000 and above",
  "5% Cashback on Flipkart Axis Bank Card",
];
const Detailpage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <div className="detailMain">
      <img className="productImage" src={product?.image} alt="" />
      <div className="detailRight">
        <h1>₹{product?.price}</h1>
        <h1>{product?.value}</h1>
        <h3>Available offers</h3>
        {offers.map((ele: any, i: number) => (
          <p>{offers[i]}</p>
        ))}
      </div>
    </div>
  );
};

export default Detailpage;
