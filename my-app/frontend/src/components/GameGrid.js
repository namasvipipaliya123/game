import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./GameGrid.css";

const images = [
  "/img/a-1.png",
  "/img/a-2.png",
  "/img/a-3.png",
  "/img/a-4.png",
  "/img/a-5.png",
  "/img/a-6.png",
];

const GameGrid = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="g-wrapper">
      <Container className="game-wrapper">
        <div className="lottery-header d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-white fw-bold">🎯 {t("categories.original")}</h5>
          <Button
            variant="outline-light"
            className="g-all-btn"
            onClick={() => navigate("/all-games")}
          >
            {t("all")} 36 &gt;
          </Button>
        </div>

        <Row>
          {images.map((img, idx) => (
            <Col xs={4} key={idx} className="mb-3">
              <Card className="game-card text-center">
                <Card.Img src={img} className="game-icon" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GameGrid;
