import React from "react";
import "./pricing.css";
import Title from "../title/Title";
function Pricing() {
  return (
    <div className="pricing">
      <Title>PRICING PLANS</Title>
      <div className="container">
        <div className="box">
          <h3>Bisic</h3>
          <img src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/hosting-basic.png" />
          <div className="price">
            <span>10$</span>
            <span>Per Month</span>
          </div>
          <ul>
            <li>1 GB Disk Space</li>
            <li>10 GB Bandwidth</li>
            <li>5 Email Accounts</li>
            <li>1 MySQL Database</li>
            <li>1 Domain Name</li>
            <li>Basic Support</li>
          </ul>
          <a href="#">Choose Plan</a>
        </div>
        <div className="box Popular">
          <h3>Advanced</h3>
          <span className="label">Most Popular</span>
          <img src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/hosting-advanced.png" />
          <div className="price">
            <span>25$</span>
            <span>Per Month</span>
          </div>
          <ul>
            <li>2 GB Disk Space</li>
            <li>20 GB Bandwidth</li>
            <li>5 Email Accounts</li>
            <li>1 MySQL Database</li>
            <li>1 Domain Name</li>
            <li>Advanced Support</li>
          </ul>
          <a href="#">Choose Plan</a>
        </div>
        <div className="box">
          <h3>Professional</h3>
          <img src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/hosting-professional.png" />
          <div className="price">
            <span>35$</span>
            <span>Per Month</span>
          </div>
          <ul>
            <li>5 GB Disk Space</li>
            <li>50 GB Bandwidth</li>
            <li>10 Email Accounts</li>
            <li>5 MySQL Database</li>
            <li>1 Domain Name</li>
            <li>Professional Support</li>
          </ul>
          <a href="#">Choose Plan</a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
