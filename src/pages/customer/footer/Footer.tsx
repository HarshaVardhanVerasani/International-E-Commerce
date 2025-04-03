import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Divider, Grid, IconButton, Link, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { footerStyles } from "./FooterStyles";

const paymentMethods = [
  { name: "Visa", icon: "💳" },
  { name: "Mastercard", icon: "💳" },
  { name: "Amex", icon: "💳" },
  { name: "UnionPay", icon: "💳" },
  { name: "PayPal", icon: "💳" },
  { name: "Apple Pay", icon: "💳" },
  { name: "Discover", icon: "💳" },
];

const footerLinks = [
  {
    title: "THE STORE",
    links: [
      { name: "Plan Your Visit", url: "#" },
      { name: "Store Guide", url: "#" },
      { name: "Restaurants", url: "#" },
      { name: "News & Events", url: "#" },
    ],
  },
  {
    title: "SHOPPING ONLINE",
    links: [
      { name: "Delivery", url: "#" },
      { name: "Returns", url: "#" },
      { name: "Track Your Order", url: "#" },
      { name: "Return Your Order", url: "#" },
      { name: "Hampers", url: "#" },
    ],
  },
  {
    title: "CUSTOMER SERVICE",
    links: [
      { name: "Harrods Rewards", url: "#" },
      { name: "FAQs", url: "#" },
      { name: "Contact Us", url: "#" },
      { name: "Recalls", url: "#" },
      { name: "Cookie Policy", url: "#" },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      { name: "Harrods Group", url: "#" },
      { name: "Corporate Responsibility", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Press", url: "#" },
      { name: "Governance", url: "#" },
    ],
  },
];

const otherFooterLinks = [
  {
    title: "Accessibility",
    url: "#",
  },
  {
    title: "Terms & Conditions",
    url: "#",
  },
  {
    title: "Security & Privacy Policy",
    url: "#",
  },
];

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={footerStyles.root}>
      <Container maxWidth="lg">
        <Box sx={footerStyles.logoContainer}>
          <Typography variant="h4" sx={footerStyles.logoText}>
            Harrods
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="space-between">
          {footerLinks.map(section => (
            <Grid item xs={6} md={3} key={section.title}>
              <Typography variant="subtitle1" sx={footerStyles.sectionTitle(isMobile)}>
                {section.title}
              </Typography>
              {section.links.map(link => (
                <Typography key={link.name} variant="body2" sx={footerStyles.linkText(isMobile)}>
                  <Link href={link.url} sx={footerStyles.linkStyle}>
                    {link.name}
                  </Link>
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        <Divider sx={footerStyles.divider} />

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              justifyContent={isMobile ? "center" : "flex-start"}
              sx={{ mb: isMobile ? 3 : 0, gap: 2 }}>
              {paymentMethods.map(method => (
                <Box key={method.name} sx={footerStyles.paymentBox}>
                  <Typography sx={{ fontSize: 30 }}>{method.icon}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={footerStyles.socialContainer(isMobile)}>
              <Typography variant="subtitle2" sx={footerStyles.socialTitle}>
                FOLLOW US
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton size="small" sx={footerStyles.iconButton}>
                  <FacebookIcon />
                </IconButton>
                <IconButton size="small" sx={footerStyles.iconButton}>
                  <InstagramIcon />
                </IconButton>
                <IconButton size="small" sx={footerStyles.iconButton}>
                  <PinterestIcon />
                </IconButton>
                <IconButton size="small" sx={footerStyles.iconButton}>
                  <YouTubeIcon />
                </IconButton>
                <IconButton size="small" sx={footerStyles.iconButton}>
                  <WhatsAppIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Grid container marginTop={2} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent={"flex-start"} sx={{ mb: isMobile ? 3 : 0 }}>
              {otherFooterLinks.map(method => (
                <Box key={method.name}>
                  <Typography key={method.name} variant="body2">
                    <Link href={method.url} sx={footerStyles.moreLinkStyle}>
                      {method.title}
                    </Link>
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              justifyContent={isMobile ? "center" : "flex-start"}
              sx={{ mb: isMobile ? 3 : 0, gap: 2 }}>
              <Typography sx={footerStyles.moreLinkStyle}>© 2025 Harrods Limited. All Rights Reserved</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
