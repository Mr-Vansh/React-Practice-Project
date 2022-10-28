import React from 'react'

import homeImage from "../images/homeImage.png"
import CommonComponent from './CommonComponent'

const Home = () => {
  return (
    <>
      <CommonComponent
        mainHeading="Grow your business with"
        btnContent="Get Started"
        navigatePage="/service"
        image={homeImage} />
    </>
  )
}

export default Home