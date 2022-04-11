import React from 'react'
import HeroGuide from './HeroGuide/HeroGuide'
import HeroHeader from './HeroHeader/HeroHeader'
import HeroPanel from './HeroPanel/HeroPanel'

const Hero = () => {
  return (
    <React.Fragment>
      <HeroHeader/>
      <HeroPanel/>
      <HeroGuide/>
    </React.Fragment>
  )
}

export default Hero