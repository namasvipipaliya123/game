import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsArrowLeft, BsWallet2, BsLightningCharge } from "react-icons/bs";

import "./WingoPage.css";

const tabImages = {
  "30sec": "/img/clock.png",
  "1min": "/img/clock.png",
  "3min": "/img/clock.png",
  "5min": "/img/clock.png",
};

const defaultTimers = {
  "30sec": 30,
  "1min": 60,
  "3min": 180,
  "5min": 300,
};

const formatTime = (s) => {
  const m = String(Math.floor(s / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${m}:${sec}`;
};

const generateSingleBall = () => Math.floor(Math.random() * 10);

const getColor = (num) => {
  if ([1, 3, 7, 9].includes(num)) return "limegreen";
  if ([2, 4, 6, 8].includes(num)) return "red";
  if ([0, 5].includes(num)) return "violet";
  return "white";
};

const getColorEmoji = (num) => {
  const emojis = [];
  if ([1, 3, 7, 9].includes(num)) emojis.push("🟢");
  if ([2, 4, 6, 8].includes(num)) emojis.push("🔴");
  if (num === 0) emojis.push(" 🟣 🔴");
  if (num === 5) emojis.push(" 🟣 🟢");
  return emojis;
};

const WingoPage = () => {
  const navigate = useNavigate();
  const { time } = useParams();
  const [timers, setTimers] = useState(defaultTimers);
  const [ballResults, setBallResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const saveResultToBackend = async (period, number, type) => {
    try {
      await axios.post("http://localhost:5000/api/results", {
        period,
        number,
        size: number >= 5 ? "Big" : "Small",
        color: getColorEmoji(number).join(" "),
        timestamp: new Date().toISOString(),
        type,
      });
    } catch (error) {
      console.error("Error saving result:", error.message);
    }
  };

  const fetchHistory = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/results?type=${time}`);
      setBallResults(res.data);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching history:", error.message);
    }
  }, [time]);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) => {
        const updatedTimers = { ...prevTimers };

        Object.keys(updatedTimers).forEach((key) => {
          if (updatedTimers[key] > 0) {
            updatedTimers[key] -= 1;
          } else {
            updatedTimers[key] = defaultTimers[key];
            const newBall = generateSingleBall();
            const period = Date.now();
            saveResultToBackend(period, newBall, key);
            if (key === time) fetchHistory();
          }
        });

        return updatedTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time, fetchHistory]);

  const currentData = ballResults.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(ballResults.length / pageSize);

  return (
    <div className="wingo-wrapper">
      <div className="wingo-header">
        <BsArrowLeft size={24} onClick={() => navigate(-1)} />
        <img src="/img/logo.png" alt="Logo" className="logo" />
        <div className="icons">
          <BsWallet2 size={20} />
          <BsLightningCharge size={20} />
        </div>
      </div>

      <div className="wallet-section">
        <p>₹0.00 <span className="refresh">🔄</span></p>
        <small>Wallet balance</small>
        <div className="wallet-buttons">
          <Button variant="danger">Withdraw</Button>
          <Button variant="success">Deposit</Button>
        </div>
      </div>

      <div className="notice">
        <span className="notice-icon">🔉</span>
        <span className="notice-text">Please use only official Tiranga platform to play games.</span>
        <button className="notice-detail-btn">
          <span className="drop-icon">🔥</span> Detail
        </button>
      </div>

      <div className="game-tabs">
        {Object.keys(tabImages).map((label) => (
          <div
            key={label}
            className={`tab ${time === label ? "active" : ""}`}
            onClick={() => navigate(`/wingo/${label}`)}
          >
            <img src={tabImages[label]} alt={label} className="tab-icon" />
            <div className="tab-label">WinGo <br />{label.replace("min", " Min")}</div>
          </div>
        ))}
      </div>

      <div className="game-info">
        <div className="how-to">
          <Button variant="light">📘 How to play</Button>
          <p className="game-name">WinGo {time.replace("min", " Min")}</p>
          <div className="balls">
            {ballResults.slice(0, 5).map((r, i) => (
              <div key={i} className="ball-img">
                <img src={`/img/ball-${r.number}.png`} alt={`ball-${r.number}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="timer">
          <p>Time remaining</p>
          <div className="countdown">{formatTime(timers[time] || 0)}</div>
          <small>Round: Auto-generated</small>
        </div>
      </div>

      <div className="color-buttons">
        <Button variant="success">Green</Button>
        <Button variant="secondary">Violet</Button>
        <Button variant="danger">Red</Button>
      </div>

      <div className="number-grid">
        {[...Array(10).keys()].map((num) => (
          <div key={num} className="number-ball-img">
            <img src={`/img/ball-${num}.png`} alt={`ball-${num}`} />
          </div>
        ))}
      </div>

      <div className="betting-section">
        <div className="betting-multipliers">
          <button className="bet-btn random">Random</button>
          <button className="bet-btn active">X1</button>
          <button className="bet-btn">X5</button>
          <button className="bet-btn">X10</button>
          <button className="bet-btn">X20</button>
          <button className="bet-btn">X50</button>
          <button className="bet-btn">X100</button>
        </div>
        <div className="big-small">
          <button className="big">Big</button>
          <button className="small">Small</button>
        </div>
      </div>

      <div className="game-history-section">
        <h5 className="history-title">Game History</h5>
        <div className="history-table-wrapper">
          <table className="table table-dark table-hover text-center">
            <thead>
              <tr>
                <th>Period</th>
                <th>Number</th>
                <th>Big Small</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((r, i) => (
                <tr key={i}>
                  <td>{r.period}</td>
                  <td>
                    {r.number === 0 ? (
                      <span className="gradient-0">{r.number}</span>
                    ) : r.number === 5 ? (
                      <span className="gradient-5">{r.number}</span>
                    ) : (
                      <span style={{ fontWeight: "bold", fontSize: "1.2rem", color: getColor(r.number) }}>
                        {r.number}
                      </span>
                    )}
                  </td>
                  <td>{r.size}</td>
                  <td>{r.color}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {totalPages > 1 && (
            <div className="pagination-buttons text-center my-3">
              {[...Array(totalPages).keys()].map((i) => (
                <button
                  key={i}
                  className={`mx-1 btn btn-sm ${currentPage === i + 1 ? "btn-primary" : "btn-outline-secondary"}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WingoPage;
