import React from "react";
import "./products.scss";
import { products } from "../../../Data";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "../Home";
import Footer from "../../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Products = () => {
  const swiperBP = {
    600: {
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    740: {
      slidesPerView: 3,
      // spaceBetween: 20,
    },
    900: {
      slidesPerView: 4,
      // spaceBetween: 40,
    },
    1200: {
      slidesPerView: 5,
      // spaceBetween: 50,
    },
    1400: {
      slidesPerView: 6,
      // spaceBetween: 50,
    },
  };
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
          <Swiper
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={swiperBP}
          >
            {products.map(
              (ele: any, i: number) =>
                ele.category == "bft" && (
                  <div className="prodIntro flexCenter">
                    <SwiperSlide>
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
                    </SwiperSlide>
                  </div>
                )
            )}
          </Swiper>
        </div>
      </div>
      <div className="products">
        <div className="prodIntro flexCenter">
          <h1 className="prodIntroText">Monsoon Essentials</h1>
          <button className="prodIntroButton">VIEW ALL</button>
        </div>
        <div className="ProductsCarousel">
          <Swiper
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={swiperBP}
          >
            {products.map(
              (ele: any, i: number) =>
                ele.category == "mp" && (
                  <div className="prodIntro flexCenter">
                    <SwiperSlide>
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
                    </SwiperSlide>
                  </div>
                )
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Products;
