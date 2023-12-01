import React from 'react';
import './Home.css'
import cart from '../assets/cart.png'
import delivery from '../assets/delivery.svg'
import procent from '../assets/procent.png'
import video from '../assets/video-burger.png'

const Home = () => {
    return (
        <div>
            <div className='menu_app'>
                <div>
                    <img src={video} alt="" />
                    <h2>Доставка еды и многого другого</h2>
                </div>
                <div></div>
            </div>
            <div className='menu_dev'>
                <h2> Сэкономьте свое время и энергию с нашим сервисом доставки!
                </h2>
                <div className='menu_title'>
                    <div>
                        <img src={delivery} alt="" />
                        <h3>Лучшие рестораны вашего города</h3>
                        <p>В нашем приложении — огромный выбор ресторанов. Закажите свою любимую еду или откройте для себя новые рестораны поблизости!</p>
                    </div>
                    <div>
                        <img src={cart} alt="" />
                        <h3>Быстрая доставка</h3>
                        <p>Со скоростью молнии! Отправьте посылку или закажите доставку в черте города, и получите желаемое за считанные минуты.</p>
                    </div>
                    <div>
                        <img src={procent} alt="" />
                        <h3>Незабываемый день</h3>
                        <p>Встречай свой особенный день в стиле настоящего гурмана! Тебя ждет настоящий праздник вкуса - на расстоянии клика.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;