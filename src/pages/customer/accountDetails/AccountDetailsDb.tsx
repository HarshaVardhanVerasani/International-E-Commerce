import CheckIcon from "@mui/icons-material/Check";
import LogoutIcon from "@mui/icons-material/Logout";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Box, Button, Card, CardContent, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeWrapper";
import { accountDetailsStyles } from "./AccountDetailsStyles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../../redux/profileReducer/ProfileSlice";

const accountDetailsList = [
  {
    id: "001",
    title: "Online Orders & Returns",
    desc: "View and track your online orders and returns",
    link: "View your online orders and returns",
  },
  {
    id: "002",
    title: "Communication Preferences",
    desc: "Stay up to date with the latest information from Harrods",
    link: "Manage Communication Preferences",
  },
  {
    id: "003",
    title: "Manage Address",
    desc: "Add your address",
    link: "Manage Addresses",
  },
  {
    id: "004",
    title: "Update Email",
    desc: "To update your email please",
    link: "contact Customer Service",
  },
  {
    id: "005",
    title: "Update Contact Number",
    desc: "Add or update your contact number",
    link: "Update Contact Number",
  },
  {
    id: "006",
    title: "Update Password",
    desc: "Keep your account secure",
    link: "Update Password",
  },
];

const AccountDetailsDb = () => {
  const navigate = useNavigate()
  const { colors } = useContext(ThemeContext);
  const style = accountDetailsStyles(colors);
  const dispatch = useDispatch()
  const handleSubmit = () => {
  dispatch(signOut())
    navigate('/',{replace:true})
  }
  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        paddingBottom: "20px",
      }}>
      {/* Main Content */}
      <Box
        sx={{
          backgroundImage: `url(https://hrd-live.cdn.scayle.cloud/images/dc0c4a3a864e28aaf73e7d39644adbe8.jpeg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 85vh",
          paddingTop: "30px",
        }}>
        <Box>
          {/* Welcome Header */}
          <Container maxWidth="md">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
              }}>
              <Typography
                variant="h4"
                component="h1"
                sx={{ color: "white", fontWeight: 500, fontSize: "20px", fontFamily: "grotesk-light" }}>
                Hello, Paul Yadidya
              </Typography>
              <Button
                startIcon={<LogoutIcon />}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "14px",
                  fontFamily: "grotesk-light",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }} onClick={handleSubmit}>
                Sign out
              </Button>
            </Box>

            {/* Rewards Section */}
            <Box sx={{ mb: 5, padding: "10px 20px" }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{ color: "white", fontWeight: 900, mb: 1, fontSize: "14px", fontFamily: "grotesk-light" }}>
                JOIN HARRODS REWARDS TO:
              </Typography>

              <List sx={{ mb: 3 }}>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Earn and redeem points when you spend"
                    sx={{ color: "white", fontSize: "16px", fontFamily: "grotesk-light", fontWeight: 100 }}
                  />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Access exclusive benefits, events and discounts"
                    sx={{ color: "white", fontSize: "16px", fontFamily: "grotesk-light", fontWeight: 100 }}
                  />
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Your perks grow as you move through the tiers"
                    sx={{ color: "white", fontSize: "16px", fontFamily: "grotesk-light", fontWeight: 100 }}
                  />
                </ListItem>
              </List>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#a18665",
                  color: "white",
                  py: 1.5,
                  px: 4,
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: "350px",
                  "&:hover": {
                    bgcolor: "#8a725a",
                  },
                }}>
                Join Harrods Rewards
              </Button>
            </Box>
          </Container>

          {/* YOUR ACCOUNT Section */}
          <Container maxWidth="md">
            <Typography variant="h6" component="h2" sx={{ color: "white", fontWeight: 600, mb: 3 }}>
              YOUR ACCOUNT
            </Typography>
            {/* Cards Section using Flexbox instead of Grid */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
              }}>
              {/* Orders & Returns Card */}
              {accountDetailsList.map(item => (
                <Card
                  key={item.id}
                  sx={{
                    flex: "1 1 150px",
                    minWidth: { xs: "100%", sm: "200px" },
                    borderRadius: 1,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
                    "&:hover": {
                      boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                    },
                  }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, alignItems: "flex-start" }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontWeight: 300, fontSize: "20px", color: style.paragraph, fontFamily: "grotesk-light", lineHeight: 0.9 }}>
                        {item.title}
                      </Typography>
                      <ReceiptIcon sx={{ color: "#a18665" }} />
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{ mb: 3, fontSize: "14px", color: style.paragraph, fontWeight: 300, fontFamily: "grotesk-light" }}>
                      {item.desc}
                    </Typography>

                    <Button
                      sx={{
                        p: 0,
                        textTransform: "none",
                        fontSize: "14px",
                        fontFamily: "grotesk-light",
                        color: style.linkButton,
                        textDecoration: "underline",
                        "&:hover": {
                          backgroundColor: "transparent",
                          textDecoration: "underline",
                        },
                      }}>
                      {item.link}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountDetailsDb;
