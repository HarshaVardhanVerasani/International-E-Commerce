import React from "react";
import { Box } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SwiperCustomStyles.css"; 

import CommonCardComponent from "../commonCard/CommonCardComponent";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[]; 
}

interface CarousalComponentProps {
  products: Product[]; 
  isDescriptionHas?:boolean,
  isIconHas?:boolean,
  isPriceHas?:boolean,
  isBgActive?:boolean,
  isTitleHasUnderline?:boolean
}

const CarousalComponent: React.FC<CarousalComponentProps> = ({ products,isDescriptionHas ,isIconHas,isPriceHas,isBgActive,isTitleHasUnderline}) => {
  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", margin: "auto" }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        autoplay={{ delay: 2500 }}
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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        style={{ padding: "20px" }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
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
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CarousalComponent;
