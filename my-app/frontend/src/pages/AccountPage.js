
import React from "react";
import { Container, Row, Col, Card} from "react-bootstrap";
import { BsWallet2, BsBank, BsCoin, BsShieldLock, BsClockHistory, BsArrowDownUp, BsBell } from "react-icons/bs";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="account-wrapper">
      <div className="account-header">
        <img src="/img/w-4.png" alt="user" className="account-avatar" />
        <div className="account-info">
          <h3 className="mb-0">MEMBERNGWXX2S <span className="vip-badge">VIP0</span></h3>
          <div className="text-warning small">UID：21436402</div>
          <div className="text-light small">Last login: 2025-06-25 16:44:38</div>
        </div>
      </div>

      <Card className="balance-card">
        <Card.Body>
          <div className="text-white-50">Total balance</div>
          <h4 className="text-white">₹0.00</h4>
          <Row className="text-center mt-3">
            <Col><BsWallet2 size={20} /><div>ARWallet</div></Col>
            <Col><BsBank size={20} /><div>Deposit</div></Col>
            <Col><BsCoin size={20} /><div>Withdraw</div></Col>
            <Col><BsShieldLock size={20} /><div>VIP</div></Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="option-card">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <div>
            <div>Safe</div>
            <div className="text-white small">The daily interest rate is 0.1%, and the income is calculated once every 1 minutes.</div>
          </div>
          <div className="text-warning fw-bold">₹0.00</div>
        </Card.Body>
      </Card>

      <Container className="mt-3">
        <Row className="g-2">
          <Col xs={6}><Card className="text-center p-2"><BsClockHistory /><div>Game History</div></Card></Col>
          <Col xs={6}><Card className="text-center p-2"><BsArrowDownUp /><div>Transaction</div></Card></Col>
          <Col xs={6}><Card className="text-center p-2"><BsBank /><div>Deposit</div></Card></Col>
          <Col xs={6}><Card className="text-center p-2"><BsCoin /><div>Withdraw</div></Card></Col>
        </Row>
      </Container>

      <Card className="notification-card mt-3">
        <Card.Body className="d-flex align-items-center justify-content-between">
          <div><BsBell size={20} /> Notification</div>
          <span className="badge bg-danger">10</span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AccountPage;
