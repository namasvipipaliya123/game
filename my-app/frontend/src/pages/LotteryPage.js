import React from "react";
import { Container, Card } from "react-bootstrap";
import "./LotteryPage.css";

const games = [
  { name: "Win Go", desc: "Guess Number\nGreen/Red/Violet to win", image: "/img/win-go.png" },
  { name: "K3", desc: "Guess Number\nBig/Small/Odd/Even", image: "/img/k-3.png" },
  { name: "5D", desc: "Guess Number\nBig/Small/Odd/Even", image: "/img/5-d.png" },
  { name: "Trx Win", desc: "Guess Number\nGreen/Red/Violet to win", image: "/img/trx.png" },
  { name: "MotoRace", desc: "In the competition\nBet on the top three", image: "/img/moto.png" },
];

const LotteryPage = () => {
  return (
    <div className="lottery-page-wrapper">
      <div className="lottery-page-header">
        <span className="back-arrow" onClick={() => window.history.back()}>&lt;</span>
        <h5 className="m-0">All</h5>
      </div>

      <Container className="lottery-main-container">
        <h6 className="lottery-section-title">🎯 Lottery</h6>

        {games.map((game, idx) => (
          <Card key={idx} className="lottery-card-item mb-3">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <div className="lottery-text">
                <Card.Title className="lottery-title mb-1">{game.name}</Card.Title>
                <Card.Text className="lottery-desc">
                  {game.desc.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </Card.Text>
              </div>
              <div className="lottery-image-wrapper">
                <img src={game.image} alt={game.name} className="lottery-img" />
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default LotteryPage;
