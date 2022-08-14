import React from 'react';
import {Divider} from 'antd';
import styled from 'styled-components';
import {
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
  BRIDE_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  GROOM_NAME,
} from '../Config';
import GroovePaper from '../Assets/GroovePaper.png';

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
const ContentLyrics = styled.p`
  font-size: 1.35vh;
  line-height: 1.35;
  opacity: 0.5;
  margin-bottom: 0;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0;
  width: 100%;
  text-align: center;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{marginTop: 0, marginBottom: 32}} plain>
        <Title>결혼합니다</Title>
      </Divider>
      <Content>
        서로 마주 보며 다져온 사랑을
        <br/>
        이제 함께 한곳을 바라보며 걸어갈 수 있는
        <br/>
        큰 사랑으로 키우고자 합니다.
        <br/>
        저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게
        <br/>
        앞날을 축복해 주시면 감사하겠습니다.
      </Content>
      <GroomBride>
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br/>
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
        <br/>
        <br/>
      </GroomBride>
      <ContentLyrics>
        사랑은 한물 간 단어지만
        <br/>
        그래도 사랑은
        <br/>
        밤의 끝자락에 선 사람들을
        <br/>
        돌보는 데 필요하니까
        <br/>
        그래도 사랑은
        <br/>
        우리의 삶의 방식을
        <br/>
        바꿀 수 있으니까
        <br/>
        <br/>
        'Cause love's such an old-fashioned word
        <br/>
        And love dares you to care for
        <br/>
        The people on the edge of the night
        <br/>
        And love dares you to change our way of
        <br/>
        Caring about ourselves
        <br/>
        <br/>
        Queen, David Bowie - Under Pressure 중에서
        <br/>
        <br/>
        <br/>
      </ContentLyrics>
    </Wrapper>
  );
};

export default Greeting;
