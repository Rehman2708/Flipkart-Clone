import React from "react";
import "./filters.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { BsChevronDown } from "react-icons/bs";
const Filters = () => {
  return (
    <div className="filters">
      <h1>Filters</h1>
      <div>
        <h2>Price</h2>
        <input type="range" min="0" max="100" />
      </div>
      <div>
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
      <div>
        <input type="text" />
        <div>
          <input type="checkbox" />
          <p>Mobile</p>
        </div>
      </div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<BsChevronDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Discount</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <input type="checkbox" />
            <p>Mobile</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filters;
