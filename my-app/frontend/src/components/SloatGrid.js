import React from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next"; 
import "./SloatGrid.css";

const slots = [
  { img: "/img/jili-game.png" },
  { img: "/img/pg-game.png" },
  { img: "/img/m-game.png" },
  { img: "/img/v-game.png" },
  { img: "/img/coo-game.png" },
  { img: "/img/evolution.png" },
];

const SlotsGrid = () => {
  const { t } = useTranslation(); 

  return (
    <div className="fixed-480-wrapper">
      <Container fluid className="slots-section py-3 px-2">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-white fw-bold">🎰 {t("slots.title")}</h5>
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" size="sm">
              {t("slots.all_count", { count: 7 })}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>{t("all")}</Dropdown.Item>
              <Dropdown.Item>{t("slots.popular")}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Row className="gx-2 gy-3">
          {slots.map((slot, idx) => (
            <Col xs={4} key={idx}>
              <Card className="slot-card text-white text-center">
                <Card.Img variant="top" src={slot.img} className="slot-img" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SlotsGrid;
