import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./GameRecommendation.css";

const games = [
  { img: "/img/aviator-1.png", odds: "97.51%" },
  { img: "/img/aviator-2.png", odds: "96.64%" },
  { img: "/img/fortune-ox.png", odds: "96.67%" },
  { img: "/img/royal-fishing.png", odds: "96.84%" },
  { img: "/img/super-rich.png", odds: "96.5%" },
  { img: "/img/fortune-rabbit.png", odds: "96.12%" },
];

const GameRecommendation = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container className="game-section py-3 px-2">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="text-white fw-bold">🔥 {t("recommendation.title")}</h5>
        <Button
          variant="outline-light"
          size="sm"
          className="all-btn"
          onClick={() => navigate("/all-recommendations")}
        >
          {t("all")} 18 &gt;
        </Button>
      </div>

      <Row>
        {games.map((game, idx) => (
          <Col xs={4} className="mb-3" key={idx}>
            <Card className="game-card text-white">
              <Card.Img variant="top" src={game.img} className="game-img" />
              <Card.Body className="p-2">
                <div className="odds-box small text-center">
                  {t("recommendation.odds")} <strong>{game.odds}</strong>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GameRecommendation;
