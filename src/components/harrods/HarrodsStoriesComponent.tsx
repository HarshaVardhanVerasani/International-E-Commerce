import { Box, Typography } from '@mui/material'
import CarousalComponent from '../carousalComponent/CarousalComponent';
import { styles } from './HarrodsStoriesComponentStyles';
import CommonButton from '../commonButton/CommonButton';
import { lightTheme } from '../../config/colorPalette';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[]; 
  }
  
  interface IProps {
    products: Product[]; 
    isBgActive?:boolean,
    isLargeText?: boolean,
    isDescHasLink?: boolean,
  }
  
const HarrodsStoriesComponent = ({products,isBgActive, isLargeText, isDescHasLink}:IProps) => {
  return (
    <Box sx={styles.mainContainer}>
      <Typography variant='h5' sx={styles.mainHeading}>Harrods Stories</Typography>
      <CarousalComponent products={products} isBgActive={isBgActive} 
       isDescHasLink={ isDescHasLink} isLargeText={isLargeText}
       />
       <CommonButton title="View All Stories" color={lightTheme.darkBrown} bgColor={lightTheme.darkBrown} mainBgColor=''/>
    </Box>
  )
}

export default HarrodsStoriesComponent
