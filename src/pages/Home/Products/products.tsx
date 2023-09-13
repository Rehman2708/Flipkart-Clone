import React from "react";
import "./products.scss";
import { products } from "../../../Data";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "../Home";
import Footer from "../../Footer/Footer";
// const bftData = [
//   {
//     image:
//       "https://rukminim2.flixcart.com/image/200/200/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=70",
//     value: "Coffee Powder",
//     discount: "10",
//     caption: "Nescafe, Continental & more",
//   },
//   {
//     image:
//       "https://rukminim2.flixcart.com/image/200/200/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70",
//     value: "Dry fruits",
//     discount: "20",
//     caption: "Nescafe, Continental & more",
//   },
//   {
//     image:
//       "https://rukminim2.flixcart.com/image/200/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70",
//     value: "Super hero Toys",
//     discount: "15",
//     caption: "Nescafe, Continental & more",
//   },
//   {
//     image:
//       "https://rukminim2.flixcart.com/image/200/200/jk1grrk0/car-pressure-washer/j/c/m/06008a7af0-bosch-original-imaf7hd6bv8g3m6r.jpeg?q=70",
//     value: "Car washer",
//     discount: "30",
//     caption: "Nescafe, Continental & more",
//   },
//   {
//     image:
//       "https://rukminim2.flixcart.com/image/200/200/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=70",
//     value: "Soft toys",
//     discount: "35",
//     caption: "Nescafe, Continental & more",
//   },
//   {
//     image:
//       "https://rukminim2.flixcart.com/image/200/200/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70",
//     value: "Tyres",
//     discount: "25",
//     caption: "Nescafe, Continental & more",
//   },
// ];
const monsoonData = [
  {
    image:
      "https://rukminim2.flixcart.com/image/200/200/xif0q/emergency-light/v/x/j/window-glass-and-seat-belt-cutter-4-modes-for-car-camping-hiking-original-imagt23cnaphw2vz.jpeg?q=70",
    value: "Emergency Lights",
    discount: "15",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/200/200/xif0q/pillow/u/o/6/10-white-6-white-villagers-original-imagkwfpnbmt3xgb.jpeg?q=70",
    value: "Pillows",
    discount: "40",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/200/200/l5h2xe80/blanket/a/d/s/premium-superfine-soft-single-abstract-printed-fleece-polar-original-imagg59y3qyurppu.jpeg?q=70",
    value: "Blankets",
    discount: "50",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/200/200/xif0q/shoe-rack/g/y/x/13-57-0-8-open-12-pair-shoe-stand-multipurpose-organiser-assure-original-imaghsmbzkffp4qh.jpeg?q=70",
    value: "Shoe racks & more",
    discount: "30",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/200/200/l4oi4cw0/plant-sapling/b/x/b/yes-perennial-yes-rose-plant-1-marine-tree-original-imagfgzmeghd2ruh.jpeg?q=70",
    value: "Plant saplings",
    discount: "35",
  },
  {
    image:
      "https://rukminim2.flixcart.com/image/200/200/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70",
    value: "Tyres",
    discount: "25",
  },
];

const Products = () => {
  console.log("products==>" + products);
  return (
    <>
      <div className="products">
        <div className="prodIntro flexCenter">
          <h1 className="prodIntroText">Beauty, Foods, Toys & More</h1>
          <button className="prodIntroButton">VIEW ALL</button>
          <img
            className="prodIntroImg"
            src="https://cdn.firstcry.com/education/2022/11/06094158/Toy-Names-For-Kids.jpg"
          />
        </div>
        {/* <div className="ProductsCarousel">
          {bftData.map((ele: any, i: number) => (
            <a href="/detail">
              <div className="productData flexCenter">
                <img src={ele.image} />
                <p>{ele.value}</p>
                <p className="discountRate">Upto {ele.discount}% off</p>
                <p className="prodCaption">{ele.caption}</p>
              </div>
            </a>
          ))}
        </div> */}
        <div className="ProductsCarousel">
          {products.map((products: any, i: number) => (
            <a href={`/details/${products.id}`}>
              <div className="productData flexCenter">
                <img src={products.image} />
                <p>{products.value}</p>
                <p className="discountRate">Upto {products.discount}% off</p>
                <p className="prodCaption">{products.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="products">
        <div className="prodIntro flexCenter">
          <h1 className="prodIntroText">Monsoon Essentials</h1>
          <button className="prodIntroButton">VIEW ALL</button>
        </div>
        <div className="ProductsCarousel">
          {monsoonData.map((ele: any, i: number) => (
            <div className="productData flexCenter">
              <img src={ele.image} />
              <p>{ele.value}</p>
              <p className="discountRate">Upto {ele.discount}% off</p>
              {/* <p className="prodCaption">{ele.caption}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
