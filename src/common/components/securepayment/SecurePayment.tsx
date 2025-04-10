import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl,
  Link,
  Paper,
  InputAdornment,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// CSS styles object
const styles = {
  container: {
    p: 4,
    maxWidth: 600,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 2,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)',
   marginBottom:"30px"
  },
  title: {
    fontWeight: 600,
    fontSize: '1.2rem',
    mb: 3,
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  subtitle: {
    fontSize: '1rem',
    mb: 3
  },
  paymentMethodContainer: {
    display: 'flex',
    gap: 2,
    mb: 4
  },
  paymentMethod: {
    width: 130,
    height: 110,
    border: '1px solid #e0e0e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    p: 2
  },
  selectedPaymentMethod: {
    border: '2px solid #A49066',
  },
  label: {
    fontSize: '0.9rem',
    color: '#666',
    mb: 1
  },
  errorLabel: {
    color: 'error.main',
    fontSize: '0.9rem',
    mb: 1
  },
  input: {
    mb: 3
  },
  expiryContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: 3
  },
  expirySelect: {
    width: 120
  },
  divider: {
    mx: 1,
    color: '#666',
    fontWeight: 'bold'
  },
  infoLink: {
    color: '#666',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  iconAdornment: {
    color: '#A49066'
  },
  lockIcon: {
    fontSize: '1rem',
    color: '#666'
  }
};

const SecurePayment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardError, setCardError] = useState(false);
  const [month, setMonth] = useState('08');
  const [year, setYear] = useState('2037');

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <Paper sx={styles.container} elevation={0}>
      <Typography variant="h6" sx={styles.title}>
        SECURE PAYMENT <LockIcon sx={styles.lockIcon} />
      </Typography>
      
      <Typography sx={styles.subtitle}>
        Please select your payment method
      </Typography>
      
      <Box sx={styles.paymentMethodContainer}>
        <Box 
          sx={{
            ...styles.paymentMethod, 
            ...(paymentMethod === 'card' ? styles.selectedPaymentMethod : {})
          }}
          onClick={() => handlePaymentMethodChange('card')}
        >
          <CreditCardIcon sx={styles.iconAdornment} />
        </Box>
        
        <Box 
          sx={{
            ...styles.paymentMethod, 
            ...(paymentMethod === 'paypal' ? styles.selectedPaymentMethod : {})
          }}
          onClick={() => handlePaymentMethodChange('paypal')}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" width="80" />
        </Box>
      </Box>
      
      {paymentMethod === 'card' && (
        <>
          <Typography sx={styles.label}>Card number</Typography>
          <TextField
            fullWidth
            error={cardError}
            placeholder="Card number"
            sx={styles.input}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CreditCardIcon sx={styles.iconAdornment} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <LockIcon sx={styles.iconAdornment} />
                </InputAdornment>
              ),
            }}
          />
          {cardError && (
            <Typography sx={styles.errorLabel}>Card number</Typography>
          )}
          
          <Typography sx={styles.label}>Expiry date</Typography>
          <Box sx={styles.expiryContainer}>
            <FormControl sx={styles.expirySelect}>
              <Select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                displayEmpty
                renderValue={() => month}
                IconComponent={(props) => (
                  <span {...props} style={{ marginRight: '8px' }}>
                    &#9662;
                  </span>
                )}
              >
                {Array.from({ length: 12 }, (_, i) => {
                  const num = i + 1;
                  const value = num < 10 ? `0${num}` : `${num}`;
                  return <MenuItem value={value}>{value}</MenuItem>;
                })}
              </Select>
            </FormControl>
            
            <Typography sx={styles.divider}>/</Typography>
            
            <FormControl sx={styles.expirySelect}>
              <Select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                displayEmpty
                renderValue={() => year}
                IconComponent={(props) => (
                  <span {...props} style={{ marginRight: '8px' }}>
                    &#9662;
                  </span>
                )}
              >
                {Array.from({ length: 10 }, (_, i) => {
                  const value = `${2023 + i}`;
                  return <MenuItem value={value}>{value}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
          
          <Typography sx={styles.label}>Security code</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <TextField
              sx={{ width: 150 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SecurityIcon sx={styles.iconAdornment} />
                  </InputAdornment>
                )
              }}
            />
            <Link sx={styles.infoLink}>
              What is this? <HelpOutlineIcon fontSize="small" />
            </Link>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default SecurePayment;