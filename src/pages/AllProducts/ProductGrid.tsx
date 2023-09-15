import React from "react";
import { products } from "../../Data";
import "./productGrid.scss";
import Filters from "./Filter/Filters";
const ProductGrid = () => {
  return (
    <div className="mainProdGrid">
      <Filters />
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
    </div>
  );
};

export default ProductGrid;
