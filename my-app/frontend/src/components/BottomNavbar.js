
import React from "react";
import {
  HouseDoor,
  Clock,
  Gem,
  Wallet2,
  PersonCircle,
} from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; 
import "./BottomNavbar.css";

const BottomNavBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bottom-nav-wrapper">
      <Container className="fixed-480-wrapper">
        <div className="bottom-nav">
          <div className="nav-item active" onClick={() => navigate("/")}>
            <HouseDoor />
            <span>{t("bottomnav.home")}</span>
          </div>
          <div className="nav-item" onClick={() => navigate("/activity")}>
            <Clock />
            <span>{t("bottomnav.activity")}</span>
          </div>
          <div className="nav-item center-icon" onClick={() => navigate("/promotion")}>
            <div className="icon-circle">
              <Gem />
            </div>
            <span>{t("bottomnav.promotion")}</span>
          </div>
          <div className="nav-item" onClick={() => navigate("/wallet")}>
            <Wallet2 />
            <span>{t("bottomnav.wallet")}</span>
          </div>
          <div className="nav-item" onClick={() => navigate("/account")}>
            <PersonCircle />
            <span>{t("bottomnav.account")}</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomNavBar;
