// src/pages/LanguagePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, CheckCircle, Circle } from "react-bootstrap-icons";
import i18n from "../i18n";
import "./LanguagePage.css"; // Optional

const LanguagePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(i18n.language || "en");

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "hi", label: "हिंदी", flag: "🇮🇳" },
  ];

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    setSelected(lang);
  };

  return (
    <div className="language-wrapper">
      <div className="language-header">
        <ArrowLeft className="back-icon" onClick={() => navigate(-1)} />
        <h4>{t("language")}</h4>
      </div>

      <div className="language-options">
        {languages.map((lang) => (
          <div
            key={lang.code}
            className={`language-option ${selected === lang.code ? "selected" : ""}`}
            onClick={() => handleChange(lang.code)}
          >
            <span className="flag">{lang.flag}</span>
            <span className="label">{lang.label}</span>
            {selected === lang.code ? (
              <CheckCircle className="icon selected-icon" />
            ) : (
              <Circle className="icon" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagePage;
