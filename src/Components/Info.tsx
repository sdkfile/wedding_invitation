import React from "react";
import { Divider } from "antd";
import styled from "styled-components";
import GroovePaper from "../Assets/GroovePaper.png";

const Wrapper = styled.div`
  background: #efebe9 url(${GroovePaper});
  padding-top: 20px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const WeddingInfo = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 0;
  width: 100%;
  text-align: center;
`;

const BoldText = styled.p`
  font-weight: bolder;
  font-size: 1.75vh;
`;

const Info = () => {
  return (
    <Wrapper>
      <WeddingInfo>
        <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
          <Title>예식 안내</Title>
        </Divider>
        좌석 충원을 위하여
        <br />
        메인홀 외 서브 홀을 마련하였습니다.
        <br />
        <br />
        서브 홀에서는 먼저 식사가 제공되오니
        <br />
        식사를 좀 더 빠르게 하실 하객분들께서는
        <br />
        서브 홀에 착석해 주시면 감사하겠습니다.
        <br />
        <br />
        <BoldText>
          축하 화환은 정중히 사양합니다.
          <br />
          마음만 감사히 받겠습니다.
        </BoldText>
        <br />
      </WeddingInfo>
    </Wrapper>
  );
};

export default Info;
