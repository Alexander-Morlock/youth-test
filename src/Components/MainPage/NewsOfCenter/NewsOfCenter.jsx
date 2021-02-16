import React from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';
import styles from './NewsOfCenter.module.css';

const NewsOfCenter = (props) => (
    <section className={styles.newsOfCenter}>
        <h2>Новости центра</h2>
        {
        props.news.map((e, i) => <NewsCard 
                                category={e.category} 
                                title={e.title} 
                                date={e.date} 
                                imgUrl={e.imgUrl} key={i}/>)
        }
        <div className={styles.allNewsLink}><Link to="#">Все новости</Link></div>
    </section>
);

export default NewsOfCenter;