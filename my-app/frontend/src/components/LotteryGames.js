import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './LotteryGames.css';

const games = [
  { name: "Win Go", image: "/img/win-go.png", route: "/wingo/5min" },
  { name: "K3", image: "/img/k-3.png", route: "/k3" },
  { name: "5D", image: "/img/5-d.png", route: "/5d" },
  { name: "Trx Win Go", image: "/img/trx.png", route: "/trx" },
  { name: "MotoRace", image: "/img/moto.png", route: "/motorace" },
];

const LotterySection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="lottery-wrapper">
      <div className="lottery-container">
        <div className="lottery-header d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-white fw-bold">🎯 {t("lottery.title")}</h5>

          <Button
            variant="outline-light"
            className="lottery-all-btn"
            onClick={() => navigate('/lottery')}
          >
            {t("all")} 5 &gt;
          </Button>
        </div>

        <Row>
          {games.map((game, idx) => (
            <Col xs={6} className="mb-4" key={idx}>
              <div className="lottery-card">
                <h6 className="lottery-title">{game.name}</h6>
                <img src={game.image} alt={game.name} className="lottery-img" />
                <Button
                  className="lottery-go-btn"
                  onClick={() => navigate(game.route)}
                >
                  {t("go")} &gt;
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default LotterySection;
