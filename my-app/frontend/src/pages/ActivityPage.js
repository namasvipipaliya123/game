import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './ActivityPage.css';

const ActivityPage = () => {
  return (
    <div className="activity-wrapper">
      <Container fluid className="pt-3 px-3">
        <h5 className="text-white mb-2">Activity</h5>
        <p className="activity-subtext">
          Please remember to follow the event page <br />
          We will launch user feedback activities from time to time
        </p>

        <div className="quick-actions p-2 mb-3 rounded">
          <Row className="g-2">
            <Col xs={3}>
              <Card className="activity-card text-center">
                <Image src="/img/award-icon.png" className="activity-icon-img" />
                <div className="activity-text">Activity Award</div>
              </Card>
            </Col>
            <Col xs={3}>
              <Card className="activity-card text-center">
                <Image src="/img/bet-icon.png" className="activity-icon-img" />
                <div className="activity-text">Betting Rebate</div>
              </Card>
            </Col>
            <Col xs={3}>
              <Card className="activity-card text-center">
                <Image src="/img/jackpot-icon.png" className="activity-icon-img" />
                <div className="activity-text">Super Jackpot</div>
              </Card>
            </Col>
            <Col xs={3}>
              <Card className="activity-card text-center">
                <Image src="/img/gift-icon.png" className="activity-icon-img" />
                <div className="activity-text">First Gift</div>
              </Card>
            </Col>
          </Row>
        </div>

      <Row className="mt-3 g-2">
  <Col xs={6}>
    <Card className="activity-box text-center">
      <Image src="/img/game.png" className="activity-box-img" />
      <div className="activity-box-title">🎁 Gifts</div>
      <p className="activity-box-text">Enter the redemption code to receive gift rewards</p>
    </Card>
  </Col>
  <Col xs={6}>
    <Card className="activity-box text-center">
      <Image src="/img/bonus.png" className="activity-box-img" />
      <div className="activity-box-title">🕓 Attendance Bonus</div>
      <p className="activity-box-text">The more consecutive days you sign in, the higher the reward will be.</p>
    </Card>
  </Col>
</Row>


       <Card className="bonus-card text-white mx-auto">
  <Image src="/img/1.png" className="bonus-img" />

  <div className="bonus-label text-white">
    💸 First Deposit Bonus 💸
  </div>
</Card>

       <Card className="bonus-card text-white mx-auto">
  <Image src="/img/4.jpg" className="bonus-img" />

  <div className="bonus-label text-white">
   💰 Get Daily Check-in Bonus 💰
  </div>
</Card>
    <Card className="bonus-card text-white mx-auto">
  <Image src="/img/11.png" className="bonus-img" />

  <div className="bonus-label text-white">
  🚀Aviator Fly High & Win Big🚀
  </div>
</Card>
 <Card className="bonus-card text-white mx-auto">
  <Image src="/img/2.png" className="bonus-img" />

  <div className="bonus-label text-white">
  💰Lucky "10" Days Of Interest💰
  </div>
</Card>

 <Card className="bonus-card text-white mx-auto">
  <Image src="/img/10.png" className="bonus-img" />

  <div className="bonus-label text-white">
 ▶️ Youtube Creative Video ▶️
  </div>
</Card>
 <Card className="bonus-card text-white mx-auto">
  <Image src="/img/9.png" className="bonus-img" />

  <div className="bonus-label text-white">
❗️ Mysterious Gift ❗️
  </div>
</Card>
<Card className="bonus-card text-white mx-auto">
  <Image src="/img/3.png" className="bonus-img" />

  <div className="bonus-label text-white">
✨Member Wingo Winning Streak✨
  </div>
</Card>
<Card className="bonus-card text-white mx-auto">
  <Image src="/img/8.png" className="bonus-img" />

  <div className="bonus-label text-white">
💲Affiliate Program Tiranga💲
  </div>
</Card>
<Card className="bonus-card text-white mx-auto">
  <Image src="/img/6.png" className="bonus-img" />

  <div className="bonus-label text-white">
⚙️ Mission Bonus ⚙️
  </div>
</Card>
<Card className="bonus-card text-white mx-auto">
  <Image src="/img/5.png" className="bonus-img" />

  <div className="bonus-label text-white">
Agent Commission
  </div>
</Card>
      </Container>
    </div>
  );
};

export default ActivityPage;
