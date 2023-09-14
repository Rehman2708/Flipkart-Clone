import React, { useState } from "react";
import "./products.scss";
import { products } from "../../../Data";

import ItemsCarousel from "react-items-carousel";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const Products = () => {
  const [active, setaAtive] = useState(0);
  const [active1, setaAtive1] = useState(0);
  const innerWidth = window.innerWidth;

  return (
    <>
      <div className="products">
        <div className="prodIntro flexCenter">
          <h1 className="prodIntroText">Beauty, Foods, Toys & More</h1>
          <a href="/allproducts">
            <button className="prodIntroButton">VIEW ALL</button>
          </a>
          <img
            className="prodIntroImg"
            src="https://cdn.firstcry.com/education/2022/11/06094158/Toy-Names-For-Kids.jpg"
          />
        </div>
        <div className="ProductsCarousel">
          <div style={{ width: "100%" }}>
            <ItemsCarousel
              requestToChangeActive={(value: any) => setaAtive(value)}
              activeItemIndex={active}
              numberOfCards={4}
              gutter={0}
              autoPlay={true}
              timeout={0}
              disableSwipe={true}
              leftChevron={<BsChevronCompactLeft className="catCarouselIcon" />}
              rightChevron={
                <BsChevronCompactRight className="catCarouselIcon" />
              }
            >
              {products.map(
                (ele: any, i: number) =>
                  ele.category == "bft" && (
                    <div className="prodIntro flexCenter">
                      <a href={`/details/${ele.id}`}>
                        <div className="productData flexCenter">
                          <img src={ele.image} />
                          <p>{ele.value}</p>
                          {ele.discount && (
                            <p className="discountRate">
                              Upto {ele.discount}% off
                            </p>
                          )}
                        </div>
                      </a>
                    </div>
                  )
              )}
            </ItemsCarousel>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="prodIntro flexCenter">
          <h1 className="prodIntroText">Monsoon Essentials</h1>
          <button className="prodIntroButton">VIEW ALL</button>
        </div>
        <div className="ProductsCarousel">
          <div style={{ width: "100%" }}>
            <ItemsCarousel
              requestToChangeActive={(value: any) => setaAtive1(value)}
              activeItemIndex={active1}
              numberOfCards={innerWidth < 1000 ? 3 : 5}
              gutter={0}
              autoPlay={true}
              timeout={0}
              disableSwipe={true}
              leftChevron={<BsChevronCompactLeft className="catCarouselIcon" />}
              rightChevron={
                <BsChevronCompactRight className="catCarouselIcon" />
              }
            >
              {products.map(
                (ele: any, i: number) =>
                  ele.category == "mp" && (
                    <div className="prodIntro flexCenter">
                      <a href={`/details/${ele.id}`}>
                        <div className="productData flexCenter">
                          <img src={ele.image} />
                          <p>{ele.value}</p>
                          {ele.discount && (
                            <p className="discountRate">
                              Upto {ele.discount}% off
                            </p>
                          )}
                        </div>
                      </a>
                    </div>
                  )
              )}
            </ItemsCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
