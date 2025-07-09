import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./GameRecommendationPage.css";

const fullGames = [
  { img: "/img/51.png",odds: "97.51%" },
  { img: "/img/52.png",  odds: "96.64%" },
  { img: "/img/53.png",  odds: "96.67%" },
  { img: "/img/54.png", odds: "96.84%" },
  { img: "/img/55.png",odds: "96.5%" },
  { img: "/img/56.png", odds: "96.12%" },
  { img: "/img/57.png", odds: "97.2%" },
  { img: "/img/58.png",odds: "97.99%" },
  { img: "/img/59.png", odds: "96.69%" },
  { img: "/img/60.png", odds: "96.08%" },
  { img: "/img/61.png", odds: "96.3%" },
  { img: "/img/62.png",odds: "96.5%" },
  { img: "/img/63.png",  odds: "96.25%" },
  { img: "/img/64.png", odds: "96.29%" },
  { img: "/img/65.png", odds: "96.16%" },
  { img: "/img/66.png",odds: "96.45%" },
  { img: "/img/67.png", odds: "96.7%" },
  { img: "/img/68.png", odds: "95.95%" },
];

const GameRecommendationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="recommend-page">
      <div className="recommend-container">
        <Container fluid className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Button
              variant="outline-light"
              size="sm"
              onClick={() => navigate(-1)}
            >
              ← 
            </Button>
            <h5 className="text-white fw-bold mb-0">All</h5>
          </div>

          <Row>
            {fullGames.map((game, idx) => (
              <Col xs={4} className="mb-3" key={idx}>
                <Card className="recommend-card text-white">
                  <Card.Img
                    variant="top"
                    src={game.img}
                    className="recommend-img"
                  />
                  <Card.Body className="p-2">
                    <Card.Title className="recommend-title text-center">
                      {game.title}
                    </Card.Title>
                    <div className="recommend-odds text-center">
                      odds of <strong>{game.odds}</strong>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GameRecommendationPage;
