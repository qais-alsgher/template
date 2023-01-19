import React from "react";
import "./stats.css";
import { FaMoneyBillAlt, FaCode } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { IoEarthSharp } from "react-icons/io5";
function Stats() {
  return (
    <div className="stats">
      <h2>Our Awesome Stats</h2>
      <div className="container">
        <div className="box">
          <span>
            <BsPerson />
          </span>
          <h2>150</h2>
          <p>Parson</p>
        </div>
        <div className="box">
          <span>
            <FaCode />
          </span>
          <h2>135</h2>
          <p>Projects</p>
        </div>
        <div className="box">
          <span>
            <IoEarthSharp />
          </span>
          <h2>500</h2>
          <p>Countries</p>
        </div>
        <div className="box">
          <span>
            <FaMoneyBillAlt />
          </span>
          <h2>500</h2>
          <p>Money</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
