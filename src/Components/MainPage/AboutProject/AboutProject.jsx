import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutProject.module.css';

const AboutProject = () => (
    <main className={styles.main}>
        <div className={styles.sectionAbout}>
            <h1>О проекте</h1>
            <p>Немного о Автономной некоммерческой организации услуг в области культуры и спорта «Центр развития современной молодежной культуры и спорта». Вопреки распространенным утверждениям, управление политическими конфликтами неизбежно. Авторитаризм, однако, теоретически представляет собой эмпирический либерализм. Политическое учение Платона постоянно.</p>
        </div>
        <img src="/img/pentagram.jpg" alt="Дети на скейтах"/>
        <div className={styles.divider}></div>
        <div className={styles.sectionAllDisciplines}>
            <h2>Все дисциплины</h2>
            <p>Тут общие слова обо всех дисцеплинах + их перечисление. Немного о Автономной некоммерческой организации услуг в области культуры и спорта «Центр развития современной молодежной культуры и спорта». Вопреки распространенным утверждениям, управление политическими конфликтами неизбежно. Авторитаризм, однако, теоретически представляет собой эмпирический либерализм. Политическое учение Платона постоянно.</p>
        </div>
        <div className={styles.signInToSection}>
            <p>Наши мастера работают как с детьми так и со взрослыми. Вы можете записаться или записать своего ребенка на секцию пройдя по ссылке ниже</p>
            <Link to="#">Записаться на секцию</Link>
        </div>
    </main>
);

export default AboutProject;