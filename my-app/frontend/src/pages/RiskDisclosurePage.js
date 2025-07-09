import React from "react";
import { useNavigate } from "react-router-dom";
import "./RiskDisclosure.css";

const RiskDisclosurePage = () => {
  const navigate = useNavigate();

  return (
    <div className="risk-container">
      <div className="header">
        <span className="back" onClick={() => navigate(-1)}>&lt;</span>
        <span className="title">Risk Disclosure</span>
        <span className="placeholder" />
      </div>

      <div className="risk-content">
        <div className="risk-box">
          <img src="/img/license.png" alt="Risk Warning" className="risk-img" />
        </div>
      </div>
    </div>
  );
};

export default RiskDisclosurePage;
