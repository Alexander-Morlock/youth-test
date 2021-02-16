import React from 'react';
import styles from './NewsCard.module.css';

const NewsCard = (props) => (
    <div className={styles.newsCard}>
        <img src={props.imgUrl} alt={props.title} />
        <div className={styles.wrapper}>
            <p>{props.category}</p>
            <h2>{props.title}</h2>
            <h4>{props.date}</h4>
        </div>
    </div>
);

export default NewsCard;