import React from "react";
import "./workSteps.css";
import Title from "../title/Title";
function WorkSteps() {
  return (
    <div className="workSteps">
      <Title>HOW IT WORKS ?</Title>
      <div className="container">
        <img src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/work-steps.png" />
        <div className="steps">
          <div className="box">
            <img src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/work-steps-1.png" />
            <div className="text">
              <h3>Business Analysis</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, nisl eget ultricies tincidunt, nisl elit lacinia nisl,
                nec ultricies elit nunc vel nisl.{" "}
              </p>
            </div>
          </div>
          <div className="box">
            <img src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/work-steps-2.png" />
            <div className="text">
              <h3>Architecture</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, nisl eget ultricies tincidunt, nisl elit lacinia nisl,
                nec ultricies elit nunc vel nisl.{" "}
              </p>
            </div>
          </div>
          <div className="box">
            <img src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/work-steps-3.png" />
            <div className="text">
              <h3>Developement</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor, nisl eget ultricies tincidunt, nisl elit lacinia nisl,
                nec ultricies elit nunc vel nisl.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSteps;
