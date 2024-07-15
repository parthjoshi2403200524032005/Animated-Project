import React from "react";
import "./Text-Box.css";

const TextBox = () => {
  return (
    <>
      <div className="flex">
        <div className="container1">
          <div className="content1">
            <h1 className="heading1">Sustainable & Renewable Energy</h1>
            <p className="para1">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
        </div>

        <div className="container2">
          <div className="bg-div bg-div2 bg-div3"></div>
          <div className="content2">
            <h1 className="heading2">
              Safe & Reliable. Take Control of Your Power Production
            </h1>
            <p className="para2">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
        </div>

        <div className="container3">
          <div className="content3">
            <h1 className="heading3">Great Savings & Return on Investment</h1>
            <p className="para3">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="Textbackground2">
        <h1 className="text2">How Websites Are Designed ?</h1>
      </div>
      <div className="container flex">
        <div className="main-div ">
          <div className="div1 font ">200K</div>
          <br />
          <div className="div1">
            <span>Happy Customers</span>
          </div>
        </div>

        <div className="main-div">
          <div className="div1 font">3.1 Billion</div>
          <br />
          <div className="div1 ">
            <span>KwH of Clean Energy</span>
          </div>
        </div>

        <div className="main-div">
          <div className="div1 font">2.4 Million</div>
          <br />
          <div className="div1 ">
            <span>Metric Tons of Carbon Emissions Avoided</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBox;
