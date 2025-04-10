import { Box, FormControl, MenuItem, Select, Stack, Typography } from "@mui/material";
import { letter } from "../../common/assets/images/imageFile";
import { ChangeEvent, lazy, useState } from "react";
import DeliveryOptions from "../../common/components/commonRadio/CommonRadio";
import { useNavigate } from "react-router-dom";
const SecurePayment = lazy(() => import("../../common/components/securepayment/SecurePayment"))
const CommonButton = lazy(() => import("../commonButton/CommonButton"));
const CommonInputField = lazy(() => import("../commonInputField/CommonInputField"));
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const styles = {
  dropDown: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "0px", // Remove border radius
      "& fieldset": {
        border: "1px solid #9E9E9E !important",
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05) !important", // Border color on hover
      },
      "&:hover fieldset": {
        border: "1px solid #9E9E9E !important",
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05) !important", // Border color on hover
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #AA8D65 !important",
      },
    },
  },
  summary:{
    display: "flex",
    gap: "20px",
    borderTop: "1px solid silver",
    padding: "20px 0px",
    borderBottom: "1px solid silver",
  },
  description: {
    fontSize: "13px",
    fontWeight: 400,
    color: "grey",
  },
  totalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px 0px",
    borderTop: "1px solid silver",
    borderBottom: "1px solid silver",
  },
  listContainer: { width: "100%", display: "flex", justifyContent: "space-between" },
  title: {
    fontSize: "15px",
    fontWeight: 500,
    color: "black",
  },
  list: {
    fontSize: "13px",
    fontWeight: 400,
    color: "grey",
  },
  container: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "80px",
    flexDirection:{xs:"column",md:"row"},
    gap:{xs:"30px",md:"0px"}
  },
  formContainer: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    width: {xs:"100%",md:"60%"},
    height: "100%",
  },
  form: {
    width: "70%",
    gap: "10px",
  },
  imageContainer: {
    width: "50px",
    height: "50px",
  },
  imageContainer1: {
    width: "80px",
    height: "80px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  billContainer: {
    width: {xs:"100%",md:"30%"},
    background: "#F5F5F5",
    padding: "10px 15px",
    gap: "20px",
  },
  t: {
    fontSize: "13px",
    color: "black",
    fontWeight: "500",
  },
};
interface UserDetails {
  email: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
  mobile: string;
}

interface checkoutRegister {
  id: number;
  name: keyof UserDetails;
  value: string;
  label: string;
}

const checkoutRegister: checkoutRegister[] = [
  {
    id: 1,
    name: "email",
    value: "",
    label: "Email",
  },
  {
    id: 2,
    name: "firstName",
    value: "",
    label: "First Name",
  },
  {
    id: 3,
    name: "lastName",
    value: "",
    label: "Last Name",
  },
  {
    id: 5,
    name: "address1",
    value: "",
    label: "Address Line 1",
  },
  {
    id: 6,
    name: "address2",
    value: "",
    label: "Address Line 2",
  },
  {
    id: 7,
    name: "city",
    value: "",
    label: "City/Suburb",
  },
  {
    id: 8,
    name: "zip",
    value: "",
    label: "Zip/Postcode",
  },
  {
    id: 9,
    name: "mobile",
    value: "",
    label: "Mobile Phone",
  },
];

const CheckoutDetails = () => {

  const [user, setUser] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    mobile: "",
    zip: "",
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={styles.container}>
      <Stack sx={styles.formContainer}>
        <Stack sx={styles.form}>
          <Box sx={styles.imageContainer}>
            <Box component={"img"} src={letter} sx={styles.image} />
          </Box>
          <Typography sx={styles.t}>BILLING ADDRESS</Typography>
          {checkoutRegister.map(field => (
            <CommonInputField
              key={field.id}
              label={field.label}
              name={field.name}
              value={user[field.name] || ""}
              handleChange={handleChange}
            />
          ))}
          <FormControl sx={styles.dropDown} size="small">
            <Typography>Country</Typography>
            <Select labelId="demo-select-small-label" id="demo-select-small" value={"country"}>
              {countries.map(each => (
                <MenuItem value={each} key={each}>
                  {each}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Stack>
          <DeliveryOptions 
  onAddressChange={(value) => console.log('Address option:', value)}
  onDeliveryOptionChange={(value) => console.log('Delivery option:', value)}
  onDutiesChange={(value) => console.log('Duties option:', value)}
/>
          </Stack>
        </Stack>
        <SecurePayment/>
        <CommonButton bgColor="#304835" color="#FFFFFF" mainBgColor="#304835" authButton={true} title="Pay Securely Now"/>
      </Stack>
      <Stack sx={styles.billContainer}>
        <Typography sx={styles.t}>ORDER SUMMARY</Typography>
        <Box
          sx={styles.summary}>
          <Box sx={styles.imageContainer1}>
            <Box component={"img"} src="https://hrd-live.cdn.scayle.cloud/images/5f86da13e0af1632415ed58bf5c405f2.jpg" sx={styles.image} />
          </Box>
          <Stack sx={{ width: "70%" }}>
            <Typography sx={styles.title}>Alex Perry</Typography>
            <Typography sx={styles.list}>Scoop-Neck Wrap Mini Dress</Typography>
            <Typography sx={styles.list}>Color: Navy</Typography>
            <Typography sx={styles.list}>Size: 14 UK</Typography>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <Typography sx={styles.list}>qty : 1</Typography>
              <Typography sx={styles.list}>$1500.00</Typography>
            </Stack>
          </Stack>
        </Box>
        <Stack sx={{ width: "100%", gap: "10px" }}>
          <Box sx={styles.listContainer}>
            <Typography sx={styles.list}>items total</Typography>
            <Typography sx={styles.list}>$1500.00</Typography>
          </Box>
          <Box sx={styles.listContainer}>
            <Typography sx={styles.list}>Shipping</Typography>
            <Typography sx={styles.list}>$1500.00</Typography>
          </Box>
          <Box sx={styles.listContainer}>
            <Typography sx={styles.list}>uties, taxes & fees</Typography>
            <Typography sx={styles.list}>$1500.00</Typography>
          </Box>
        </Stack>
        <Stack sx={styles.totalContainer}>
          <Typography>Total</Typography>
          <Typography>$1233.23</Typography>
        </Stack>
        <Typography sx={styles.description}>
          All applicable duties, taxes and fees are included in the total amount of your order. We guarantee you will not be required to pay
          any additional cost on delivery.
        </Typography>
      </Stack>
    </Box>
  );
};
export default CheckoutDetails;
