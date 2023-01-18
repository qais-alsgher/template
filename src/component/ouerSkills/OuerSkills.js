import React from "react";
import "./ouerSkills.css";
import Title from "../title/Title";
function OuerSkills() {
  return (
    <div className="ouerSkills">
      <Title>Ouer Skills</Title>
      <div className="container">
        <img
          src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/skills.png"
          alt="skill"
        />
        <div className="skills">
          <div className="skill">
            <h3>
              HTML <span>80%</span>
            </h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>
              CSS<span>85%</span>
            </h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>
              React<span>70%</span>
            </h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "65%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>
              JavaScript<span>85%</span>
            </h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>
              C++<span>60%</span>
            </h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "60%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OuerSkills;
