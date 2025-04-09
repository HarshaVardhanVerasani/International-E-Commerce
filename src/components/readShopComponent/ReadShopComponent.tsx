import { Box, Button, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  rolexBottomDescImg,
  rolexDeskTop,
  rolexFive,
  rolexFour,
  rolexOne,
  rolexThree,
  rolexTwo,
} from "../../common/assets/images/imageFile";
import { lightTheme } from "../../config/colorPalette";

const ReadShopComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        flexDirection: "column",
        padding: { xs: 1, sm: 2 },
        minHeight: "100vh",
      }}>
      {/* Hero Image */}
      <Box sx={{ width: "100%", height: { xs: 250, sm: 350, md: 450, lg: 500 }, mb: { xs: 2, sm: 3 } }}>
        <Box
          component="img"
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt="Rolex"
          src={rolexDeskTop}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", md: "center" },
          width: { xs: "95%", sm: "90%", md: "80%" },
          mb: { xs: 3, sm: 4 },
        }}>
        <Typography
          variant="h3"
          sx={{
            width: { xs: "100%", md: "60%" },
            textAlign: { xs: "left", md: "justify" },
            mb: 2,
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
            fontFamily: "miller-light",
          }}>
          Rolex: New Watch Releases 2025
        </Typography>
        <Typography sx={{ width: { xs: "100%", md: "90%" }, textAlign: "left", mb: 2, color: lightTheme.textGrey }}>
          Words by{" "}
          <Typography component={"span"} sx={{ fontWeight: "bold" }}>
            Robin Swithinbank
          </Typography>
        </Typography>
        <Typography sx={{ width: { xs: "100%", md: "90%" }, textAlign: "left", color: lightTheme.textGrey, fontSize: ".8rem" }}>
          Rolex introduces new watches just once a year, and that is at Watches and Wonders Geneva – the major annual watch fair taking
          place in Switzerland this week. Speculation about these releases is always rife, but now the story is finally out, and the watches
          are here. Introducing the latest creations from the brand often known simply as 'the Crown'.
        </Typography>
      </Box>

      {/* Rolex Image Section 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 2 },
          justifyContent: "center",
          width: "100%",
          mb: { xs: 3, sm: 4 },
        }}>
        <Box
          sx={{
            width: { xs: "95%", sm: "45%", md: "40%" },
            height: { xs: 250, sm: 350, md: 450 },
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 3,
            alignSelf: "center",
            mb: { xs: 1, sm: 0 },
          }}>
          <Box
            component="img"
            src={rolexOne}
            alt="Rolex One"
            loading="lazy"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "95%", sm: "45%", md: "40%" },
            height: { xs: 250, sm: 350, md: 450 },
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 3,
            alignSelf: "center",
          }}>
          <Box
            component="img"
            src={rolexTwo}
            alt="Rolex Two"
            loading="lazy"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      {/* Watch Description Section */}
      <Box sx={{ width: { xs: "95%", sm: "90%", md: "80%" }, textAlign: "left", mb: { xs: 3, sm: 4 } }}>
        <Typography variant="h5" sx={{ mb: 2, fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }, textAlign: "center" }}>
          Oyster Perpetual Land-Dweller
        </Typography>
        <Typography sx={{ mb: 2, color: lightTheme.textGrey, fontSize: ".8rem" }}>
          The new watches from Rolex will always make headlines and here comes another. Meet the Land-Dweller, which has a new case shape
          and a new movement, which Rolex describes as 'the beginning of the future of Rolex watchmaking'. It's backed by seven years of
          research, 32 patent applications, and a raft of aesthetic and technical leaps that clearly signal what Rolex has in mind for next
          year and beyond. The Land-Dweller's case is a clear nod to the Rolex Oysterquartz model in 1969, with angled lugs, a fluted bezel,
          and a slim profile. Its 'Flat Jubilee' five-link bracelet is fully integrated into the case, which is 15% thinner than a Rolex
          Datejust, so the watch sits even more comfortably on the wrist. The dial has a repeating honeycomb motif, created using Rolex's
          femtosecond laser technique, as seen on the 'palm' dial that was released in 2021.
        </Typography>
        <Typography sx={{ mb: 2, color: lightTheme.textGrey, fontSize: ".8rem" }}>
          So far, so cool. Then comes the new Calibre 7135, a high-frequency automatic beating at 5hz or 36,000vph (4hz or 28,800vph is
          normal), and featuring Rolex's new Dynapulse escapement – a silicon component that improves the movement's efficiency by 30%
          offering exceptional performance. The result? Sustained accuracy to +/-2 seconds per day, a 66-hour power reserve, and high
          resistance to shocks and magnetism. There will be 36mm and 40mm variants in either white-gold Rolesor, warm 18-karat Everose gold,
          or platinum, with some diamond-set versions in the mix as well. This is a revolutionary landmark launch for the world's most
          desirable watch brand.
        </Typography>
      </Box>

      {/* Rolex Image Section 2 */}
      <Container maxWidth="lg" sx={{ mt: { xs: 2, sm: 3, md: 4 }, mb: { xs: 2, sm: 3, md: 4 }, px: { xs: 1, sm: 2, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 4 },
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Box sx={{ width: { xs: "100%", md: "40%" } }}>
            <Box
              component="img"
              src={rolexThree}
              alt="Rolex GMT-Master II"
              loading="lazy"
              sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: "#025a5a",
                objectFit: "contain",
              }}
            />
            <Typography sx={{ display: "block", mt: 1, fontSize: "0.8rem", fontFamily: "miller-light" }}>
              Rolex Oyster Perpetual GMT-Master II
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              justifyContent: "center",
              alignItems: { xs: "flex-start", md: "center" },
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontFamily: "serif", fontWeight: "normal", fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" } }}>
              Oyster Perpetual GMT-Master II
            </Typography>

            <Typography sx={{ fontSize: "0.8rem", fontFamily: "miller-light" }}>
              This new version of the GMT-Master II features a green dial made of Rolex's Cerachrom, in a shade that matches the Cerachrom
              used to illustrate daylight hours on the watch's 24-hour rotating bezel.
              <Typography component="span" fontWeight="medium">
                Rolex
              </Typography>
              has also cased the model in white gold and paired it with a left-hand crown — a style known colloquially among horologists as{" "}
              <Typography component="span" fontStyle="italic">
                destro
              </Typography>
              . The moniker, meaning 'right' in Italian, points to the fact that such watches are typically worn by left-handers on the
              right wrist. The version presented this year is fitted on an Oyster bracelet with an Oysterlock safety clasp.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ mt: { xs: 2, sm: 3, md: 4 }, mb: { xs: 2, sm: 3, md: 4 }, px: { xs: 1, sm: 2, md: 3 } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { xs: 2, md: 4 }, justifyContent: "center" }}>
          <Box sx={{ width: { xs: "100%", sm: "48%", md: "40%" } }}>
            <Box
              component="img"
              src={rolexFour}
              alt="Rolex GMT-Master II"
              loading="lazy"
              sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: "#025a5a",
                objectFit: "contain",
              }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
              Rolex Oyster Perpetual GMT-Master II
            </Typography>
          </Box>

          <Box sx={{ width: { xs: "100%", sm: "48%", md: "40%" } }}>
            <Box
              component="img"
              src={rolexFive}
              alt="Rolex GMT-Master II"
              loading="lazy"
              sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: "#025a5a",
                objectFit: "contain",
              }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
              Rolex Oyster Perpetual GMT-Master II Details
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box sx={{ width: { xs: "95%", sm: "90%", md: "80%" }, textAlign: "left", mb: { xs: 3, sm: 4 } }}>
        <Typography variant="h5" sx={{ mb: 2, fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" } }}>
          Oyster Perpetual
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Rolex's evergreen Oyster Perpetual has been a springboard into the brand for countless watch buyers through the years. For 2025,
          Rolex has added a trio of matte lacquered dials in pastel colours to the range. A muted lavender, a warm sandy beige and a fresh
          pistachio green. The 28mm version – equipped with Calibre 2232 – is now available with a soft lavender dial, while the Calibre
          3230 36mm and 41mm models are now offered with either beige or pistachio dials. The proportions of the Oyster Perpetual 41 have
          been slightly reworked, introducing a redesigned case and a slimmer Oysterclasp. Simple additions that breathe freshness into a
          perennial classic.
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: 2, sm: 3, md: 4 }, mb: { xs: 2, sm: 3, md: 4 }, px: { xs: 1, sm: 2, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 4 },
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Box sx={{ width: { xs: "100%", md: "40%" } }}>
            <Box
              component="img"
              src={rolexThree}
              alt="Rolex Perpetual 1908"
              loading="lazy"
              sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: "#025a5a",
                objectFit: "contain",
              }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
              Rolex Perpetual 1908
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              justifyContent: "center",
              alignItems: { xs: "flex-start", md: "center" },
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontFamily: "serif", fontWeight: "normal", fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" } }}>
              Perpetual 1908
            </Typography>

            <Typography>
              As its name suggests, the 1908 is as vintage in look as any watch in the Rolex collection – a reference to the year founder
              Hans Wilsdorf came up with the name Rolex and registered it in Switzerland. In 2025, its aesthetic is made more ageless by the
              addition of a seven-link solid 18-karat yellow gold bracelet that reverberates with old-world charm. Rolex has elegantly
              called its highly polished creation 'Settimo' after the Italian word for seventh. For now, it will only be available on the
              yellow-gold version of the watch, which otherwise has a bright white dial and is fuelled by Rolex Calibre 7140 – an automatic
              with a 66-hour power reserve – exclusive to the 1908 collection.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box sx={{ width: { xs: "95%", sm: "90%", md: "80%" }, textAlign: "left", mb: { xs: 3, sm: 4 } }}>
        <Typography variant="h5" sx={{ mb: 2, fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" } }}>
          Exclusive Dials
        </Typography>
        <Typography sx={{ mb: 2 }}>
          New dials typically don't inspire many column inches – but, as ever, Rolex isn't typical. This year, exclusive new dials are
          introduced into three of its most celebrated models. The 18-karat yellow gold Sky-Dweller gets a bright green sunray dial; the
          18-karat Everose gold GMT Master-II gets a dial made from a material called 'tiger iron' that mixes tiger's eye and red jasper
          with a reddish-black mineral called hematite; and the 18-karat yellow gold Cosmograph Daytona gets a turquoise blue lacquer dial.
        </Typography>
      </Box>

      {/* Bottom Banner */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 250, sm: 300, md: 350 },
          backgroundImage: `url(${rolexBottomDescImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1,
          },
          width: "100%",
          mt: { xs: 2, sm: 3 },
        }}>
        <Box sx={{ zIndex: 2, px: { xs: 2, sm: 3, md: 4 }, maxWidth: "100%" }}>
          <Typography
            variant="overline"
            sx={{
              display: "block",
              fontSize: { xs: "12px", sm: "14px" },
              letterSpacing: 2,
              mb: { xs: 1, sm: 2 },
            }}>
            FINE WATCHES
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 400,
              mb: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              px: { xs: 1, sm: 2, md: 4 },
            }}>
            Exclusive timepieces meet extraordinary novelties, unparalleled expertise and more
          </Typography>

          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              borderWidth: "1px",
              borderRadius: 0,
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}>
            Discover Fine Watches at Harrods
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReadShopComponent;
