import React from 'react';
import {Layout} from 'antd';
import './App.css';
import Title from './Components/Title';
import Greeting from './Components/Greeting';
import Gallery from './Components/Gallery';
import Lyrics from './Components/Lyrics';
import Info from "./Components/Info";
import Location from './Components/Location';
import CongratulatoryMoney from './Components/CongratulatoryMoney';
import Share from './Components/Share';
import GroovePaper from './Assets/GroovePaper.png';

const {Footer} = Layout;
declare global {
  interface Window {
    Kakao: any;
    kakao: any;
  }
}

const App = () => {
  return (
    <>
      <Title/>
      <Greeting/>
      <Info/>
      <Gallery/>
      <Lyrics/>
      <Location/>
      <CongratulatoryMoney/>
      <Share/>
      <Footer
        style={{
          background: '#D7CCC8',
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        Copyright © 2022 Seonggu Kim
      </Footer>
    </>
  );
};

export default App;
