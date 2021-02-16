import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <nav>
            <ul>
                <li><Link to="/video">Видео</Link></li>
                <li><Link to="/events">События</Link></li>
                <li><Link to="/news">Новости</Link></li>
                <li><Link to="/disciplines">Дисциплины</Link></li>
                <li><Link to="/aboutus">О нас</Link></li>
                <li><Link to="/donate" className={styles.donate}>Пожертвовать</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;