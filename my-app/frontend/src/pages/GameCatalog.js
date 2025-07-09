import React from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa"; 
import "./GameCatalog.css";

const categories = ["Sports", "PVC", "Fishing", "Mini games"];

const games = [
  { img: "/img/a-1.png" },
  { img: "/img/a-2.png" },
  { img: "/img/a-3.png" },
  { img: "/img/a-4.png" },
  { img: "/img/a-5.png" },
  { img: "/img/a-6.png" },
  { img: "/img/a-7.png" },
  { img: "/img/a-8.png" },
  { img: "/img/a-9.png" },
  { img: "/img/a-10.png" },
  { img: "/img/a-11.png" },
  { img: "/img/a-12.png" },
  { img: "/img/a-13.png" },
  { img: "/img/a-14.png" },
  { img: "/img/a-15.png" },
  { img: "/img/a-16.png" },
  { img: "/img/a-17.png" },
  { img: "/img/a-18.png" },
  { img: "/img/a-19.png" },
  { img: "/img/a-20.png" },
  { img: "/img/a-21.png" },
  { img: "/img/a-22.png" },
  { img: "/img/a-23.png" },
  { img: "/img/a-24.png" },
  { img: "/img/a-25.png" },
  { img: "/img/a-26.png" },
  { img: "/img/a-27.png" },
  { img: "/img/a-28.png" },
  { img: "/img/a-29.png" },
  { img: "/img/a-30.png" },
  { img: "/img/a-31.png" },
  { img: "/img/a-32.png" },
  { img: "/img/a-33.png" },
  { img: "/img/a-34.png" },
  { img: "/img/a-35.png" },
  { img: "/img/a-36.png" },
];

const GameCatalog = () => {
  return (
    <div className="catalog-wrapper">
      <div className="mobile-container">
        <Container fluid className="p-3">

          <div className="d-flex justify-content-between align-items-center mb-3 top-header">
            <div className="back-arrow">
              <FaArrowLeft size={18} />
            </div>
            <div className="text-white fw-bold text-center justify-content-center">All</div>
          </div>

      
          <Nav variant="pills" className="category-tabs mb-3" fill>
            {categories.map((cat, idx) => (
              <Nav.Item key={idx}>
                <Nav.Link
                  eventKey={cat}
                  className={cat === "Mini games" ? "active" : ""}
                >
                  {cat}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

         
          <div className="section-title mb-2">Mini games</div>

          <Row>
            {games.map((game, idx) => (
              <Col xs={4} key={idx} className="mb-3">
                <Card className="game-tile text-center">
                  <Card.Body className="p-0">
                    <img
                      src={game.img}
                      alt={`game-${idx}`}
                      className="game-img"
                    />
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

export default GameCatalog;
