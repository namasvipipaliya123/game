import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next"; 
import "./WinningInfo.css";

const winners = [
  { name: "Mem***VDH", amount: "19.60", avatar: "/img/w-1.png" },
  { name: "Mem***PSJ", amount: "490.00", avatar: "/img/w-2.png" },
  { name: "Mem***NGZ", amount: "98.00", avatar: "/img/w-3.png" },
  { name: "Mem***HVE", amount: "3,920.00", avatar: "/img/w-4.png" },
  { name: "Mem***VXI", amount: "58.80", avatar: "/img/w-5.png" },
];

const WinningInfo = () => {
  const { t } = useTranslation(); 

  return (
    <div className="fixed-480-wrapper winning-wrapper">
      <h5 className="winning-title">{t("winning.title")}</h5>

      {winners.map((user, index) => (
        <div className="winning-card" key={index}>
          <Row className="align-items-center">
            <Col xs={2}>
              <Image src={user.avatar} roundedCircle className="avatar" />
            </Col>
            <Col xs={4}>
              <div className="name">{user.name}</div>
            </Col>
            <Col xs={2}>
              <div className="lotto-badge">
                <img src="/img/p.png" alt="lotto" className="lotto-img" />
              </div>
            </Col>
            <Col xs={4}>
              <div className="receive-amount">
                {t("winning.receive")} ₹{user.amount}
              </div>
              <div className="subtext">{t("winning.subtext")}</div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default WinningInfo;
