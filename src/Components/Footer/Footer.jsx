import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.socialLinks}>
            <div className={styles.socialWrapper}>
                <p>Подписывайтесь на нас в соцсетях, чтобы быть в курсе событий:</p>
                <ul>
                    <li><a href="https://vk.com"><img src="img/vk-icon.svg" alt="vk.com" /></a></li>
                    <li><a href="https://youtube.com"><img src="img/youtube-icon.svg" alt="youtube.com" /></a></li>
                    <li><a href="https://facebook.com"><img src="img/facebook-icon.svg" alt="facebook.com" /></a></li>
                    <li><a href="https://instagram.com"><img src="img/instagram-icon.svg" alt="instagram.com" /></a></li>
                    <li><a href="https://twitter.com"><img src="img/twitter-icon.svg" alt="twitter.com" /></a></li>
                    <li><a href="https://ok.ru"><img src="img/ok-icon.svg" alt="ok.ru" /></a></li>
                    <li><a href="https://telegram.org"><img src="img/telegram-icon.svg" alt="telegram.org" /></a></li>
                </ul>
            </div>
        </div>
        <div className={styles.footerBottom}>
            <div className={styles.wrapper}>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link to="/video">Видео</Link></li>
                        <li><Link to="/events">События</Link></li>
                        <li><Link to="/news">Новости</Link></li>
                        <li><Link to="/disciplines">Дисциплины</Link></li>
                        <li><Link to="/aboutus">О нас</Link></li>
                    </ul>
                </nav>
                <form>
                    <input type="text" placeholder="Имя" />
                    <div className={styles.divider}></div>
                    <input type="tel" placeholder="Телефон" />
                    <div className={styles.divider}></div>
                    <input type="email" placeholder="Email" />
                    <button>Подписаться<br />на e-mail рассылку</button>
                </form>
            </div>
        </div>
        <div className={styles.copyright}>
        <p>© 2015-2018, sport.tuapse.com <span>При любом использовании материалов сайта ссылка на sport.tuapse.com обязательна</span><Link to="/donate" className={styles.footerDonate}>Пожертвовать</Link></p>
        </div>
    </footer>
);

export default Footer;