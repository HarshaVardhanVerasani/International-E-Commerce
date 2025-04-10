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
import { useContext } from "react";

import { ReadShopComponentStyles } from "./ReadShopComponentStyles";
import { ThemeContext } from "../../context/ThemeWrapper";

const ReadShopComponent = () => {
 const { colors } = useContext(ThemeContext);
  const style = ReadShopComponentStyles(colors);
  return (
    <Box
      sx={style.mainContainer}>
      {/* Hero Image */}
      <Box sx={style.heroImage}>
        <Box
          component="img"
          loading="lazy"
          sx={style.heroImageContent}
          alt="Rolex"
          src={rolexDeskTop}
        />
      </Box>

      <Box
        sx={style.sectionContent}>
        <Typography
          variant="h3"
          sx={style.title}>
          Rolex: New Watch Releases 2025
        </Typography>
        <Typography sx={style.subtitle}>
          Words by 
          <Typography component={"span"} sx={style.span}>
            Robin Swithinbank
          </Typography>
        </Typography>
        <Typography sx={style.text}>
          Rolex introduces new watches just once a year, and that is at Watches and Wonders Geneva – the major annual watch fair taking
          place in Switzerland this week. Speculation about these releases is always rife, but now the story is finally out, and the watches
          are here. Introducing the latest creations from the brand often known simply as 'the Crown'.
        </Typography>
      </Box>

      {/* Rolex Image Section 1 */}
      <Box
        sx={style.imageSection}>
        <Box
          sx={style.imageBox}>
          <Box
            component="img"
            src={rolexOne}
            alt="Rolex One"
            loading="lazy"
            sx={style.heroImageContent}
          />
        </Box>

        <Box
          sx={style.imageBox}>
          <Box
            component="img"
            src={rolexTwo}
            alt="Rolex Two"
            loading="lazy"
            sx={style.heroImageContent}
          />
        </Box>
      </Box>

      {/* Watch Description Section */}
      <Box sx={style.watchDescriptionSection}>
        <Typography variant="h5" sx={style.watchTitle}>
          Oyster Perpetual Land-Dweller
        </Typography>
        <Typography sx={style.watchSubTitle}>
          The new watches from Rolex will always make headlines and here comes another. Meet the Land-Dweller, which has a new case shape
          and a new movement, which Rolex describes as 'the beginning of the future of Rolex watchmaking'. It's backed by seven years of
          research, 32 patent applications, and a raft of aesthetic and technical leaps that clearly signal what Rolex has in mind for next
          year and beyond. The Land-Dweller's case is a clear nod to the Rolex Oysterquartz model in 1969, with angled lugs, a fluted bezel,
          and a slim profile. Its 'Flat Jubilee' five-link bracelet is fully integrated into the case, which is 15% thinner than a Rolex
          Datejust, so the watch sits even more comfortably on the wrist. The dial has a repeating honeycomb motif, created using Rolex's
          femtosecond laser technique, as seen on the 'palm' dial that was released in 2021.
        </Typography>
        <Typography sx={style.watchSubTitle}>
          So far, so cool. Then comes the new Calibre 7135, a high-frequency automatic beating at 5hz or 36,000vph (4hz or 28,800vph is
          normal), and featuring Rolex's new Dynapulse escapement – a silicon component that improves the movement's efficiency by 30%
          offering exceptional performance. The result? Sustained accuracy to +/-2 seconds per day, a 66-hour power reserve, and high
          resistance to shocks and magnetism. There will be 36mm and 40mm variants in either white-gold Rolesor, warm 18-karat Everose gold,
          or platinum, with some diamond-set versions in the mix as well. This is a revolutionary landmark launch for the world's most
          desirable watch brand.
        </Typography>
      </Box>

      {/* Rolex Image Section 2 */}
      <Container maxWidth="lg" sx={style.containerStyle}>
        <Box
          sx={style.boxStyle}>
          <Box sx={style.boxContentContainer}>
            <Box
              component="img"
              src={rolexThree}
              alt="Rolex GMT-Master II"
              loading="lazy"
              sx={style.boxContentImg}
            />
            <Typography sx={style.boxContentHeading}>
              Rolex Oyster Perpetual GMT-Master II
            </Typography>
          </Box>

          <Box
            sx={style.subContainerStyles}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={style.subContainerHeading}>
              Oyster Perpetual GMT-Master II
            </Typography>

            <Typography sx={style.subContainerSubText}>
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

      <Container maxWidth="lg"  sx={style.containerStyle}>
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
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 ,fontFamily: "miller-light",}}>
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
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1,fontFamily: "miller-light", }}>
              Rolex Oyster Perpetual GMT-Master II Details
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box sx={{ width: { xs: "95%", sm: "90%", md: "80%" }, textAlign: "left", mb: { xs: 3, sm: 4 } }}>
        <Typography variant="h5" sx={{ mb: 2, fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },fontFamily: "miller-light",textAlign:'center' }}>
          Oyster Perpetual
        </Typography>
        <Typography sx={{ mb: 2,fontFamily: "miller-light", fontSize:'0.8rem'}}>
          Rolex's evergreen Oyster Perpetual has been a springboard into the brand for countless watch buyers through the years. For 2025,
          Rolex has added a trio of matte lacquered dials in pastel colours to the range. A muted lavender, a warm sandy beige and a fresh
          pistachio green. The 28mm version – equipped with Calibre 2232 – is now available with a soft lavender dial, while the Calibre
          3230 36mm and 41mm models are now offered with either beige or pistachio dials. The proportions of the Oyster Perpetual 41 have
          been slightly reworked, introducing a redesigned case and a slimmer Oysterclasp. Simple additions that breathe freshness into a
          perennial classic.
        </Typography>
      </Box>

      <Container maxWidth="lg"  sx={style.containerStyle}>
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
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1,fontFamily: "miller-light", }}>
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
              sx={{  fontWeight: "normal", fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },fontFamily: "miller-light", }}>
              Perpetual 1908
            </Typography>

            <Typography  sx={{ fontFamily: "miller-light", fontSize:'0.8rem'}}>
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
        <Typography variant="h5" sx={{ mb: 2, fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },fontFamily: "miller-light",textAlign:'center' }}>
          Exclusive Dials
        </Typography>
        <Typography sx={{ fontFamily: "miller-light", fontSize:'0.8rem'}}>
          New dials typically don't inspire many column inches – but, as ever, Rolex isn't typical. This year, exclusive new dials are
          introduced into three of its most celebrated models. The 18-karat yellow gold Sky-Dweller gets a bright green sunray dial; the
          18-karat Everose gold GMT Master-II gets a dial made from a material called 'tiger iron' that mixes tiger's eye and red jasper
          with a reddish-black mineral called hematite; and the 18-karat yellow gold Cosmograph Daytona gets a turquoise blue lacquer dial.
        </Typography>
      </Box>

      {/* Bottom Banner */}
      <Box sx={style.bottomBanner}>
      <Box
        sx={style.bottomBannerImage}>
        <Box sx={style.bottomBannerContent}>
          <Typography
            variant="overline"
            sx={style.bottomBannerContentHeading}>
            FINE WATCHES
          </Typography>

          <Typography
            variant="h2"
            sx={style.bottomBannerTitle}>
            Exclusive timepieces meet extraordinary novelties, unparalleled expertise and more
          </Typography>

          <Button
            variant="outlined"
            sx={style.bottomBannerButton}>
            Discover Fine Watches at Harrods
          </Button>
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default ReadShopComponent;
