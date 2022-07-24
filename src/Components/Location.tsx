import React from 'react';
import {Button, Divider, Modal} from 'antd';
import styled from 'styled-components';
import Map from './Map'
import GroovePaper from '../Assets/GroovePaper.png';
import BusInfo from "./BusInfo";

const Wrapper = styled.div`
  background: #efebe9 url(${GroovePaper});
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

const Content = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const SmallTitle = styled.p`
  font-size: 1.75vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const SmallContent = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
`;

const ContactButton = styled.div`
  display: inline-block;
  text-align: center;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
`;

const BusButton = styled(Button)`
  background: #53ee87;
  border-color: #53ee87;
  color: #ffffff;

  &:hover {
    background-color: #53ee87 !important;
    border-color: #53ee87 !important;
    color: #ffffff !important;
  }

  &:focus {
    background-color: #53ee87 !important;
    border-color: #53ee87 !important;
    color: #ffffff !important;
  }
`;
const Location = () => {
  const [busVisible, setBusVisible] = React.useState<boolean>(false);

  return (
    <Wrapper>
      <Divider plain style={{marginTop: 0, marginBottom: 32}}>
        <Title>오시는 길</Title>
      </Divider>
      <Map/>
      <Divider plain style={{marginTop: 0, marginBottom: 32}}>
        <Title>대중교통과 주차안내</Title>
      </Divider>
      <Content>
        <SmallTitle>지하철</SmallTitle>
        <SmallContent>
          <br/><a href="https://kko.to/uzYyxQVaG">2호선 을지로 입구역 5번 출구</a> (도보&nbsp;6분)
          <br/><a href="https://kko.to/9De8LMHuw">4호선 명동역 8번</a> (도보&nbsp;6분)
        </SmallContent>
        <SmallTitle>버스</SmallTitle>
        <SmallContent>
          <ContactButton onClick={() => setBusVisible(true)}>
            <br/>
            <BusButton style={{borderStyle: "initial"}}>버스 이용편 보기</BusButton>
          </ContactButton>
          <Modal
            title={<b>버스 이용편</b>}
            visible={busVisible}
            onOk={() => setBusVisible(false)}
            onCancel={() => setBusVisible(false)}
            cancelButtonProps={{style: {display: 'none'}}}
            okButtonProps={{style: {display: 'none'}}}
          >
            <BusInfo/>
          </Modal>
        </SmallContent>
        <SmallTitle>주차</SmallTitle>
        <SmallContent>
          <br/>명동 성당 지하 주차장 - 06:00~22:00
        </SmallContent>
      </Content>
    </Wrapper>
  );
};

export default Location;
