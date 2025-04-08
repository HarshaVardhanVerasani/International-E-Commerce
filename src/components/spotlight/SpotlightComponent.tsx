import { Box, Typography } from '@mui/material'
import CarousalComponent from '../carousalComponent/CarousalComponent';
import { styles } from './SpotlightComponentStyles';
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
    isTitleHasUnderline?:boolean,
    isDescriptionHas?:boolean,
    isIconHas?: boolean,
    isPriceHas?: boolean;
  }
  
const SpotlightComponent = ({products,isBgActive,isTitleHasUnderline,isDescriptionHas,isIconHas,isPriceHas}:IProps) => {
  return (
    <Box sx={styles.mainContainer}>
      <Typography variant='h5' sx={styles.mainHeading}>Spotlight On: Chantecaille</Typography>
      <CarousalComponent products={products} isBgActive={isBgActive}  isTitleHasUnderline={isTitleHasUnderline} isDescriptionHas={isDescriptionHas}  isIconHas={isIconHas}
              isPriceHas={isPriceHas}/>
    </Box>
  )
}

export default SpotlightComponent
