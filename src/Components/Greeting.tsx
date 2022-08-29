import React from "react";
import { Divider } from "antd";
import styled from "styled-components";
import {
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
  BRIDE_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  GROOM_NAME,
} from "../Config";
import GroovePaper from "../Assets/GroovePaper.png";

const Wrapper = styled.div`
  background: #efebe9 url(${GroovePaper});
  padding-top: 42px;
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

const Content = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 1.75vh;
  font-weight: bolder;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0;
  width: 100%;
  text-align: center;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>결혼합니다</Title>
      </Divider>
      <Content>
        두 사람이 사랑으로 만나
        <br />
        진실과 이해로써 하나를 이루려고 합니다.
        <br />
        <br />
        오늘이 있기까지 지성으로 아끼고
        <br />
        보살펴 주신 여러 어른과 친지를 모시고
        <br />
        서약을 맺고자 하오니,
        <br />
        <br />
        바쁘신 중에라도 두 사람의 약속을
        <br />
        가까이에서 축복해 주시면 고맙겠습니다.
      </Content>
      <GroomBride>
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
        <br />
        <br />
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
