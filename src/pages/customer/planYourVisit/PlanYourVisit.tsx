import { Box, Button, Container, Link, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeWrapper";
import { planYourVisitStyles } from "./PlanYourVisitStyles";

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

const GuideButton = styled(Button)(() => ({
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

const openingHoursList: string[] = [
  "Monday: 10am - 9pm",
  "Tuesday: 10am - 9pm",
  "Wednesday: 10am - 9pm",
  "Thursday: 10am - 9pm",
  "Friday: 10am - 9pm",
  "Saturday: 10am - 9pm",
  "Sunday: 11:30am - 6pm",
  "*browsing only 11:30am-12pm",
];

const storeDetails: string[] = ["87-135 Brompton Road", "Knightsbridge", "London", " SW1X 7XL"];

const webThumbnail = "https://d2wd7685k000to.cloudfront.net/image/306683987547/image_6ad1sde9bl4f3babc8qou3pc1o/-S1280x2560-FJPG";
const mobileThumbnail =
  "https://d1c96hlcey6qkb.cloudfront.net/b460d838-2f28-4ead-8832-f90e7ce67346/w-555b3704694245d8acd06f08a19c9152/da460a6201e4405f96673ee5e6e9f816?response-content-disposition=inline%3B%20filename%2A%3DUTF-8%27%27m-contact-us-plan-your-visit.jpg&response-content-type=image%2Fjpeg%3B%20time%3D20250407093226&Expires=1744113600&Signature=K4FgpQbfyMBk2IIBhnEd1mZvuugwE2oPJFtikokY2onKVO4PttzQ9lR3SdOBLROfpTEhIpx1IE3gv91y0WLkdu7SEmhlRs8ccpEuSys9e-BxPm7D31S7WIcz3hajYCMdCXcL6CGzu-pQVx47gbEUXT3T4N5RYcX4u3Pos7IuQa0CvUyAo6Oij~ktciH772ivu5Cte19YRiQWDz1e7s0fZ-UmxNEiDxz5vhi45eH-zhVguoRqOkZtrXTosntbM7YIXgyv2fKNPzfFTyviHVZo45botj~pofSVkVLd8Wx2Bgna2faVUaHG4Vz2tPEhjf12lPKnonf98PijQvNKzu3skA__&Key-Pair-Id=APKAI33AGAEAYCXFBDTA";

const PlanYourVisitPage: React.FC = () => {
  const theme = useTheme();
  const { colors } = useContext(ThemeContext);
  const style = planYourVisitStyles(colors);
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
            color: style.paragraph,
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
      <Box
        style={{
          display: "flex",
          alignItems: "flex-end",
          height: 250,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundImage: `url(
            ${isTablet ? mobileThumbnail : webThumbnail}
            )`,
        }}>
        <Typography
          sx={{
            fontFamily: "Miller Banner, serif",
            color: "white",
            paddingBottom: "10px",
            fontSize: "40px",
            fontWeight: "100",
            paddingLeft: "20px",
          }}>
          Plan Your Visit
        </Typography>
      </Box>
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", mb: 4, alignItems: "center", padding: "20px 1px 30px 1px " }}>
          <Typography sx={{ color: style.paragraph, textAlign: "center" }}>
            With every visit to Harrods, you can expect outstanding personal service and a truly unique sense of magic.
          </Typography>
        </Box>
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
                mb: 1,
                fontSize: "16px",
                color: style.paragraph,
              }}>
              OPENING HOURS
            </Typography>

            <Box sx={{ mb: 1 }}>
              {openingHoursList.map((times, index) => (
                <Typography variant="body1" key={index} sx={{ mb: 0, color: style.paragraph, fontSize: "16px", fontWeight: 100 }}>
                  {times}
                </Typography>
              ))}
            </Box>

            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 1,
                mt: 2,
                fontSize: "16px",
                color: style.paragraph,
              }}>
              THE STORE
            </Typography>
            {storeDetails.map((times, index) => (
              <Typography variant="body1" key={index} sx={{ mb: index, color: style.paragraph, fontSize: "16px", fontWeight: 100 }}>
                {times}
              </Typography>
            ))}

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
            color: style.paragraph,
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
            mb: 4,
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

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 1,
            justifyContent: "space-between",
            mb: 6,
          }}>
          <Box sx={{ position: "relative", flex: 1 }}>
            <Box
              component="img"
              src="https://d2wd7685k000to.cloudfront.net/rendition/306683987547/image_fr781jgb4h0j5b45u17qaiih5a/-S1536x3072-FJPG"
              alt="People shopping with Harrods bags"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 1,
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "flex-end",
              boxSizing: "border-box",
            }}>
            <Box sx={{ width: { md: "80%", xs: "100%" } }}>
              <Typography variant="overline" sx={{ color: "#666", fontWeight: 500 }}>
                SPEND, EARN, REDEEM
              </Typography>
              <Typography variant="h3" component="h1" sx={{ fontFamily: "serif", mb: 2, fontSize: 30 }}>
                Join Harrods Rewards
              </Typography>
              <Typography sx={{ mb: 2, color: "#333", maxWidth: 600, fontSize: 10 }}>
                Our loyalty programme is about more than earning points (which are always fun to spend), it's also your key to unlocking the
                best of Harrods – think member discounts, product pre-orders and more.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  border: "none",
                  padding: 0,
                  textDecoration: "underline",
                  color: colors.darkBrown,
                  fontSize: "16px",
                  "&:hover": { backgroundColor: "transparent", textDecoration: "underline" },
                  textTransform: "none",
                  mt: 2,
                }}>
                Join Rewards
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Getting to the store section */}
        <Box sx={{ paddingLeft: { sm: 5, xs: 0 }, mb: 6 }}>
          <Typography variant="h4" component="h2" sx={{ fontFamily: "serif", mb: 4, fontSize: 30 }}>
            Getting to the store
          </Typography>

          {/* Parking */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ color: style.paragraph, mb: 1, fontWeight: "bold", fontSize: 15 }}>
              Parking:
            </Typography>
            <Typography sx={{ mb: 1, fontSize: 13, fontWeight: 300, color: style.paragraph }}>
              Parking & Valet Parking is available on Brompton Place, a two-minute walk from the store. Use the postal code SW3 1QE for
              directions to the car park.
            </Typography>
            <Typography sx={{ mb: 1, fontSize: 13, fontWeight: 300, color: style.paragraph }}>
              Charges apply. Disabled parking is available for permit holders on Basil Street, to the rear of the store. To find Basil
              Street, please use the postal code SW3 1BA. For more information, please view our{" "}
              <Link href="#" sx={{ color: style.linkButton, textDecoration: "underline" }}>
                Visiting the Store FAQs
              </Link>
              .
            </Typography>
          </Box>

          {/* Taxi */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ color: style.paragraph, mb: 1, fontWeight: "bold", fontSize: 15 }}>
              Taxi:
            </Typography>
            <Typography sx={{ color: style.paragraph, mb: 1, fontSize: 13, fontWeight: 300 }}>
              Taxi pick-up/drop-off is available on Basil Street (directly outside Door 3).
            </Typography>
          </Box>

          {/* Public Transport */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{ color: style.paragraph, mb: 1, fontWeight: "bold", fontSize: 15 }}>
              Public transport:
            </Typography>
            <Typography sx={{ mb: 1, fontSize: 13, fontWeight: 300, color: style.paragraph }}>
              The nearest tube station is Knightsbridge. Plan your route on{" "}
              <Link href="#" sx={{ color: style.linkButton, textDecoration: "underline", fontSize: 13, fontWeight: 300 }}>
                TFL Journey Planner
              </Link>
              .
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PlanYourVisitPage;
