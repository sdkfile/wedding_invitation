import React from 'react';
import styled from "styled-components";

const FieldLabel = styled.td`
  padding: 2px;
  width: 50px;
  vertical-align: top;
`;
const TableBus = styled.table`
  position: relative;
  width: 100%;
`;
const TableCell = styled.td`
  padding: 2px;
  vertical-align: top;
`;
export default function BusInfo() {
  return (
    <div>
      <li>
        <em>
          <a
            href="https://map.kakao.com/?map_type=TYPE_MAP&amp;target=walk&amp;rt=497256%2C1129289%2C496820%2C1129091&amp;rt1=%EB%82%A8%EB%8C%80%EB%AC%B8%EC%84%B8%EB%AC%B4%EC%84%9C.%EC%84%9C%EC%9A%B8%EB%B0%B1%EB%B3%91%EC%9B%90&amp;rt2=%EB%A1%9C%EC%96%84%ED%98%B8%ED%85%94%EC%84%9C%EC%9A%B8&amp;rtIds=%2C&amp;rtTypes=%2C"
          >남대문세무서.서울백병원</a> (도보 4분)
        </em>
      </li>
      <li>
        <TableBus>
          <tbody>
          <tr>
            <FieldLabel>간선</FieldLabel>
            <TableCell>470, 472, 741, N37</TableCell>
          </tr>
          <tr>
            <FieldLabel>직행</FieldLabel>
            <TableCell>1150, 3201, 4108, 5000A, 5000B, 5005, 5007, 5500-2, 8100, 8800, 9000, 9000-1,
              9003, 9200, 9300, G8110
            </TableCell>
          </tr>
          <tr>
            <FieldLabel className="FieldLabel">광역</FieldLabel>
            <TableCell>9401, M4101, M4102, M4108, M4130, M4137, M5107, M5115, M5121</TableCell>
          </tr>
          <tr>
            <FieldLabel className="FieldLabel">순환</FieldLabel>
            <TableCell>03</TableCell>
          </tr>
          </tbody>
        </TableBus>
      </li>
      <br/>
      <li>
        <em className="point"><a
          href="https://map.kakao.com/?map_type=TYPE_MAP&amp;target=walk&amp;rt=497294%2C1129368%2C496820%2C1129091&amp;rt1=%EB%82%A8%EB%8C%80%EB%AC%B8%EC%84%B8%EB%AC%B4%EC%84%9C.%EA%B5%AD%EA%B0%80%EC%9D%B8%EA%B6%8C%EC%9C%84%EC%9B%90%ED%9A%8C&amp;rt2=%EB%A1%9C%EC%96%84%ED%98%B8%ED%85%94%EC%84%9C%EC%9A%B8&amp;rtIds=%2C&amp;rtTypes=%2C7"
        >남대문세무서.국가인권위원회</a> (도보 4분) </em>
      </li>
      <li>
        <TableBus>
          <tbody>
          <tr>
            <FieldLabel className="FieldLabel">직행</FieldLabel>
            <TableCell>1150, 5000A, 5000B, 5005, 5007, 8100, 9003, 9300</TableCell>
          </tr>
          <tr>
            <FieldLabel className="FieldLabel">광역</FieldLabel>
            <TableCell>M4101, M4102</TableCell>
          </tr>
          </tbody>
        </TableBus>
      </li>
      <br/>
      <li>
        <em className="point"><a
          href="https://map.kakao.com/?map_type=TYPE_MAP&amp;target=walk&amp;rt=497301%2C1129100%2C496820%2C1129091&amp;rt1=%EC%84%9C%EC%9A%B8%EB%B0%B1%EB%B3%91%EC%9B%90.%EA%B5%AD%EA%B0%80%EC%9D%B8%EA%B6%8C%EC%9C%84.%EC%95%88%EC%A4%91%EA%B7%BC%ED%99%9C%EB%8F%99%ED%84%B0&amp;rt2=%EB%A1%9C%EC%96%84%ED%98%B8%ED%85%94%EC%84%9C%EC%9A%B8&amp;rtIds=%2C&amp;rtTypes=%2C"
        >서울백병원.국가인권위.안중근활동터</a> (도보 4분) </em>
      </li>
      <li>
        <TableBus>
          <tbody>
          <tr>
            <FieldLabel className="FieldLabel">간선</FieldLabel>
            <TableCell>140, 470, 472, 741, N37</TableCell>
          </tr>
          <tr>
            <FieldLabel className="FieldLabel">직행</FieldLabel>
            <TableCell>3201, 4108, 5500-2, 8800, 9000, 9000-1, 9200, G8110</TableCell>
          </tr>
          <tr>
            <FieldLabel className="FieldLabel">광역</FieldLabel>
            <TableCell>9401, M4108, M4130, M4137, M5107, M5115, M5121</TableCell>
          </tr>
          <tr>
            <FieldLabel className="FieldLabel">순환</FieldLabel>
            <TableCell>03</TableCell>
          </tr>
          </tbody>
        </TableBus>
      </li>
      <br/>
      <li>
        <em>
          <a
            href="https://map.kakao.com/?map_type=TYPE_MAP&amp;target=walk&amp;rt=496756%2C1129573%2C496820%2C1129091&amp;rt1=%EC%84%9C%EC%9A%B8%EB%B0%B1%EB%B3%91%EC%9B%90.%EC%9D%84%EC%A7%80%EB%A1%9C%EC%9E%85%EA%B5%AC.%EB%A1%9C%EC%96%84%ED%98%B8%ED%85%94&amp;rt2=%EB%A1%9C%EC%96%84%ED%98%B8%ED%85%94%EC%84%9C%EC%9A%B8&amp;rtIds=%2C&amp;rtTypes=%2C"
          >을지로입구.로얄호텔</a> (도보 5분)
        </em>
      </li>
      <li>
        <TableBus>
          <tbody>
          <tr>
            <FieldLabel className="FieldLabel">간선</FieldLabel>
            <TableCell>100, 105, 152, 202, 261, 472, N30</TableCell>
          </tr>
          <tr>
            <FieldLabel className="FieldLabel">순환</FieldLabel>
            <TableCell>01B</TableCell>
          </tr>
          </tbody>
        </TableBus>
      </li>
      <br/>
      <li>
        <em className="point"><a
          href="https://map.kakao.com/?map_type=TYPE_MAP&amp;target=walk&amp;rt=496156%2C1129210%2C496820%2C1129091&amp;rt1=%EB%AA%85%EB%8F%99%EA%B5%AD%EB%AF%BC%EC%9D%80%ED%96%89%EC%95%9E&amp;rt2=%EB%A1%9C%EC%96%84%ED%98%B8%ED%85%94%EC%84%9C%EC%9A%B8&amp;rtIds=%2C&amp;rtTypes=%2C"
        >명동국민은행 앞</a> (도보 5분)</em>
      </li>
      <li>
        <TableBus>
          <tbody>
          <tr>
            <FieldLabel className="FieldLabel">직행</FieldLabel>
            <TableCell>1150, 3201, 4108, 5000A, 5000B, 5005, 5007, 5500-2, 8100, 8800, 9000,
              9000-1, 9003, 9200, 9300, 9301
            </TableCell>
          </tr>
          <tr>
            <FieldLabel className="FieldLabel">광역</FieldLabel>
            <TableCell>9401, M4101, M4102, M4108, M4130, M4137, M5107, M5115, M5121</TableCell>
          </tr>
          </tbody>
        </TableBus>
      </li>
    </div>
  );
}