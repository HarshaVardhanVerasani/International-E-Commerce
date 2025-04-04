import { Box, Button, Container, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

// Styled components
const StoreImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxHeight: "550px",
  objectFit: "cover",
  [theme.breakpoints.down("md")]: {
    maxHeight: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    maxHeight: "300px",
  },
}));

const GuideButton = styled(Button)(({ theme }) => ({
  color: "#8A7252",
  border: "none",
  width: "fit-content",
  padding: 0,
  textDecoration: "underline",
  textTransform: "none",
  fontWeight: "normal",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const PlanYourVisitPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const renderCard = (imgUrl: string, heading: string, text: string, buttonText: string) => {
    return (
      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
        }}>
        <Box
          sx={{
            width: "100%",
            height: "300px",
            mb: 2,
            overflow: "hidden",
          }}>
          <img
            src={imgUrl}
            alt="Easter at Harrods"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontFamily: "serif",
            mb: 2,
            fontWeight: 400,
          }}>
          {heading}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 3,
            color: "#444",
            flex: "1",
          }}>
          {text}
        </Typography>

        <Button
          variant="outlined"
          sx={{
            borderColor: "#9c8a52",
            color: "#9c8a52",
            textTransform: "none",
            width: "100%",
            "&:hover": {
              borderColor: "#7d6e42",
              backgroundColor: "rgba(156, 138, 82, 0.04)",
            },
          }}>
          {buttonText}
        </Button>
      </Box>
    );
  };

  return (
    <>
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isTablet ? "column" : "row",
            gap: 4,
          }}>
          <Box
            sx={{
              flex: isTablet ? "1" : "6",
              mb: isTablet ? 4 : 0,
            }}>
            <StoreImage
              src="https://d2wd7685k000to.cloudfront.net/rendition/306683987547/image_r4bm1u0fkl457fure9hi29vv5d/-S2048x4096-FJPG"
              alt="Harrods department store exterior"
            />
          </Box>

          <Box
            sx={{
              flex: isTablet ? "1" : "4",
              display: "flex",
              flexDirection: "column",
              p: isMobile ? 1 : 2,
            }}>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 3,
              }}>
              OPENING HOURS
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Monday: 10am - 9pm
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Tuesday: 10am - 9pm
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Wednesday: 10am - 9pm
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Thursday: 10am - 9pm
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Friday: 10am - 9pm
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Saturday: 10am - 9pm
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Sunday: 11:30am - 6pm*
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, fontStyle: "italic" }}>
                *browsing only 11:30am-12pm
              </Typography>
            </Box>

            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                mt: 2,
              }}>
              THE STORE
            </Typography>

            <Typography variant="body1" sx={{ mb: 0.5 }}>
              87-135 Brompton Road
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5 }}>
              Knightsbridge
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              London
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              SW1X 7XL
            </Typography>

            <GuideButton disableElevation disableRipple disableFocusRipple disableTouchRipple variant="outlined">
              View Store Guide
            </GuideButton>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ py: 4 }}>
        {/* News & Events Header */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            fontFamily: "serif",
            mb: 1,
            fontWeight: 400,
          }}>
          News & Events
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 4,
            color: "#444",
            maxWidth: "800px",
            mx: "auto",
          }}>
          Discover the latest pop-ups, boutiques, restaurant openings and more to check out on your next visit.
        </Typography>

        {/* News & Events Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isTablet ? "column" : "row",
            justifyContent: "space-between",
            gap: 4,
            mb: 4,
          }}>
          {/* First Card - The New Harrods Collection */}
          {renderCard(
            "https://d2wd7685k000to.cloudfront.net/rendition/306683987547/image_rscisuc4sl58rcoo5lsccvc72j/-S2048x4096-FJPG",
            "The New Harrods Collection",
            "Cornish kitchenware, British-made totes, Scottish cashmere and more – visit the Lower Ground Floor and discover the stories behind our all-new collection.",
            "Shop Now"
          )}

          {/* Second Card - Easter at Harrods */}
          {renderCard(
            "https://d2wd7685k000to.cloudfront.net/rendition/306683987547/image_2e0h9ee5bt7n919o9e7499ls42/-S2048x4096-FJPG",
            "Easter at Harrods",
            "A trip to the Chocolate Hall isn't the only thing on the agenda this Easter - there's more than one way to enjoy spring in-store.",
            "Find Out More"
          )}
        </Box>

        {/* View All Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#9c8a52",
              color: "white",
              textTransform: "none",
              width: isMobile ? "100%" : "250px",
              "&:hover": {
                backgroundColor: "#7d6e42",
              },
              py: 1.5,
            }}>
            View All News & Events
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: isTablet ? "column" : "row",
            justifyContent: "space-between",
            gap: 4,
            mb: 4,
          }}>
          {/* First Card - The New Harrods Collection */}
          {renderCard(
            "https://d2wd7685k000to.cloudfront.net/rendition/306683987547/image_d2kr9iik5h2tl21nmmbc4bj82o/-S2048x4096-FJPG",
            "Beauty & Wellness",
            "From the new Hair and Beauty Salon to Adam Grooming Atelier, our incredible range of wellness services offer a tranquil retreat from the hustle and bustle of the store.",
            "Discover & Book"
          )}

          {/* Second Card - Easter at Harrods */}
          {renderCard(
            "https://d2wd7685k000to.cloudfront.net/rendition/306683987547/image_4ecd0rebs94bd11jcosuqbrk6a/-S2048x4096-FJPG",
            "Restaurants",
            "At Harrods, the world really is your oyster. From wood-fired pizza to British fish and chips from Tom Kerridge, there’s a mouth-watering array of cuisines to enjoy at our restaurants.",
            "Discover All Restaurants"
          )}
        </Box>
      </Container>
    </>
  );
};

export default PlanYourVisitPage;
