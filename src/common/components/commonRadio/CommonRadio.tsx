import React, { ChangeEvent, useState } from "react";
import { Box, Typography, Radio, RadioGroup, FormControlLabel, Divider, Stack } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import CommonInputField from "../../../components/commonInputField/CommonInputField";

interface DeliveryOptionsProps {
  onAddressChange?: (value: string) => void;
  onDeliveryOptionChange?: (value: string) => void;
  onDutiesChange?: (value: string) => void;
}

const styles = {
  india:{
    fontSize: "15px",
    color: "black",
    width:"100%"
  },
  shop:{
    fontSize: "14px",
    color: "#32333a",
    width:"100%"
  },
  label: {
    fontSize: "16px",
    color: "#32333a",
    width:"100%"
  },
  container: {
    width: "100%",
  },
  section: {
    mb: 4,
    mt: 4,
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    mb: 2,
  },
  divider: {
    my: 2,
  },
  radio: {
    color: "#8B7E66",
    "&.Mui-checked": {
      color: "#8B7E66",
    },
  },
  labelText: {
    fontSize: "14px",
  },
  sublabelText: {
    fontSize: "14px",
    color: "#6c6c6c",
  },
  inputLabel: {
    fontSize: "14px",
    color: "#666",
    mt: 2,
    mb: 1,
  },
  textField: {
    width: "100%",
    mb: 2,
  },
} as Record<string, SxProps<Theme>>;

const DeliveryOptions: React.FC<DeliveryOptionsProps> = ({ onAddressChange, onDeliveryOptionChange, onDutiesChange }) => {
  const [addressOption, setAddressOption] = useState<string>("new");

  const handleAddressChange = (value: string) => {
    setAddressOption(value);
    if (onAddressChange) {
      onAddressChange(value);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.section}>
        <Typography variant="h6" sx={styles.sectionTitle}>
          DELIVERY ADDRESS
        </Typography>

        <RadioGroup value={addressOption} onChange={e => handleAddressChange(e.target.value)}>
          <FormControlLabel
            value="billing"
            control={<Radio sx={styles.radio} />}
            label={<Typography sx={styles.labelText}>Use Billing Address</Typography>}
          />
          <FormControlLabel
            value="new"
            control={<Radio sx={styles.radio} />}
            label={<Typography sx={styles.labelText}>Add New Address</Typography>}
          />
        </RadioGroup>

        {addressOption === "new" && (
          <Stack gap={"10px"}>
            <CommonInputField label="First Name" handleChange={handleChange} key={1} name="firstName" value="" />
            <CommonInputField label="Last Name" handleChange={handleChange} key={1} name="lastName" value="" />
            <Typography sx={styles.label}>Country</Typography>
            <Typography sx={styles.india}>India</Typography>
            <Typography sx={styles.shop}>To ship your order to another country, please change your delivery country in shopping bag</Typography>

          </Stack>
        )}
      </Box>

      <Divider sx={styles.divider} />

      <Box sx={styles.section}>
        <Typography variant="h6" sx={styles.sectionTitle}>
          DELIVERY OPTIONS
        </Typography>

        <RadioGroup defaultValue="express" onChange={e => onDeliveryOptionChange && onDeliveryOptionChange(e.target.value)}>
          <FormControlLabel
            value="express"
            control={<Radio sx={styles.radio} />}
            label={
              <Box>
                <Typography sx={styles.labelText}>$ 30.00 - Express Courier (Air)</Typography>
                <Typography sx={styles.sublabelText}>(Estimated Delivery in 3 to 4 Business Days)</Typography>
              </Box>
            }
          />
        </RadioGroup>
      </Box>

      <Divider sx={styles.divider} />

      {/* Duties & Taxes Section */}
      <Box sx={styles.section}>
        <Typography variant="h6" sx={styles.sectionTitle}>
          DUTIES & TAXES
        </Typography>

        <RadioGroup defaultValue="prepay" onChange={e => onDutiesChange && onDutiesChange(e.target.value)}>
          <FormControlLabel
            value="prepay"
            control={<Radio sx={styles.radio} />}
            label={
              <Typography sx={styles.labelText}>
                Prepay $ 672.13 for duties, taxes and fees now to guarantee no additional charges on delivery.
              </Typography>
            }
          />
        </RadioGroup>
      </Box>

      <Divider sx={styles.divider} />
    </Box>
  );
};

export default DeliveryOptions;
