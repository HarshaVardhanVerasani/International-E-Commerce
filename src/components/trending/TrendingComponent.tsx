import { Box, Typography } from '@mui/material'

import CarousalComponent from '../carousalComponent/CarousalComponent';
import { styles } from './TrendingComponentStyles';
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
    isTitleHasUnderline?:boolean
  }
  
const TrendingComponent = ({products,isBgActive,isTitleHasUnderline}:IProps) => {
  return (
    <Box sx={styles.mainContainer}>
      <Typography variant='h4' sx={styles.mainHeading}>What’s Trending</Typography>
      <CarousalComponent products={products} isBgActive={isBgActive}  isTitleHasUnderline={isTitleHasUnderline}/>
    </Box>
  )
}

export default TrendingComponent
