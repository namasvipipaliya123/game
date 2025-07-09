import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFileAlt, FaBookOpen } from "react-icons/fa";
import "./AboutPage.css";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
   
      <div className="about-header">
        <span className="back" onClick={() => navigate(-1)}>&lt;</span>
        <span className="title">About us</span>
        <span className="placeholder" />
      </div>

   
      <div className="about-top-image">
        <img src="/img/about-bg.png" alt="About Us" />
      </div>

     
      <div className="about-items">
        <div className="about-item" onClick={() => navigate("/confidentiality")}>
          <FaFileAlt className="about-icon" />
          <span>Confidentiality Agreement</span>
          <span className="arrow">{">"}</span>
        </div>
        <div className="about-item" onClick={() => navigate("/risk-disclosure")}>
          <FaBookOpen className="about-icon" />
          <span>Risk Disclosure Agreement</span>
          <span className="arrow">{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
