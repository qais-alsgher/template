import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaClock,
  FaPhoneVolume,
} from "react-icons/fa";
import { MdOutlineDoubleArrow, MdLocationOn } from "react-icons/md";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <h3>Al-sgher</h3>
          <ul className="social">
            <li className="facebook">
              <FaFacebookF />
            </li>
            <li className="twitter">
              <FaTwitter />
            </li>
            <li className="youtube">
              <FaYoutube />
            </li>
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <div className="box">
          <ul className="link">
            <li>
              <span>
                <MdOutlineDoubleArrow />
              </span>
              Important Link 1
            </li>
            <li>
              <span>
                <MdOutlineDoubleArrow />
              </span>
              Important Link 2
            </li>
            <li>
              <span>
                <MdOutlineDoubleArrow />
              </span>
              Important Link 3
            </li>
            <li>
              <span>
                <MdOutlineDoubleArrow />
              </span>
              Important Link 4
            </li>
            <li>
              <span>
                <MdOutlineDoubleArrow />
              </span>
              Important Link 5
            </li>
          </ul>
        </div>
        <div className="box">
          <div className="line">
            <span>
              <MdLocationOn />
            </span>
            <div className="info">
              Al-Zarqa,New Zarqa, 26 street ,Room Number 71
            </div>
          </div>
          <div className="line">
            <span>
              <FaClock />
            </span>
            <div className="info">Business Hours: From 10:00 To 18:00</div>
          </div>
          <div className="line">
            <span>
              <FaPhoneVolume />
            </span>
            <div className="info">+960 786827252</div>
          </div>
        </div>
        <div className="box">
          <div className="footer-gallery ">
            <img
              src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/gallery-02.png"
              alt="logo"
            />
            <img
              src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/gallery-02.png"
              alt="logo"
            />
            <img
              src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/gallery-02.png"
              alt="logo"
            />
            <img
              src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/gallery-02.png"
              alt="logo"
            />
            <img
              src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/gallery-02.png"
              alt="logo"
            />
            <img
              src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/gallery-02.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="copy">Made With Qais Alsgher &copy; 2023 </div>
    </div>
  );
}

export default Footer;
