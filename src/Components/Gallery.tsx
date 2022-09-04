import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";
import GalleryPhoto1 from "../Assets/Gallery_Photo_1.jpg";
import GalleryPhoto2 from "../Assets/Gallery_Photo_2.jpg";
import GalleryPhoto3 from "../Assets/Gallery_Photo_3.jpg";
import GalleryPhoto4 from "../Assets/Gallery_Photo_4.jpg";
import GalleryPhoto5 from "../Assets/Gallery_Photo_5.jpg";
import GalleryPhoto6 from "../Assets/Gallery_Photo_6.jpg";
import GalleryPhoto7 from "../Assets/Gallery_Photo_7.jpg";
import GalleryPhoto8 from "../Assets/Gallery_Photo_8.jpg";
import GroovePaper from "../Assets/GroovePaper.png";

const Wrapper = styled.div`
  background: #efebe9 url(${GroovePaper});
  padding-top: 0;
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

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
