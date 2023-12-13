import React from "react";
import bayerIMG from "../images/OIP (1).jpg";
import adminIMG from "../images/34dbb7893945ef99b7f3eeb6c4435286.jpg";
import courierIMG from "../images/lop.jpg";
import "./RegisterUserAdmin.css";
import { Link } from "react-router-dom";

const RegisterUserAdmin = () => {
  return (
    <div>
      <div className="container">
        <div className="choice_class">
          <div className="images_bayer">
            <img src={bayerIMG} alt="bayer" />
          </div>
          <ul className="text_list">
            <li className="text_title">Курьер</li>
          </ul>
          <p className="title_text">
            Хотите иметь свободу, гибкий график и достойную оплату? Добро
            пожаловать Kurultay с нами легко и удобно
          </p>
          <button className="btn_coise-1">
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "system-ui",
              }}
              to="/seller"
            >
              Зарегистрироваться
            </Link>{" "}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default RegisterUserAdmin;
