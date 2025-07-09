import React from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./FishingGrid.css";

const fishingGames = [
  { img: "/img/royal-fishing-1.png" },
  { img: "/img/all-star.png" },
  { img: "/img/bombing.png" },
  { img: "/img/dinosaur.png" },
  { img: "/img/jackpot.png" },
  { img: "/img/dino-1.png" },
];

const FishingGrid = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed-480-wrapper">
      <Container fluid className="fishing-section py-3 px-2">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-white fw-bold">🎣 {t("fishing.title")}</h5>
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" size="sm">
              {t("fishing.all_count", { count: 14 })}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>{t("fishing.all_games")}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Row className="gx-2 gy-3">
          {fishingGames.map((game, idx) => (
            <Col xs={4} key={idx}>
              <Card className="fishing-card text-white">
                <Card.Img variant="top" src={game.img} className="fishing-img" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FishingGrid;
