import React from "react";
import "./categories.scss";
import carouselImg1 from "../../../assets/Images/carousel/carousel1.png";
import carouselImg2 from "../../../assets/Images/carousel/carousel2.png";
import carouselImg3 from "../../../assets/Images/carousel/carousel3.png";
import carouselImg4 from "../../../assets/Images/carousel/carousel4.png";
import carouselImg5 from "../../../assets/Images/carousel/carousel5.png";
import { BsChevronDown } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import Carousel from "react-multi-carousel";
const categories = [
  {
    image:
      "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    categoryName: "Grocery",
  },
  {
    image:
      "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    categoryName: "Mobile",
  },
  {
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
    categoryName: "Fashion",
  },
  {
    image:
      "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    categoryName: "Electronics",
  },
  {
    image:
      "https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
    categoryName: "Home & Furniture",
  },
  {
    image:
      "https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
    categoryName: "Appliances",
  },
  {
    image:
      "https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
    categoryName: "Travel",
  },
  {
    image:
      "https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
    categoryName: "Beauty, toys & more",
  },
  {
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
    categoryName: "Two wheelers",
  },
];

const carousel = [
  carouselImg1,
  carouselImg3,
  carouselImg2,
  carouselImg4,
  carouselImg5,
];
const FavouriteOptions = () => (
  <>
    <div className="floatingOptions boxShadow1">
      <p className="floatingOption">Mens top wear</p>
      <p className="floatingOption">Mens bottom wear</p>
      <p className="floatingOption">Women Ethnic</p>
      <p className="floatingOption">Western</p>
      <p className="floatingOption">Mens Footwear</p>
      <p className="floatingOption">Womens Footwear</p>
      <p className="floatingOption">Kids</p>
    </div>
  </>
);
const ElectronicsOptions = () => (
  <>
    <div className="floatingOptions boxShadow1">
      <p className="floatingOption">Gaming</p>
      <p className="floatingOption">Laptop & desktop</p>
      <p className="floatingOption">Health Accessories</p>
      <p className="floatingOption">Laptop accessories</p>
      <p className="floatingOption">Mobile accessories</p>
      <p className="floatingOption">Smart watch</p>
      <p className="floatingOption">HouseHold Appliances</p>
      <p className="floatingOption">Refrigerator</p>
      <p className="floatingOption">Washing machines</p>
      <p className="floatingOption">Mixers and grinders</p>
    </div>
  </>
);
const HomeOptions = () => (
  <>
    <div className="floatingOptions boxShadow1">
      <p className="floatingOption">Home Furnishing</p>
      <p className="floatingOption">Studio Furniture</p>
      <p className="floatingOption">Living room Furniture</p>
      <p className="floatingOption">Home Decor</p>
      <p className="floatingOption">Dining Furniyure</p>
      <p className="floatingOption">Tools & Utility</p>
      <p className="floatingOption">Lightining</p>
      <p className="floatingOption">Workspace Furniture</p>
      <p className="floatingOption">Kids Furniture</p>
    </div>
  </>
);
const BeautyOptions = () => (
  <>
    <div className="floatingOptions boxShadow1">
      <p className="floatingOption">Mens top wear</p>
      <p className="floatingOption">Mens bottom wear</p>
      <p className="floatingOption">Women Ethnic</p>
      <p className="floatingOption">Western</p>
      <p className="floatingOption">Mens Footwear</p>
      <p className="floatingOption">Womens Footwear</p>
      <p className="floatingOption">Kids</p>
    </div>
  </>
);
const VehicleOptions = () => (
  <>
    <div className="floatingOptions boxShadow1">
      <p className="floatingOption">Petrol Vehicles</p>
      <p className="floatingOption">Electric Vehicles</p>
    </div>
  </>
);
const Categories = () => {
  return (
    <div>
      <div className="categories boxShadow2">
        {categories.map((ele: any, i: number) => (
          <div className="flexCenter category" id="fashion">
            <img className="categoryImg" src={ele.image} />
            <p className="categoryName">
              {ele.categoryName}

              {(ele.categoryName == "Electronics" ||
                ele.categoryName == "Home & Furniture" ||
                ele.categoryName == "Fashion" ||
                ele.categoryName == "Two wheelers" ||
                ele.categoryName == "Beauty, toys & more") && (
                <BsChevronDown className="DownArrow" />
              )}
            </p>
            {ele.categoryName == "Fashion" && <FavouriteOptions />}
            {ele.categoryName == "Electronics" && <ElectronicsOptions />}
            {ele.categoryName == "Two wheelers" && <ElectronicsOptions />}
            {ele.categoryName == "Home & Furniture" && <HomeOptions />}
            {ele.categoryName == "Beauty, toys & more" && <BeautyOptions />}
          </div>
        ))}
      </div>
      <div className="carousel">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {carousel.map((ele: any, i: number) => (
            <SwiperSlide>
              <img src={ele} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
