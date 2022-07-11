import React from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import Map from './Map'
import GroovePaper from '../Assets/GroovePaper.png';

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-left: 42px;
  padding-right: 42px;
  padding-bottom: 42px;
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

// const Map = styled.div`
//   width: 75%;
//   max-width: 1024px;
// `;

const Location = () => {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      {/*<Image src={LocationMap} />*/}
      <Map/>
    </Wrapper>
  );
};

export default Location;
