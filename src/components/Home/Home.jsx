import React from "react";
import "./Home.css";
import cart from "../assets/cart.png";
import delivery from "../assets/delivery.svg";
import procent from "../assets/procent.png";
import european from "../assets/european.jpeg";
import appstore from "../assets/appstore.svg";
import playg from "../assets/playg.svg";
import phone from "../assets/phone.png";
import curier1 from "../assets/curier1.png";
import curier2 from "../assets/curier2.png";
import curier3 from "../assets/curier3.png";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div className="nav_dev">
        <div className="nav_left">
          <h2>Сервис доставки еды из ресторана</h2>
          <p>Удобный сервис, быстрая доставка, отслеживание статуса заказа и местоположения курьера. Скачивай и заказывай!</p>
          <a href="https://apps.apple.com/kg/app/kenguroo/id1486295195"><img src={appstore} alt="appstore"/></a>
          <a href="https://play.google.com/store/apps/details?id=kg.kenguru.app"><img src={playg} alt="playg" /></a>
        </div>
        <div className="nav_right">
          <img src={phone} alt="phone" />
        </div>
      </div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: "700px", objectFit: "cover"}}
            src="https://www.advantour.com/img/kyrgyzstan/dishes/kyrgyz-dishes.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Традиционная кухня</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ height: "700px", objectFit: "cover" }}
            src="https://milaclub.com/uploads/2018/06/milaclub-aziatskaya-kuhnya.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Азиатская кухня</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "700px", objectFit: "cover" }}
            src="https://too.kg/wp-content/uploads/Natsionalnye-blyuda-KR.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Национальная кухня</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "700px", objectFit: "cover" }}
            src={european}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Европейская кухня</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="menu_dev">
        <h2 className="menu-h">
          Сэкономьте свое время и энергию с нашим сервисом доставки!
        </h2>
        <div className="menu_title">
          <div>
            <img src={delivery} alt="" />
            <h3>Лучшие рестораны вашего города</h3>
            <p>
              В нашем приложении — огромный выбор ресторанов. Закажите свою
              любимую еду или откройте для себя новые рестораны поблизости!
            </p>
          </div>
          <div>
            <img src={cart} alt="" />
            <h3>Быстрая доставка</h3>
            <p>
              Со скоростью молнии! Отправьте посылку или закажите доставку в
              черте города, и получите желаемое за считанные минуты.
            </p>
          </div>
          <div>
            <img src={procent} alt="" />
            <h3>Незабываемый день</h3>
            <p>
              Встречай свой особенный день в стиле настоящего гурмана! Тебя ждет
              настоящий праздник вкуса - на расстоянии клика.
            </p>
          </div>
        </div>
      </div>
      <div className="foot_dev">
        <h3>Kurultai для курьеров</h3>
        <p>Удобный график, вы сами выбирайте когда приступать к работе. Стабильный
        заработок, еженедельные выплаты. Отслеживайте свой рейтинг</p>
        <div>
          <img src={curier1} alt="err" />
          <img src={curier2} alt="err" />
          <img src={curier3} alt="err" />
        </div>
      </div>
    </div>
  );
};

export default Home;
