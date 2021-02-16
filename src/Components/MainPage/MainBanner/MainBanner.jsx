import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainBanner.module.css';

const MainBanner = () => (
    <div className={styles.mainBanner}>
        <div className={styles.mainBannerNews}>
            <ul>
                <li><Link to="#">Чемпионат Туапсе по брейкдансу</Link></li>
                <li className={styles.activeNavItem}><Link to="#">Осенний батл уличных атлетов</Link></li>
                <li><Link to="#">Для тех кому не спится</Link></li>
                <li><Link to="#">Первые шаги в большой танцевальный мир</Link></li>
                <li><Link to="#">Первые шаги в большой </Link></li>
            </ul>
        </div>
    </div>
);

export default MainBanner;