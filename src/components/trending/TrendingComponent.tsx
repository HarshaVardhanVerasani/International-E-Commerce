import { Box, Typography } from '@mui/material'
import React from 'react'
import CarousalComponent from '../carousalComponent/CarousalComponent';
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
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:4,marginTop:4}}>
      <Typography variant='h3'>What’s Trending</Typography>
      <CarousalComponent products={products} isBgActive={isBgActive}  isTitleHasUnderline={isTitleHasUnderline}/>
    </Box>
  )
}

export default TrendingComponent
