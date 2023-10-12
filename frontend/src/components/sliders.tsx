"use client";

import { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import { Image } from "@/types/image";
import { useRouter } from "next/navigation";

export const SlideWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  max-height: 800px;
  padding: 0;
  margin: 0;
  border-radius: 15px;
  img {
    width: 100%;
  }
`;
interface Props {
  slides: Image[];
}

const Sliders: FC<Props> = ({ slides }) => {
  const router = useRouter();
  const sliderSettings: Settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...sliderSettings}>
      {slides.map(({ url, image }, i) => {
        return (
          <SlideWrapper key={i} onClick={() => url && router.push(url)}>
            <img src={image} />
          </SlideWrapper>
        );
      })}
    </Slider>
  );
};
export default Sliders;
