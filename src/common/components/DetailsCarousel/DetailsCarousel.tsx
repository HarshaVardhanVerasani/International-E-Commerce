import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { detailsCarousel } from "../../sampleData/sampleData";
import { carouselStyles } from "./DetailsCarouselStyles";

const Carousel = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const items = detailsCarousel;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      goToNext();
    } else if (touchEndX - touchStartX > 50) {
      goToPrevious();
    }
  };

  const goToPrevious = () => {
    setActiveIndex(prevIndex => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : prevIndex;
      updateArrows(newIndex);
      return newIndex;
    });
  };

  const updateArrows = React.useCallback(
    (index: number) => {
      setShowPrevArrow(index !== 0);
      setShowNextArrow(index !== items.length - 1);
    },
    [items.length]
  );

  const goToNext = React.useCallback(() => {
    setActiveIndex(prevIndex => {
      if (prevIndex === items.length - 1) return prevIndex;
      const newIndex = prevIndex + 1;
      updateArrows(newIndex);
      return newIndex;
    });
  }, [items.length, updateArrows]);

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    updateArrows(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, goToNext]);

  useEffect(() => {
    updateArrows(activeIndex);
  }, [activeIndex, updateArrows]);

  const calculateTransform = () => {
    if (isMobile) {
      return `translateX(-${activeIndex * 100}%)`;
    } else {
      if (activeIndex === items.length - 1) {
        return `translateX(-${(activeIndex - 1) * 75 + 50}%)`;
      }
      return `translateX(-${activeIndex * 75}%)`;
    }
  };

  return (
    <>
      <Box sx={carouselStyles.carouselContainer}>
        <FavoriteBorderIcon sx={carouselStyles.favoriteIconStyles} />
        <Box sx={carouselStyles.newBtn}>NEW</Box>
        {!isMobile && showPrevArrow && (
          <IconButton sx={carouselStyles.circleNavButton} onClick={goToPrevious} style={{ left: "20px" }}>
            <NavigateBeforeIcon />
          </IconButton>
        )}
        {!isMobile && showNextArrow && (
          <IconButton sx={carouselStyles.circleNavButton} onClick={goToNext} style={{ right: "20px" }}>
            <NavigateNextIcon />
          </IconButton>
        )}
        <Box
          ref={trackRef}
          sx={isMobile ? carouselStyles.mobileTrack : carouselStyles.track}
          style={{
            transform: calculateTransform(),
            width: isMobile ? `${items.length * 100}%` : `${items.length * 75}%`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {items.map((item, index) => (
            <Box
              key={`${item.id}-${index}`}
              sx={isMobile ? carouselStyles.mobileItemWrapper : carouselStyles.itemWrapper}
              style={{
                minWidth: isMobile ? "100%" : "75%",
                width: isMobile ? "100%" : "75%",
              }}>
              <Box sx={carouselStyles.itemContent}>
                <img
                  src={item.imageUrl}
                  alt={`Carousel item ${item.id}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
        {isDesktop && (
          <Box sx={carouselStyles.pageIndicator}>
            <Box sx={carouselStyles.pageIndicatorText}>
              {activeIndex + 1} / {items.length}
            </Box>
          </Box>
        )}
      </Box>
      {!isDesktop && (
        <Box sx={carouselStyles.pagination}>
          {items.map((_, index) => (
            <Box
              key={index}
              sx={carouselStyles.paginationDot}
              className={index === activeIndex ? "active" : ""}
              onClick={() => goToIndex(index)}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default Carousel;
