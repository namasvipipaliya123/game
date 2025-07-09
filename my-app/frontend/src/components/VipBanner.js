import React from 'react';
import { Row, Col, Carousel, Button } from 'react-bootstrap';
import { BsVolumeUp } from 'react-icons/bs';
import { useTranslation } from 'react-i18next'; 
import './VipBanner.css';

const VipBanner = () => {
  const { t } = useTranslation(); 

  return (
    <div className="vip-fixed-container py-3">
      <Row>
        <Col xs={12}>
          <Carousel controls={false} indicators={false} interval={2500} fade>
            <Carousel.Item>
              <img className="d-block w-100 vip-banner-img" src="/img/1.png" alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 vip-banner-img" src="/img/2.png" alt="Slide 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 vip-banner-img" src="/img/3.png" alt="Slide 3" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12}>
          <div className="vip-alert d-flex align-items-center justify-content-between px-3 py-2 rounded-4">
            <div className="d-flex align-items-center">
              <BsVolumeUp className="me-2 volume-icon" />
              <span className="alert-text">
                {t("vipBanner.alert")}
              </span>
            </div>
            <Button variant="light" className="vip-detail-btn">
              {t("vipBanner.detail")}
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default VipBanner;
