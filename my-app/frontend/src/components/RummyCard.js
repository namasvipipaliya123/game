import React from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next"; 
import "./RummyCard.css";

const rummyGames = [
  { img: "/img/v8.png" },
];

const RummyCard = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed-480-wrapper">
      <Container fluid className="rummy-section py-3 px-2">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-white fw-bold">🃏 {t("rummy.title")}</h5>
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" size="sm">
              {t("rummy.all_count", { count: rummyGames.length })}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>{t("rummy.all_games")}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Row className="gx-2 gy-3">
          {rummyGames.map((game, idx) => (
            <Col xs={6} key={idx}>
              <Card className="rummy-card">
                <Card.Body className="p-2 d-flex">
                  <Card.Img variant="top" src={game.img} className="rummy-img my-2" />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RummyCard;
