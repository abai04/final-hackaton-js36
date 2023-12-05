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
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimatedDiv = animated.div;

const Home = () => {

  const slideInLeft = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(-50%)" },
    config: { tension: 100, friction: 10 },
  });

  const slideInRight = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(50%)" },
    config: { tension: 150, friction: 10 },
  });

  const [refTop, inViewTop] = useInView({
    triggerOnce: true,
  });

  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
  });

  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
  });

  const slideInFromTop = useSpring({
    opacity: inViewTop ? 1 : 0,
    transform: inViewTop ? "translateY(0%)" : "translateY(-50%)",
    config: config.slow, 
  });

  const slideInFromRight = useSpring({
    opacity: inViewRight ? 1 : 0,
    transform: inViewRight ? "translateX(0%)" : "translateX(50%)",
    config: config.slow, 
  });

  const slideInFromLeft = useSpring({
    opacity: inViewLeft ? 1 : 0,
    transform: inViewLeft ? "translateX(0%)" : "translateX(-50%)",
    config: config.slow, 
  });

  return (
    <div>
      <div className="nav_dev">
        <AnimatedDiv className="nav_left" style={slideInLeft}>
          <h2>Сервис доставки еды из ресторана</h2>
          <p>Удобный сервис, быстрая доставка, отслеживание статуса заказа и местоположения курьера. Скачивай и заказывай!</p>
          <a href="https://apps.apple.com/kg/app/kenguroo/id1486295195"><img src={appstore} alt="appstore"/></a>
          <a href="https://play.google.com/store/apps/details?id=kg.kenguru.app"><img src={playg} alt="playg" /></a>
        </AnimatedDiv>
        <AnimatedDiv className="nav_right" style={slideInRight}>
          <img src={phone} alt="phone" />
        </AnimatedDiv>
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
            src="https://storage.delikateska.ru/2/6/313f6e94-1cd3-4d0e-87c2-9e92ccac550e.jpg"
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
            src="https://nomadsland.travel/sites/default/files/styles/feature/public/2023-09/kyrgyz_dishes.jpg?h=6260a25f&itok=ppkq3Nxo"
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
            <h3>Лучший ресторан вашего города</h3>
            <p>
              В нашем приложении — огромный выбор еды. Закажите свою
              любимую еду или откройте для себя новый ресторан поблизости!
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
      <div className="foot_dev" >
        <h3>Kurultai для курьеров</h3>
        <p>Удобный график, вы сами выбирайте когда приступать к работе. Стабильный
        заработок, еженедельные выплаты. Отслеживайте свой рейтинг</p>
        <div className="courier-images-container">
        <AnimatedDiv style={slideInFromLeft} ref={refLeft}>
          <img src={curier1} alt="err" />
        </AnimatedDiv>
        <AnimatedDiv  style={slideInFromTop} ref={refTop}>
          <img src={curier2} alt="err" />
        </AnimatedDiv>
        <AnimatedDiv  style={slideInFromRight} ref={refRight}>
          <img src={curier3} alt="err" />
        </AnimatedDiv>
        </div>
      </div>
    </div>
  );
};

export default Home;
