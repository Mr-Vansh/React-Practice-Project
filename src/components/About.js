import React from 'react'

import aboutImage from "../images/aboutImage.png"
import CommonComponent from './CommonComponent'

const About = () => {
  return (
    <>
      <CommonComponent
        mainHeading="Welcome to About Page of"
        btnContent="Contact Us"
        navigatePage="/contact"
        image={aboutImage} />
    </>
  )
}

export default About