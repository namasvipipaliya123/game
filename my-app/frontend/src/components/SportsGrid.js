import React from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next"; 
import "./SportsGrid.css";

const sports = [
  { img: "/img/g.png" },
  { img: "/img/s.png" },
];

const SportsGrid = () => {
  const { t } = useTranslation(); 

  return (
    <div className="fixed-480-wrapper">
      <Container fluid className="sports-section py-3 px-2">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-white fw-bold">🏆 {t("sports.title")}</h5>
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" size="sm">
              {t("sports.all_count", { count: sports.length })}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>{t("all")}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Row className="gx-2 gy-3">
          {sports.map((sport, idx) => (
            <Col xs={4} key={idx}>
              <Card className="sports-card">
                <Card.Img variant="top" src={sport.img} className="sports-img" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SportsGrid;
