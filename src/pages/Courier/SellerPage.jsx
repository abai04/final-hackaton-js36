import React, { useState } from "react";
import "./Seller.css";
import flag from "../../components/assets/categories-of-food.jpg";
import velo from "../../components/assets/courVelo.jpg";
import bake from "../../components/assets/courBake.jpg";
import drive from "../../components/assets/courDrive.jpg";
import { Link } from "react-router-dom";

const SellerPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [selectedCareer, setSelectedCareer] = useState(null);

  const handleContinue = () => {
    setNameError("");
    setEmailError("");
    setPhoneError("");

    if (!name) {
      setNameError("Введите имя и фамилию!");
    }
    if (!email) {
      setEmailError("Введите эл. почту!");
    }

    if (nameError || emailError || phoneError) {
      setErrorMessage("Заполните все поля");
    } else {
      setErrorMessage("");
    }
  };

  const handleCareerSelect = (career) => {
    setSelectedCareer(career);
  };

  return (
    <div className="container">
      <div className="center_style">
        <div className="container_top">
          <div className="title_texts">
            <h2>Вы сами решаете, какой получать доход.</h2>
          </div>
          <div className="Bayer_register">
            <h2 className="bayer_text">
              Зарегистрируйтесь и начните сотрудничество менее чем за сутки
            </h2>
            <input
              className="input_bayer"
              type="text"
              placeholder="Имя и фамилия"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p
              className="error_message"
              style={{ color: "red", fontSize: "12px", textAlign: "center" }}
            >
              {nameError}
            </p>
            <input
              className="input_bayer"
              type="email"
              placeholder="эл. почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p
              className="error_message"
              style={{ color: "red", fontSize: "12px", textAlign: "center" }}
            >
              {emailError}
            </p>
            <div className="tel">
              <div className="kg996">
                <img
                  style={{ width: "25%", marginRight: "12px" }}
                  src={flag}
                  alt="flag"
                />
                +996
              </div>
              <div className="inputs">
                <input
                  maxLength="9"
                  className="input_tel"
                  type="tel"
                  placeholder="707 07 07 07"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <p
                className="error_message"
                style={{ color: "red", fontSize: "12px", textAlign: "center" }}
              >
                {phoneError}
              </p>
            </div>
            <div className="works">
              <div
                className="wrokCour"
                onClick={() => handleCareerSelect("velo")}
              >
                <img
                  style={{
                    width: "80%",
                    margin: "20px 0 20px 0",
                    borderRadius: "15px",
                    border:
                      selectedCareer === "velo" ? "2px solid red" : "none",
                  }}
                  src={velo}
                  alt=""
                />
              </div>
              <div
                className="wrokCour1"
                onClick={() => handleCareerSelect("bake")}
              >
                <img
                  style={{
                    width: "80%",
                    margin: "20px 0 20px 0",
                    borderRadius: "15px",
                    border:
                      selectedCareer === "bake" ? "2px solid red" : "none",
                  }}
                  src={bake}
                  alt=""
                />
              </div>
              <div
                className="wrokCour2"
                onClick={() => handleCareerSelect("drive")}
              >
                <img
                  style={{
                    width: "80%",
                    margin: "20px 0 20px 0",
                    borderRadius: "15px",
                    border:
                      selectedCareer === "drive" ? "2px solid red" : "none",
                  }}
                  src={drive}
                  alt=""
                />
              </div>
            </div>
            <button className="btn_continue" onClick={handleContinue}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "24px",
                  fontFamily: "system-ui",
                }}
                to={name && email && phone ? "/afterseller" : ""}
              >
                ПРОДОЛЖИТЬ
              </Link>
            </button>
            <ul className="bt_title_link">
              <li className="bt_title_text">
                Нажимая эту кнопку, вы соглашаетесь с нашими
              </li>
            </ul>
            <ul className="bt_title_link">
              <a href="">
                <li className="bt_title_text2">
                  Положения и условияПолитика конфиденциальности
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="container_bottom">
          <div className="image_seller_img-text">
            <div className="seller_image-text">
              <img
                style={{ width: "40%", margin: "10px 90px" }}
                src="https://couriers.glovoapp.com/svg/intro/money.svg"
                alt=""
              />
              <ul style={{ listStyleType: "none", textAlign: "center" }}>
                <li
                  style={{
                    fontSize: "18px",
                    fontFamily: "system-ui",
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  Ваш заработок
                </li>
              </ul>
              <ul style={{ listStyleType: "none", textAlign: "center" }}>
                <li style={{ fontSize: "16px", fontFamily: "system-ui" }}>
                  Сумма, которую вы зарабатываете за каждый заказ, зависит от
                  вашего опыта и оценок.
                </li>
              </ul>
            </div>
            <div className="seller_image-text">
              <img
                style={{ width: "40%", margin: "10px 90px" }}
                src="https://couriers.glovoapp.com/svg/intro/calendar.svg"
                alt=""
              />
              <ul style={{ listStyleType: "none", textAlign: "center" }}>
                <li
                  style={{
                    fontSize: "18px",
                    fontFamily: "system-ui",
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  Сотрудничайте, когда угодно
                </li>
              </ul>
              <ul style={{ listStyleType: "none", textAlign: "center" }}>
                <li style={{ fontSize: "16px", fontFamily: "system-ui" }}>
                  Сотрудничайте и наслаждайтесь полной свободой. Только вы
                  выбираете, где и какие заказы принимать.
                </li>
              </ul>
            </div>
            <div className="seller_image-text">
              <img
                style={{ width: "40%", margin: "10px 90px" }}
                src="https://couriers.glovoapp.com/svg/intro/transport.svg"
                alt=""
              />
              <ul style={{ listStyleType: "none", textAlign: "center" }}>
                <li
                  style={{
                    fontSize: "18px",
                    fontFamily: "system-ui",
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  Вам понадобится...
                </li>
              </ul>
              <ul style={{ listStyleType: "none", textAlign: "center" }}>
                <li
                  style={{
                    fontSize: "16px",
                    fontFamily: "system-ui",
                  }}
                >
                  Улыбка "на все 32", транспортное средство (мотоцикл, велосипед
                  или автомобиль) и телефон iPhone или Android. Вы должны быть
                  старше 18 лет.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
