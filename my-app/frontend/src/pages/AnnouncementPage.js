import React from "react";
import { Card } from "react-bootstrap";
import { BsMegaphone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Announcement.css";

const announcements = [
  {
    title: "Welcome To Tiranga Games!",
    content:
      "Welcome to the Tiranga Games! Greetings, Gamers and Enthusiasts! The Tiranga Games is more than just a platform for gaming. We invite you to join us, you'll find a variety of games, promo, bonus, luxury gold awards, Register now and win.",
    date: "2024-04-08 23:45:44",
  },
  {
    title: "Avoid Scammer And Phishing Link",
    content:
      "Please be sure to always use our official website for playing the games with the following link, https://tirangacasino.win. Please always check our official link to access our website and avoid scammers and phishing links",
    date: "2024-05-25 17:16:52",
  },
  {
    title: "Beware Of Fraud And Scammer",
    content:
      "If your deposit not receive, please send it directly to Tiranga Games Self-service Center (https://www.tirangaservice.com) wait till already get process, do not send to another person and trust anyone claiming to represent Tiranga Games. Always verify our website authenticity through the official community channels. Your safety and trust is our priority.",
    date: "2024-04-08 23:45:27",
  },
];

const AnnouncementList = () => {
  const navigate = useNavigate();

  return (
    <div className="announcement-container">
      <div className="announcement-header">
        <span className="back" onClick={() => navigate(-1)}>&lt;</span>
        <span className="title">Announcement</span>
        <span className="placeholder" />
      </div>

      <div className="announcement-list">
        {announcements.map((item, index) => (
          <Card key={index} className="announcement-card">
            <div className="announcement-header-line">
              <BsMegaphone className="announcement-icon" />
              <h6 className="announcement-title">{item.title}</h6>
            </div>
            <p className="announcement-text">{item.content}</p>
            <span className="announcement-date">{item.date}</span>
          </Card>
        ))}
        <div className="no-more">No more</div>
      </div>
    </div>
  );
};

export default AnnouncementList;
