import React from "react";
import { Divider } from "antd";
import styled from "styled-components";
import GroovePaper from "../Assets/GroovePaper.png";

const Wrapper = styled.div`
  background: #efebe9 url(${GroovePaper});
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
`;

const ContentLyrics = styled.p`
  font-size: 1.45vh;
  line-height: 1.35;
  opacity: 0.7;
  margin-bottom: 0;
  width: 100%;
  text-align: center;
`;

const Lyrics = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain />
      <ContentLyrics>
        사랑은 한물 간 단어지만
        <br />
        그래도 사랑은
        <br />
        밤의 끝자락에 선 사람들을
        <br />
        돌보는 데 필요하니까
        <br />
        그래도 사랑은
        <br />
        우리의 삶의 방식을
        <br />
        바꿀 수 있으니까
        <br />
        <br />
        'Cause love's such an old-fashioned word
        <br />
        And love dares you to care for
        <br />
        The people on the edge of the night
        <br />
        And love dares you to change our way of
        <br />
        Caring about ourselves
        <br />
        <br />
        Queen, David Bowie - Under Pressure 중에서
        <br />
        <br />
        <br />
      </ContentLyrics>
    </Wrapper>
  );
};

export default Lyrics;
