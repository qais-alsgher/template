import React from "react";
import "./event.css";
import Title from "../title/Title";
function Event() {
  return (
    <div className="event">
      <Title>LATEST EVENTS</Title>
      <div className="container">
        <img
          src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/events.png"
          alt="event"
        />
        <div className="info">
          <div className="time">
            <div className="unit">
              <span>08</span>
              <span>Days</span>
            </div>
            <div className="unit">
              <span>04</span>
              <span>Hours</span>
            </div>
            <div className="unit">
              <span>08</span>
              <span>Minutes</span>
            </div>
          </div>
          <h3>Tech Masters Event 2023</h3>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              tenetur doloremque iusto ut adipisci quam ratione aliquam
              excepturi nulla in harum, veritatis porro
            </p>
          </div>
        </div>
        <div className="subscribe">
          <form action="">
            <input type="email" placeholder="Enter your email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Event;
