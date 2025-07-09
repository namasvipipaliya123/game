import React from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./CasinoGrid.css";

const casinos = [
  { img: "/img/crazy-time.png" },
  { img: "/img/dragon-tiger.png" },
  { img: "/img/american-routette.png" },
  { img: "/img/andar-bahar.png" },
  { img: "/img/auto-roulette.png" },
  { img: "/img/super-sic-bo.png" },
];

const CasinoGrid = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed-480-wrapper">
      <Container fluid className="casino-section py-3 px-2">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-white fw-bold">🎰 {t("casino.title")}</h5>
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" size="sm">
              {t("casino.all")}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>{t("casino.all_games")}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Row className="gx-2 gy-3">
          {casinos.map((game, idx) => (
            <Col xs={4} key={idx}>
              <Card className="casino-card text-white">
                <Card.Img variant="top" src={game.img} className="casino-img" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CasinoGrid;
