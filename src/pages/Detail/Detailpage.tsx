import React from "react";
import { products } from "../../Data";
import { useParams } from "react-router-dom";
const Detailpage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  return (
    <div>
      <img src={product?.image} alt="" />
      <h1>{product?.id}</h1>
      {/* {productId} */}
    </div>
  );
};

export default Detailpage;
