import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/navigation";
//@ts-ignore
import "swiper/css/pagination";
//@ts-ignore
import "swiper/css/scrollbar";
import "./SwiperCustomStyles.css";

import CommonCardComponent from "../commonCard/CommonCardComponent";
import { SwiperRef } from "swiper/react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface CarousalComponentProps {
  products: Product[];
  isDescriptionHas?: boolean;
  isIconHas?: boolean;
  isPriceHas?: boolean;
  isBgActive?: boolean;
  isTitleHasUnderline?: boolean;
  isLargeText?: boolean;
  isDescHasLink?: boolean;
  isActive?:boolean
}

const CarousalComponent: React.FC<CarousalComponentProps> = ({
  products,
  isDescriptionHas,
  isIconHas,
  isPriceHas,
  isBgActive,
  isTitleHasUnderline,
  isLargeText,
  isDescHasLink,
  isActive
}) => {
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBarWidth = e.currentTarget.offsetWidth;
    const clickPosition = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const newProgress = (clickPosition / progressBarWidth) * 100;
    setProgress(newProgress);

    if (swiperRef.current) {
      const totalSlides = swiperRef.current.swiper.slides.length;
      const slideIndex = Math.floor((newProgress / 100) * totalSlides);
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", margin: "auto" }}>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        navigation={true}
        autoplay={{ delay: 2500 }}
        mousewheel={true}
        freeMode={true}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}

        onSlideChange={swiper => {
          setProgress(((swiper.realIndex + 1) / swiper.slides.length) * 100);
        }}>
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <CommonCardComponent
                title={product.title}
                description={product.description}
                price={product.price}
                images={product.images}
                onClick={() => alert(`Shop Now clicked for ${product.title}`)}
                isDescriptionHas={isDescriptionHas}
                isIconHas={isIconHas}
                isPriceHas={isPriceHas}
                isBgActive={isBgActive}
                isTitleHasUnderline={isTitleHasUnderline}
                isDescHasLink={isDescHasLink}
                isLargeText={isLargeText}
                id={product.id}
                isActive={isActive}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        sx={{
          width: "30%",
          height: "4px",
          backgroundColor: "grey",
          borderRadius: "2px",
          marginTop: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleProgressBarClick}>
        <Box
          sx={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#ab8e66",
            borderRadius: "2px",
            transition: "width 0.3s ease",
          }}
        />
      </Box>
    </Box>
  );
};

export default CarousalComponent;
