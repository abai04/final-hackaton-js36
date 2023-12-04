import React from "react";
import bayerIMG from "../images/OIP (1).jpg";
import adminIMG from "../images/34dbb7893945ef99b7f3eeb6c4435286.jpg";
import courierIMG from "../images/lop.jpg";
import "./RegisterUserAdmin.css";

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
          <button className="btn_coise-1">Зарегистрироваться</button>
        </div>
        <div className="choice_class">
          <div className="images_admin">
            <img src={adminIMG} alt="admin" />
          </div>
          <ul className="text_list">
            <li className="text_title">Администратор</li>
          </ul>
          <p className="title_text">
            Kurultay поможет ускорить рост вашего бизнеса: наши технологии и
            пользовательская база созданы, чтобы увеличить продажи и открыть для
            вас новые возможности!
          </p>
          <button className="btn_coise-2">Зарегистрироваться</button>
        </div>
        <div className="choice_class">
          <div className="images_courer">
            <img src={courierIMG} alt="courier" />
          </div>
          <ul className="text_list">
            <li className="text_title">Покупатель</li>
          </ul>
          <p className="title_text">
            Вы можете заказать что вам нужно если вы хотите заранее заказать
            блюдо и заказать стулчик тогда вам нужно пройти идентификации: Потом
            вы можете заказать блюдо дома наши доставшики привезут вам до дома
          </p>
          <button className="btn_coise">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterUserAdmin;
