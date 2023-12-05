import React from "react";
import kurik from "../components/assets/kurik.svg";
import link1 from "../components/assets/business.svg.png";
import link2 from "../components/assets/countires.svg.png";
import link3 from "../components/assets/courier.svg.png";
import link4 from "../components/assets/employees.svg.png";
import Footer from "../components/Footer/Footer";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@700&display=swap');
</style>;

const AboutUsPage = () => {
  return (
    <div>
      <div>
        <img
          style={{
            width: "30%",
            height: "30%",
            marginTop: "5%",
            marginLeft: "9%",
          }}
          src={kurik}
        />
      </div>
      <div>
        <h2
          style={{
            fontFamily: "Noto Serif",
            fontWeight: "700",
            position: "absolute",
            bottom: "70%",
            left: "61%",
          }}
        >
          Мы-Kurultai
        </h2>
        <p
          style={{
            fontSize: "15px",
            fontWeight: "800",
            width: "48%",
            position: "absolute",
            left: "46%",
            bottom: "45%",
          }}
        >
          Мы — кыргызская технологическая компания и самый быстрорастущий
          мультикатегорийный игрок в СНГ. Поскольку технологии лежат в основе
          нашего бизнеса, мы создаем инновационные решения, объединяя клиентов,
          предприятия и курьеров, обеспечивая при этом устойчивое воздействие на
          наши сообщества и экосистемы.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          background: " green",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          gap: "20%",
        }}
      >
        {" "}
        <img src={link1} />
        <img src={link2} />
        <img src={link3} />
        <img src={link4} />
      </div>
      <div>
        <h2 style={{ fontSize: "36px", fontWeight: "700", marginLeft: "10%" }}>
          170 тыс
        </h2>
        <h4
          style={{
            fontWeight: "400",
            fontSize: "13px",
            marginLeft: "12%",
            fontStyle: "normal",
          }}
        >
          Магазины
        </h4>
        <h2
          style={{
            position: "absolute",
            fontSize: "36px",
            fontWeight: "700",
            marginLeft: "36.5%",
            bottom: "22%",
          }}
        >
          25
        </h2>
        <h4
          style={{
            position: "absolute",
            fontWeight: "400",
            fontSize: "13px",
            marginLeft: "36.4%",
            fontStyle: "normal",
            bottom: "19%",
          }}
        >
          Страны
        </h4>
        <h2
          style={{
            position: "absolute",
            fontSize: "36px",
            fontWeight: "700",
            marginLeft: "58%",
            bottom: "22%",
          }}
        >
          61 тыс
        </h2>
        <h4
          style={{
            position: "absolute",
            fontWeight: "400",
            fontSize: "13px",
            marginLeft: "57.5%",
            fontStyle: "normal",
            bottom: "19%",
          }}
        >
          Ежемесячные курьеры
        </h4>
        <h2
          style={{
            position: "absolute",
            fontSize: "36px",
            fontWeight: "700",
            marginLeft: "83%",
            bottom: "22%",
          }}
        >
          4 тыс
        </h2>
        <h4
          style={{
            position: "absolute",
            fontWeight: "400",
            fontSize: "13px",
            marginLeft: "84%",
            fontStyle: "normal",
            bottom: "19%",
          }}
        >
          Сотрудники
        </h4>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
