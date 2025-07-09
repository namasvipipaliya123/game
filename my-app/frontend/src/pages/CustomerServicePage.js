import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft, AiFillHome } from "react-icons/ai";
import "./CustomerServicePage.css"; 

const CustomerService = () => {
  const navigate = useNavigate();

  return (
    <div className="customer-service-wrapper">
      <div className="header">
        <AiOutlineArrowLeft onClick={() => navigate(-1)} />
        <span>Customer Service</span>
        <AiFillHome onClick={() => navigate("/")} />
      </div>
      <div className="image-section">
        <img src="/img/customer-service.png" alt="Customer Service" />
      </div>
    </div>
  );
};

export default CustomerService;
