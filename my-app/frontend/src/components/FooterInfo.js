import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./FooterInfo.css";

const logos = [
  "/img/co9.svg",
  "/img/micro.svg",
  "/img/jdb.svg",
  "/img/ev.svg",
  "/img/jili.svg",
  "/img/n1.svg",
];

const FooterInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed-480-wrapper">
      <Container fluid className="footer-section text-white p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <img src="/img/logo-1.png" alt="tiranga" className="footer-logo" />
          <img src="/img/18.svg" alt="tiranga" className="footer-logo" />
        </div>

        <Row className="g-2 mb-3">
          {logos.map((src, i) => (
            <Col xs={4} key={i}>
              <div className="footer-logo-box">
                <Image src={src} fluid />
              </div>
            </Col>
          ))}
        </Row>

        <div className="footer-text">
          <p>🔹 {t("footer.fair_play")}</p>
          <p>🔹 {t("footer.verified_games")}</p>
          <p>🔹 {t("footer.fast_support")}</p>
          <p className="warning">{t("footer.gambling_warning")}<br />{t("footer.age_restriction")}</p>
        </div>
      </Container>
    </div>
  );
};

export default FooterInfo;
