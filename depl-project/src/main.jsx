import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Body/Slider/Slider_images'
import CardsImages from './Components/Body/ImagesWithCard/card-image'
import { Text } from './Components/Body/TextDesign/Text'
import TextBox from './Components/Body/ImagesWithCard/Text-Box'
import { Image } from './Components/Body/ImagesWithCard/Image'
import { Threecard } from './Components/Body/ImagesWithCard/Three-card'
import { Fixedimage } from './Components/Body/Fixed-back-image/fixed-image'
import { Footer } from './Components/Footer/Footer'


export const Main = () => {
  return (
    <>
     <Navbar />
      <Slider />
      <CardsImages />
      <Text/>
      <TextBox />
      <Image />
      <Threecard/>
      <Fixedimage/>
      <Footer/>
    </>
  )
}
