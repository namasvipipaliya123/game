
import React from "react";
import { ListGroup } from "react-bootstrap";
import {
  Globe,
  Megaphone,
  Headset,
  Book,
  Info,
  Download,
  ChevronRight,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./MobileMenu.css";

const MobileMenu = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  return (
    <div className="fixed-480-wrapper">
      <div className="menu-box">
        <ListGroup variant="flush" className="menu-list">
          <ListGroup.Item className="menu-item" onClick={() => navigate("/language")} style={{ cursor: "pointer" }}>
            <div className="left">
              <Globe className="menu-icon" />
              <span className="menu-text">{t("language")}</span>
            </div>
            <ChevronRight className="arrow-icon" />
          </ListGroup.Item>

          <ListGroup.Item className="menu-item" onClick={() => navigate("/announcement")} style={{ cursor: "pointer" }}>
            <div className="left">
              <Megaphone className="menu-icon" />
              <span className="menu-text">{t("announcement")}</span>
            </div>
            <ChevronRight className="arrow-icon" />
          </ListGroup.Item>

          <ListGroup.Item className="menu-item" onClick={() => navigate("/customer-service")} style={{ cursor: "pointer" }}>
            <div className="left">
              <Headset className="menu-icon" />
              <span className="menu-text">{t("customer_service")}</span>
            </div>
            <ChevronRight className="arrow-icon" />
          </ListGroup.Item>

          <ListGroup.Item className="menu-item" onClick={() => navigate("/guide")} style={{ cursor: "pointer" }}>
            <div className="left">
              <Book className="menu-icon" />
              <span className="menu-text">{t("beginners_guide")}</span>
            </div>
            <ChevronRight className="arrow-icon" />
          </ListGroup.Item>

          <ListGroup.Item className="menu-item" onClick={() => navigate("/about")} style={{ cursor: "pointer" }}>
            <div className="left">
              <Info className="menu-icon" />
              <span className="menu-text">{t("about_us")}</span>
            </div>
            <ChevronRight className="arrow-icon" />
          </ListGroup.Item>

          <ListGroup.Item className="menu-item" onClick={() => navigate("/download")} style={{ cursor: "pointer" }}>
            <div className="left">
              <Download className="menu-icon" />
              <span className="menu-text">{t("download_app")}</span>
            </div>
            <ChevronRight className="arrow-icon" />
          </ListGroup.Item>
           <ListGroup.Item className="menu-item" onClick={() => navigate("/download")} style={{ cursor: "pointer" }}>
            <div className="left">
              <Download className="menu-icon" />
              <span className="menu-text">{t("download_app")}</span>
            </div>
            <ChevronRight className="arrow-icon" />
          </ListGroup.Item>
           <ListGroup.Item className="menu-item" onClick={() => navigate("/download")} style={{ cursor: "pointer" }}>
            <div className="left">
              <Download className="menu-icon" />
              <span className="menu-text">{t("download_app")}</span>
            </div>
            <ChevronRight className="arrow-icon" />
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default MobileMenu;
