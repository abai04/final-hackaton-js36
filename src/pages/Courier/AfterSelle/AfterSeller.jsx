import React from "react";
import "./AfterSeller.css";

const AfterSeller = () => {
  return (
    <div className="after_seller">
      <div className="slr_container">
        <div className="slr_contaiber_top">
          <div className="slr_container_left">
            <h2> Вы сами решаете, какой получать доход.</h2>
          </div>
          <div className="slr_container_right">
            <div className="slr_right_img">
              <img
                style={{ width: "20%", margin: "25px 195px " }}
                src="https://couriers.glovoapp.com/svg/v-hand.svg"
                alt=""
              />
              <p
                style={{
                  width: "70%",
                  textAlign: "center",
                  fontFamily: "system-ui",
                  margin: "10px 73px",
                  fontSize: "20px",
                }}
              >
                {" "}
                Мы отправили вам электронное письмо с информацией о дальнейших
                шагах. Не забудьте проверить папку "Спам", если вы не получили
                от нас письмо-подтверждение.
              </p>
              <p
                style={{
                  fontSize: "24px",
                  color: "rgb(17, 174, 17)",
                  fontWeight: "600",
                  listStyleType: "none",
                  textAlign: "center",
                  fontFamily: "system-ui",
                  marginTop: "45px",
                }}
              >
                Мы ждем вас!
              </p>
            </div>
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

export default AfterSeller;
