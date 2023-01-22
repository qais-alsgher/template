import React from "react";
import "./discount.css";

function Discount() {
  return (
    <div className="discount">
      <div className="image">
        <div className="content">
          <h2>We Have A Discount</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            asperiores consectetur, recusandae ratione provident necessitatibus,
            cumque delectus commodi fuga praesentium beatae. Totam vel similique
            laborum dicta aperiam odit doloribus corporis.
          </p>
          <img src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/discount.png" />
        </div>
      </div>
      <div className="form">
        <div className="content">
          <h2>Request A Discount</h2>
          <form>
            <input className="input" type="text" placeholder="Your Name" />
            <input className="input" type="email" placeholder="Your Email" />
            <input className="input" type="text" placeholder="Your Phone" />
            <textarea
              className="input"
              placeholder="Tell Us About Needs"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Discount;
