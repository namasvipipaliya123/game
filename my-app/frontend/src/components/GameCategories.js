import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './GameCategories.css';

const GameCategories = () => {
  const { t } = useTranslation();

  const categories = [
    { key: "popular", image: "/img/p-1.png", bgImage: "/img/p-2.png" },
    { key: "lottery", image: "/img/l-1.png", bgImage: "/img/l-2.png" },
    { key: "casino", image: "/img/c-1.png", bgImage: "/img/c-2.png" },
    { key: "slots", image: "/img/s-1.png", bgImage: "/img/s-2.png" },
    { key: "sports", image: "/img/sp-1.png", bgImage: "/img/sp-2.png" },
    { key: "rummy", image: "/img/r-1.png", bgImage: "/img/r-2.png" },
    { key: "fishing", image: "/img/f-1.png", bgImage: "/img/f-2.png" },
    { key: "original", image: "/img/o-1.png", bgImage: "/img/o-2.png" },
  ];

  return (
    <div className="category-page-wrapper">
      <div className="category-fixed-container">
        <Row>
          {categories.slice(0, 2).map((cat, idx) => (
            <Col xs={6} className="mb-3" key={idx}>
              <div
                className="category-card"
                style={{ backgroundImage: `url(${cat.bgImage})` }}
              >
                <img src={cat.image} alt={cat.key} className="category-img" />
                <div className="category-label">{t(`categories.${cat.key}`)}</div>
              </div>
            </Col>
          ))}
        </Row>

        <Row>
          {categories.slice(2).map((cat, idx) => (
            <Col xs={4} className="mb-3" key={idx + 2}>
              <div
                className="category-card"
                style={{ backgroundImage: `url(${cat.bgImage})` }}
              >
                <img src={cat.image} alt={cat.key} className="category-img" />
                <div className="category-label">{t(`categories.${cat.key}`)}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default GameCategories;
