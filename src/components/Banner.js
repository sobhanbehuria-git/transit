import React from "react";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <div className="hero-slider-content text-left">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact Us
                </li>
              </ol>
            </nav>

            <h1 className="slider-lead white">{props.heading}</h1>
            <p className="lead white">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
