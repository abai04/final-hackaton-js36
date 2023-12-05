import React from "react";
import "./Seller.css";

const SellerPage = () => {
  return (
    <div className="container">
      <div className="container_top">
        <div className="title_text">
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
          />
          <input className="input_bayer" type="email" placeholder="эл. почта" />
          <input className="input_bayer" type="tel" placeholder="+996" />
        </div>
      </div>
      <div className="buttom"></div>
    </div>
  );
};

export default SellerPage;
