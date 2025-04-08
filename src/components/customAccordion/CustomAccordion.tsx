import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Collapse, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./CustomAccordionStyles";

interface AccordionProps {
  title: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

const CustomAccordion: React.FC<AccordionProps> = ({ title, defaultExpanded = false, children }) => {
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={styles.accordionContainer}>
      <Box onClick={toggleAccordion} sx={styles.accordionHeader}>
        {expanded ? <RemoveIcon sx={styles.accordionIcon} /> : <AddIcon sx={styles.accordionIcon} />}
        <Typography variant="h6" sx={styles.accordionTitle} fontFamily={"'Miller Banner', serif"} fontWeight={600}>
          {title}
        </Typography>
      </Box>
      <Collapse in={expanded} timeout={300}>
        <Box sx={styles.accordionContent}>{children}</Box>
      </Collapse>
    </Box>
  );
};

const BulletPoint: React.FC<{ text: string }> = ({ text }) => (
  <Box sx={styles.bulletContainer}>
    <Box sx={styles.bulletPoint} />
    <Typography variant="body1" sx={styles.bulletText}>
      {text}
    </Typography>
  </Box>
);

const AccordionDetails: React.FC = () => {
  return (
    <Box>
      <Box sx={styles.detailsColumn}>
        <Divider sx={styles.divider} />
        <CustomAccordion title="Details" defaultExpanded={true}>
          <Box ml={5}>
            <BulletPoint text="All-over print" />
            <BulletPoint text="Halterneck" />
            <BulletPoint text="Sleeveless" />
            <BulletPoint text="Tie fastening" />
            <BulletPoint text="Model is 178cm, a size UK 8 and wears a size XS/S" />
            <BulletPoint text="Dry clean" />
          </Box>
        </CustomAccordion>
        <CustomAccordion title="Composition">
          <Box ml={5}>
            <BulletPoint text="OUTER" />
            <BulletPoint text="Linen/Flax" />
            <BulletPoint text="100%" />
          </Box>
        </CustomAccordion>
        <CustomAccordion title="Delivery & Returns">
          <Box ml={5}>
            <Typography variant="h6" sx={styles.sectionTitle}>
              RETURNS (UK & INTERNATIONAL)
            </Typography>
            <Divider sx={styles.divider} />
            <Typography mt={2} variant="body1" fontWeight={600} mb={1.3}>
              FREE
            </Typography>
            <Typography variant="body1" mb={2}>
              If you change your mind about your order, you can send it back to us using our free returns service. You have 14 days from the
              date of delivery to return your order. Some product exclusions apply.
            </Typography>
            <Typography sx={styles.link}>View Returns FAQs</Typography>
            <Typography variant="h6" sx={styles.sectionTitle}>
              INTERNATIONAL DELIVERY
            </Typography>
            <Divider sx={styles.divider} />
            <Box>
              <Typography sx={styles.countryName}>USA</Typography>
              <Typography sx={styles.deliveryInfo}>3 - 5 working days</Typography>
              <Typography sx={styles.deliveryInfo}>$30</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Box>
              <Typography sx={styles.countryName}>Hong Kong</Typography>
              <Typography sx={styles.deliveryInfo}>3 - 5 working days</Typography>
              <Typography sx={styles.deliveryInfo}>HK$240</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Box>
              <Typography sx={styles.countryName}>Middle east</Typography>
              <Typography sx={styles.deliveryInfo}>3 - 6 working days</Typography>
              <Typography sx={styles.deliveryInfo}>Delivery charge will be calculated at checkout</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Box>
              <Typography sx={styles.countryName}>Europe</Typography>
              <Typography sx={styles.deliveryInfo}>3 - 6 working days</Typography>
              <Typography sx={styles.deliveryInfo}>€25</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Box>
              <Typography sx={styles.countryName}>Rest of the World</Typography>
              <Typography sx={styles.deliveryInfo}>Up to 7 working days</Typography>
              <Typography sx={styles.deliveryInfo}>Delivery charge will be calculated at checkout</Typography>
            </Box>
            <Divider sx={styles.divider} />
            <Typography sx={styles.noteText}>
              Please note: the above charges may vary depending on your delivery location. Your delivery charge will be confirmed at
              Checkout.
            </Typography>
            <Typography sx={styles.link}>Delivery FAQ</Typography>
          </Box>
        </CustomAccordion>
      </Box>
    </Box>
  );
};

export default AccordionDetails;
