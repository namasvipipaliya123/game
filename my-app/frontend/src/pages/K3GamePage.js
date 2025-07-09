import React, { useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { BsArrowLeft, BsWallet2 } from "react-icons/bs";
import "./K3GamePage.css";

const getRandomDice = () => Math.floor(Math.random() * 6) + 1;

const tabOptions = [
  { key: "1min", label: "K3 1 Min" },
  { key: "3min", label: "K3 3 Min" },
  { key: "5min", label: "K3 5 Min" },
  { key: "10min", label: "K3 10 Min" },
];

const generateRoundId = () => {
  const now = Date.now().toString();
  return now.slice(-12);
};

const K3GamePage = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [dice, setDice] = useState([1, 1, 1]);
  const [activeTab, setActiveTab] = useState("1min");
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const storedHistory = localStorage.getItem("k3-history");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          const newDice = [getRandomDice(), getRandomDice(), getRandomDice()];
          setDice(newDice);

          const total = newDice.reduce((a, b) => a + b, 0);
          const sumType = total <= 10 ? "Small" : "Big";
          const parity = total % 2 === 0 ? "Even" : "Odd";

          const roundId = generateRoundId();

          const newResult = {
            period: roundId,
            total,
            sumType,
            parity,
            dice: newDice,
          };

          const updatedHistory = [newResult, ...history.slice(0, 99)];
          setHistory(updatedHistory);
          localStorage.setItem("k3-history", JSON.stringify(updatedHistory));

          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [history]);

  const formatTime = (secs) => {
    const min = Math.floor(secs / 60).toString().padStart(2, "0");
    const sec = (secs % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <Container fluid className="k3-container text-white">
      <div className="k3-header">
        <BsArrowLeft size={24} />
        <img src="/img/logo.png" alt="tiranga" className="tiranga-logo" />
        <BsWallet2 size={24} />
      </div>

      <div className="wallet-box">
        <h4>₹0.00</h4>
        <p>Wallet balance</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button variant="danger">Withdraw</Button>
          <Button variant="success">Deposit</Button>
        </div>
      </div>

      <div className="k3-tab-buttons">
        {tabOptions.map((tab) => (
          <div
            key={tab.key}
            className={`k3-tab-btn ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <img src="/img/clock.png" alt="clock" className="clock-icon" />
            <div className="tab-label">{tab.label}</div>
          </div>
        ))}
      </div>

      <Card className="game-card text-center">
        <Card.Body>
          <p className="period">Period: {history[0]?.period || "----"}</p>
          <p className="timer">Time Remaining: {formatTime(timeLeft)}</p>

          <div className="dice-display">
            {dice.map((d, idx) => (
              <img
                key={idx}
                src={`/img/num-${d}.png`}
                alt={`dice ${d}`}
                className="dice-img"
              />
            ))}
          </div>
          <div className="k3-options">
            <div className="k3-option-btn">Total</div>
            <div className="k3-option-btn">2 same</div>
            <div className="k3-option-btn">3 same</div>
            <div className="k3-option-btn">Different</div>
          </div>
          <div className="k3-ball-list">
            {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((num, idx) => {
              const isRed = [3, 5, 7, 9, 11, 13, 15, 17].includes(num);
              const multiplier = [
                "207.36X", "69.12X", "34.56X", "20.74X",
                "13.83X", "9.88X", "8.3X", "7.68X",
                "7.68X", "8.3X", "9.88X", "13.83X",
                "20.74X", "34.56X", "69.12X", "207.36X",
              ][idx];
              const imgSrc = isRed ? "/img/red.png" : "/img/green.png";
              return (
                <div key={idx} className="k3-ball">
                  <div className="ball-image-wrapper">
                    <img src={imgSrc} alt={isRed ? "Red" : "Green"} />
                    <span className={`ball-number ${isRed ? "red-text" : "green-text"}`}>
                      {num}
                    </span>
                  </div>
                  <div className="multiplier">{multiplier}</div>
                </div>
              );
            })}
          </div>
          <div className="k3-bottom-buttons">
            <div className="btn small">Small<br /><span>2X</span></div>
            <div className="btn big">Big<br /><span>2X</span></div>
            <div className="btn even">Even<br /><span>2X</span></div>
            <div className="btn odd">Odd<br /><span>2X</span></div>
          </div>
        </Card.Body>
      </Card>
      <Card className="result-history mt-3">
        <Card.Body>
          <h5 className="text-center mb-3">Recent Results</h5>
          <div className="table-responsive">
            <table className="table table-bordered table-dark text-center align-middle">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Sum</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry, idx) => (
                  <tr key={idx}>
                    <td>{entry.period}</td>
                    <td>
                      {entry.total} - <strong>{entry.sumType}</strong> / <strong>{entry.parity}</strong>
                    </td>
                    <td>
                      {entry.dice.map((d, i) => (
                        <img
                          key={i}
                          src={`/img/num-${d}.png`}
                          alt={`dice ${d}`}
                          style={{ width: 24, height: 24, marginRight: 4 }}
                        />
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default K3GamePage;