import React from "react";
import "./products.scss";
import { products, monsoonProducts } from "../../../Data";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "../Home";
import Footer from "../../Footer/Footer";
const Products = () => {
  return (
    <>
      {/* {productIntros.map((ele: any, i: number) => ( */}
      <div className="products">
        <div className="prodIntro flexCenter">
          <h1 className="prodIntroText">Beauty, Foods, Toys & More</h1>
          <button className="prodIntroButton">VIEW ALL</button>
          <img
            className="prodIntroImg"
            src="https://cdn.firstcry.com/education/2022/11/06094158/Toy-Names-For-Kids.jpg"
          />
        </div>
        <div className="ProductsCarousel">
          {products.map((ele: any, i: number) => (
            <a href={`/details/${ele.id}`}>
              <div className="productData flexCenter">
                <img src={ele.image} />
                <p>{ele.value}</p>
                <p className="discountRate">Upto {ele.discount}% off</p>
                <p className="prodCaption">{ele.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* ))} */}
      <div className="products">
        <div className="prodIntro flexCenter">
          <h1 className="prodIntroText">Monsoon Essentials</h1>
          <button className="prodIntroButton">VIEW ALL</button>
        </div>
        <div className="ProductsCarousel">
          {monsoonProducts.map((ele: any, i: number) => (
            <a href={`/details/${ele.id}`}>
              <div className="productData flexCenter">
                <img src={ele.image} />
                <p>{ele.value}</p>
                <p className="discountRate">Upto {ele.discount}% off</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
