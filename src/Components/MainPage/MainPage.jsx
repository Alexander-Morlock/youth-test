import React from 'react';
import AboutProject from './AboutProject/AboutProject';
import MainBanner from './MainBanner/MainBanner';
import NewsOfCenter from './NewsOfCenter/NewsOfCenter';
import PhotoGallery from './PhotoGallery/PhotoGallery';

const newsMock = [
    {
        category: `хип-хоп`,
        title: `Первые шаги в большой танцевальный мир`,
        date: `20 дек`,
        imgUrl: `/img/break-dance.jpg`
    },
    {
        category: `Паркур`,
        title: `Первые шаги в большой танцевальный мир`,
        date: `18 ноя`,
        imgUrl: `/img/break-dance.jpg`
    },
    {
        category: `Велоспорт`,
        title: `Первые шаги в большой танцевальный мир`,
        date: `10 ноя`,
        imgUrl: `/img/break-dance.jpg`
    },
    {
        category: `Роллер`,
        title: `Чемпионат ЮФО по велотриалу 2018`,
        date: `10 окт`,
        imgUrl: `/img/break-dance.jpg`
    },
    {
        category: `Скейтбординг`,
        title: `Первые шаги в большой танцевальный мир`,
        date: `8 окт`,
        imgUrl: `/img/break-dance.jpg`
    },
    {
        category: `Слэклайн`,
        title: `Первые шаги в большой танцевальный мир`,
        date: `28 сен`,
        imgUrl: `/img/break-dance.jpg`
    },
];

const MainPage = () => (
    <>
        <MainBanner />
        <AboutProject />
        <PhotoGallery />
        <NewsOfCenter news={newsMock}/>
    </>
);

export default MainPage;