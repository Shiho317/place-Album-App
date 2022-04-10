import React from 'react';
import { Link } from 'react-router-dom';
import HeroHeaderImg from '../../../images/hero-header.gif';
import { HeroHeaderWrapper, HeroImg, HeroTitle } from './HeroHeader.style';

const HeroHeader = () => {
  return (
    <React.Fragment>
      <HeroHeaderWrapper>
        <HeroImg>
          <img src={HeroHeaderImg} alt='hero-img'/>
        </HeroImg>
        <HeroTitle>
          <h1>PLACE + PHOTO = MEMORY</h1>
          <Link to=''>
            <button>GET STARTED</button>
          </Link>
        </HeroTitle>
      </HeroHeaderWrapper>
    </React.Fragment>
  )
}

export default HeroHeader