import React from "react";
import "./filters.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const searchProd = [
  { category: "Mobile" },
  { category: "Jeans" },
  { category: "Shirt" },
  { category: "Shoes" },
  { category: "Laptops" },
  { category: "Fruits" },
];
const discounts = [
  { value: "50" },
  { value: "40" },
  { value: "30" },
  { value: "20" },
];
const Filters = () => {
  return (
    <div className="filters">
      <div className="paddingDiv">
        <h1 className="mainHead">Filters</h1>
      </div>
      <div className="paddingDiv">
        <h2 className="filterHead">Price</h2>
        <input className="rangeInput" type="range" min="0" max="100" />
        <div className="rangeInputDiv">
          <select name="" id="">
            <option value="">Min</option>
            <option value="">100</option>
            <option value="">200</option>
            <option value="">500</option>
            <option value="">1000</option>
          </select>
          <p>to</p>
          <select name="" id="">
            <option value="">Max</option>
            <option value="">5000</option>
            <option value="">10000</option>
            <option value="">50000</option>
            <option value="">100000</option>
          </select>
        </div>
      </div>
      <div className="paddingDiv">
        <h2 className="filterHead">Product</h2>
        <div className="searchInputDiv flexCenter">
          <AiOutlineSearch className="searchIcon" />
          <input
            className="searchInput"
            type="text"
            placeholder="Search product"
          />
        </div>
        {searchProd.map((ele: any, i: number) => (
          <div className="checkboxDiv">
            <input type="checkbox" />
            <p className="checkboxLabel">{ele.category}</p>
          </div>
        ))}
      </div>
      <div className="paddingDiv accordianPaddingDiv">
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h1 className="filterHead">Discount</h1>
          </AccordionSummary>
          <AccordionDetails>
            {discounts.map((ele: any, i: number) => (
              <div className="checkboxDiv">
                <input type="checkbox" />
                <p className="checkboxLabel">{ele.value}% or More</p>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="paddingDiv accordianPaddingDiv">
        <Accordion defaultExpanded={false}>
          <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h1 className="filterHead">Offers</h1>
          </AccordionSummary>
          <AccordionDetails>
            <div className="checkboxDiv">
              <input type="checkbox" />
              <p className="checkboxLabel">No cost EMI</p>
            </div>
            <div className="checkboxDiv">
              <input type="checkbox" />
              <p className="checkboxLabel">Special price</p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="paddingDiv accordianPaddingDiv">
        <Accordion defaultExpanded={false}>
          <AccordionSummary
            expandIcon={<BsChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h1 className="filterHead">Availability</h1>
          </AccordionSummary>
          <AccordionDetails>
            <div className="checkboxDiv">
              <input type="checkbox" />
              <p className="checkboxLabel">Include out of stock</p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Filters;
