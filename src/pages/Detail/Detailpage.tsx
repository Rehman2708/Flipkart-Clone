import React from "react";
import { products } from "../../Data";
import { useParams } from "react-router-dom";
import "./detailPage.scss";
import { BsFillTagFill, BsInfoCircle } from "react-icons/bs";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
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
      <div className="productImgDiv">
        <AiFillHeart className="heartIcon" />
        <img className="productImage" src={product?.image} alt="" />
      </div>
      <div className="detailRight">
        <h1 className="productName">{product?.value}</h1>
        <h1 className="productPrice alignCenter">
          ₹{product?.price}
          <p className="discountOff alignCenter">
            {product?.discount}% off
            <BsInfoCircle className="infoIcon" />
          </p>
        </h1>
        <div className="ratings">
          <p className="ratingStar">
            <span>4.2</span> <AiFillStar />
          </p>
          <p className="ratingNumber">200 Ratings & 9 Reviews</p>
          <br />

          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            alt=""
            className="assuredImg"
          />
        </div>
        <p className="emi">No cost EMI available</p>
        <h3 className="productDetHead">Available offers</h3>
        {offers.map((ele: any, i: number) => (
          <p className="offer">
            <BsFillTagFill className="tagIcon" />
            {offers[i]}
          </p>
        ))}
        <p className="viewMoreOffers">view 1 more offer</p>
        <div className="section">
          <p className="sectionHead">Description</p>
          <p className="sectionInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus voluptas repellendus laboriosam, eveniet numquam
            aperiam reprehenderit nam magnam quis laborum. Libero ut iste harum
            iusto suscipit eveniet sapiente autem rem illum praesentium optio
            ipsam natus rerum totam, voluptas voluptatum veniam velit corporis,
            magnam reiciendis inventore error commodi dolorem nobis recusandae
            dolore soluta illo modi in! Quia tenetur assumenda laboriosam.
          </p>
        </div>
        <div>
          <p className="guarentee">
            1 year product warranty and 7 days replacement
          </p>
          <div>
            <h4>Hightlight</h4>
            <ul>
              <li>good</li>
              <li>better</li>
              <li>excelent</li>
              <li>wonderful</li>
              <li>beautiful</li>
              <li>awesome</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
