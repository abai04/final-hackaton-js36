import React from "react";
import RegisterUserAdmin from "../RegisterCtg/RegisterUserAdmin";
import './Home.css';
import cart from '../assets/cart.png';
import delivery from '../assets/delivery.svg';
import procent from '../assets/procent.png';
import european from '../assets/european.jpeg';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: '600px', objectFit: 'cover' }}
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
            style={{ height: '600px', objectFit: 'cover' }}
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
            style={{ height: '600px', objectFit: 'cover' }}
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
            style={{ height: '600px', objectFit: 'cover' }}
            src={european}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Европейская кухня</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="menu_dev">
        <h2>Сэкономьте свое время и энергию с нашим сервисом доставки!</h2>
        <div className="menu_title">
          <div>
            <img src={delivery} alt="" />
            <h3>Лучшие рестораны вашего города</h3>
            <p>
              В нашем приложении — огромный выбор ресторанов. Закажите свою любимую
              еду или откройте для себя новые рестораны поблизости!
            </p>
          </div>
          <div>
            <img src={cart} alt="" />
            <h3>Быстрая доставка</h3>
            <p>
              Со скоростью молнии! Отправьте посылку или закажите доставку в черте
              города, и получите желаемое за считанные минуты.
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
    </div>
  );
};

export default Home;
