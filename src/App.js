import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Disciplines from './Components/Disciplines/Disciplines';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainPage from './Components/MainPage/MainPage';
import News from './Components/News/News';
import Page404 from './Components/Page404/Page404';
import Video from './Components/Video/Video';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>

          <Route path='/' exact>
            <MainPage />
          </Route>

          <Route path='/video' exact>
            <Video />
          </Route>

          <Route path='/events' exact>
            <Events />
          </Route>

          <Route path='/news' exact>
            <News />
          </Route>

          <Route path='/disciplines' exact>
            <Disciplines />
          </Route>

          <Route path='/aboutus' exact>
            <AboutUs />
          </Route>

          <Route>
            <Page404 />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
