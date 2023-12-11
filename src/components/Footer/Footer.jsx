import React from "react";
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <footer style={{ marginTop: "10%" }} className="footer-container">
      <div className="footer-links">
        <div className="link-group">
          <h3>Присоединиться к нам</h3>
          <ul>
            <li className="cat-1">Вакансии</li>
            <a href="/courier" className="cat-2">
              Курьеры
            </a>
            <li className="cat-3">Kurultai для партнеров</li>
          </ul>
        </div>

        <div className="link-group">
          <h3>Полезные ссылки</h3>
          <ul>
            <li>
              <a className="link-1" href="/aboutus">
                О нас
              </a>
            </li>
            <li>
              {" "}
              <a className="link-2" href="contact">
                Связаться с нами
              </a>{" "}
            </li>
          </ul>
        </div>

        <div className="link-group">
          <h3>Мы в социальных сетях</h3>
          <ul>
            <li>
              <a className="link-4">Instagram</a>
            </li>
            <li>
              <a className="link-5">Facebook</a>
            </li>
          </ul>
        </div>

        <div className="link-group">
          <h3>Клиентам</h3>
          <ul>
            <li className="link-6">Каталог</li>
            <li className="link-7">Для образования</li>
            <li className="link-8">Сертификаты</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
