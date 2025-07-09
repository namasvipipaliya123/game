// src/components/Leaderboard.js
import React from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./LeaderBoard.css";

const top3 = [
  {
    name: "Mem***FBE",
    amount: "₹1,906,788.92",
    avatar: "/img/w-1.png",
    rank: "2",
    color: "#bfc4d9",
    tag: "/img/no.2.png",
    crown: "/img/crown-2.png", 
  },
  {
    name: "Mem***SXI",
    amount: "₹6,308,328.31",
    avatar: "/img/w-2.png",
    rank: "1",
    color: "#fd8372",
    tag: "/img/no.1.png",
    crown: "/img/crown-1.png", 
  },
  {
    name: "Ana**dev",
    amount: "₹1,603,242.19",
    avatar: "/img/w-3.png",
    rank: "3",
    color: "#f5a351",
    tag: "/img/no.3.png",
    crown: "/img/crown-3.png", 
  },
];

const rest = [
  { rank: 4, name: "Gau***mmM", avatar: "/img/e-4.png", amount: "₹1,597,760.64" },
  { rank: 5, name: "Ab******c", avatar: "/img/e-5.png", amount: "₹1,459,918.00" },
  { rank: 6, name: "Mem***PFS", avatar: "/img/w-4.png", amount: "₹1,432,939.20" },
  { rank: 7, name: "Mem***AN2", avatar: "/img/w-4.png", amount: "₹1,432,055.20" },
  { rank: 8, name: "Mem***K8I", avatar: "/img/w-4.png", amount: "₹1,407,857.15" },
  { rank: 9, name: "Mem***DZ9", avatar: "/img/w-4.png", amount: "₹1,395,301.77" },
  { rank: 10, name: "Mem***DZ9", avatar: "/img/w-4.png", amount: "₹1,395,301.77" },
];

const Leaderboard = () => {
  const { t } = useTranslation();

  return (
    <div className="leaderboard-wrapper fixed-480-wrapper">
      <h5 className="text-white fw-bold text-center mb-3">{t("leaderboard.title")}</h5>

      <div className="top-three">
        {top3.map((user, idx) => (
          <div
            className={`top-box rank-${user.rank}`}
            key={idx}
            style={{ backgroundColor: user.color }}
          >
            <div className="crown">
              <img src={user.crown} alt="crown" className="crown-img" />
            </div>
            <Image src={user.avatar} roundedCircle className="top-avatar" />
            <div className="rank-tag">
              {user.tag?.includes(".png") || user.tag?.includes(".jpg") ? (
                <img src={user.tag} alt={`tag-${user.rank}`} className="tag-img" />
              ) : (
                user.tag
              )}
            </div>
            <div className="top-name">{user.name}</div>
            <div className="top-amount">{user.amount}</div>
          </div>
        ))}
      </div>

      <div className="rest-users">
        {rest.map((user, idx) => (
          <div className="rest-row" key={idx}>
            <div className="rest-left">
              <span className="rank-number">{user.rank}</span>
              <Image src={user.avatar} roundedCircle className="rest-avatar" />
              <span className="rest-name">{user.name}</span>
            </div>
            <div className="rest-amount">{user.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
