import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, IconButton, Modal, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { detailsCarouselInterface } from "../../sampleData/sampleData";

const styles = {
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  contentBox: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: {
      xs: 0,
      sm: 2,
    },
    outline: "none",
    maxWidth: {
      xs: "100%",
      sm: "calc(100% - 48px)",
      md: "1000px",
    },
    maxHeight: {
      xs: "100%",
      sm: "calc(100% - 48px)",
    },
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 2,
    color: "black",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
  imageContainer: {
    position: "relative",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    overflow: "hidden",
    padding: 4,
    touchAction: "none", // Important for touch events
  },
  slideTrack: {
    display: "flex",
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
  },
  imageWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease-in-out",
  },
  image: {
    maxWidth: "85%",
    maxHeight: "85%",
    objectFit: "contain",
    userSelect: "none", // Prevent image selection during drag
  },
  navButton: {
    position: "absolute",
    zIndex: 1,
    color: "#666",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
  },
  prevButton: {
    left: 16,
  },
  nextButton: {
    right: 16,
  },
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    padding: 2,
    backgroundColor: "white",
  },
  dot: {
    fontSize: 12,
    color: "#ccc",
    margin: "0 4px",
    cursor: "pointer",
  },
  activeDot: {
    color: "#666",
  },
  thumbnailContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "16px 8px",
    backgroundColor: "white",
    borderTop: "1px solid #f0f0f0",
    overflowX: "auto",
  },
  thumbnail: {
    width: 60,
    height: 60,
    margin: "0 4px",
    cursor: "pointer",
    objectFit: "contain",
    border: "1px solid transparent",
    padding: 1,
    borderRadius: 1,
  },
  activeThumbnail: {
    border: "1px solid #666",
    backgroundColor: "#f0f0f0",
  },
};

interface ImageModalProps {
  open: boolean;
  onClose: () => void;
  images: detailsCarouselInterface[];
  initialIndex?: number;
}

const ImageModal: React.FC<ImageModalProps> = ({ open, onClose, images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const animationRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Calculate previous and next indices
  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex);
      resetAnimationState();
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [open, initialIndex]);

  const resetAnimationState = () => {
    setDirection(null);
    setDragOffset(0);
    setIsAnimating(false);
    isDraggingRef.current = false;
    touchStartRef.current = null;
  };

  const animateSlide = (newIndex: number, slideDirection: "left" | "right") => {
    if (isAnimating) return;

    setDirection(slideDirection);
    setIsAnimating(true);

    // Use requestAnimationFrame for smoother animations
    animationRef.current = requestAnimationFrame(() => {
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
        setDirection(null);
        setDragOffset(0);
      }, 300); // Match this with your CSS transition duration
    });
  };

  const handleNext = () => {
    if (images.length <= 1) return;
    animateSlide(nextIndex, "right");
  };

  const handlePrev = () => {
    if (images.length <= 1) return;
    animateSlide(prevIndex, "left");
  };

  const handleThumbnailClick = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    const slideDirection = index > currentIndex ? "right" : "left";
    animateSlide(index, slideDirection);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating || images.length <= 1) return;
    touchStartRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !touchStartRef.current) return;
    const touchX = e.touches[0].clientX;
    setDragOffset(touchX - touchStartRef.current);
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current || !touchStartRef.current) {
      resetAnimationState();
      return;
    }

    const threshold = window.innerWidth / 4; // Swipe threshold (25% of screen width)
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    } else {
      // Return to original position
      setDragOffset(0);
    }

    resetAnimationState();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAnimating || images.length <= 1) return;
    touchStartRef.current = e.clientX;
    isDraggingRef.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !touchStartRef.current) return;
    setDragOffset(e.clientX - touchStartRef.current);
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current || !touchStartRef.current) {
      resetAnimationState();
      return;
    }

    const threshold = 100; // Drag threshold in pixels
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    } else {
      // Return to original position
      setDragOffset(0);
    }

    resetAnimationState();
  };

  const getCurrentSlideStyle = () => {
    if (isDraggingRef.current) {
      return { transform: `translateX(${dragOffset}px)` };
    }

    if (isAnimating) {
      if (direction === "right") {
        return { transform: `translateX(calc(-100% + ${dragOffset}px))` };
      } else if (direction === "left") {
        return { transform: `translateX(calc(100% + ${dragOffset}px))` };
      }
    }

    return { transform: "translateX(0)" };
  };

  const getAdjacentSlideStyle = () => {
    if (isAnimating) {
      if (direction === "right") {
        return { transform: `translateX(calc(100% + ${dragOffset}px))` };
      } else if (direction === "left") {
        return { transform: `translateX(calc(-100% + ${dragOffset}px))` };
      }
    }
    return { transform: "translateX(0)" };
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    else if (e.key === "ArrowRight") handleNext();
    else if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [open, handleKeyDown]);

  return (
    <Modal open={open} onClose={onClose} sx={styles.modalContainer}>
      <Box sx={styles.contentBox}>
        <IconButton onClick={onClose} sx={styles.closeButton} size="small" aria-label="close">
          <CloseIcon />
        </IconButton>

        <Box
          sx={styles.imageContainer}
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Treat mouse leave same as mouse up
        >
          {images.length > 1 && (
            <>
              <IconButton onClick={handlePrev} sx={{ ...styles.navButton, ...styles.prevButton }} size="large" aria-label="previous image">
                <KeyboardArrowLeftIcon fontSize="large" />
              </IconButton>
              <IconButton onClick={handleNext} sx={{ ...styles.navButton, ...styles.nextButton }} size="large" aria-label="next image">
                <KeyboardArrowRightIcon fontSize="large" />
              </IconButton>
            </>
          )}

          <Box sx={styles.slideTrack}>
            {/* Current slide */}
            <Box
              sx={{
                ...styles.imageWrapper,
                ...getCurrentSlideStyle(),
                cursor: isDraggingRef.current ? "grabbing" : "grab",
                zIndex: 1,
              }}>
              <Box
                component="img"
                src={images[currentIndex].imageUrl}
                alt={`Image ${currentIndex + 1}`}
                sx={styles.image}
                draggable="false"
              />
            </Box>

            {/* Adjacent slide (shown during animation) */}
            {isAnimating && (
              <Box
                sx={{
                  ...styles.imageWrapper,
                  ...getAdjacentSlideStyle(),
                  zIndex: 0,
                }}>
                <Box
                  component="img"
                  src={direction === "right" ? images[nextIndex].imageUrl : images[prevIndex].imageUrl}
                  alt={direction === "right" ? "Next image" : "Previous image"}
                  sx={styles.image}
                  draggable="false"
                />
              </Box>
            )}
          </Box>
        </Box>

        {images.length > 1 && (
          <Box sx={styles.thumbnailContainer}>
            {isMobile
              ? images.map((_, index) => (
                  <FiberManualRecordIcon
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    sx={{
                      ...styles.dot,
                      ...(index === currentIndex ? styles.activeDot : {}),
                    }}
                  />
                ))
              : images.map((image, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={image.imageUrl}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => handleThumbnailClick(index)}
                    sx={{
                      ...styles.thumbnail,
                      ...(index === currentIndex ? styles.activeThumbnail : {}),
                    }}
                    draggable="false"
                  />
                ))}
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ImageModal;
