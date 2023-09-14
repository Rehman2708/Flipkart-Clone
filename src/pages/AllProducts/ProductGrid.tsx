import React from "react";
import { products } from "../../Data";
import "./productGrid.scss";
const ProductGrid = () => {
  return (
    <>
      <div className="productGrid">
        {products.map((ele: any, i: number) => (
          <a href={`/details/${ele.id}`}>
            <div className="singleProduct flexCenter">
              <img src={ele.image} height={100} width={80} alt="" />
              {ele.value}
              {ele.discount}
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
