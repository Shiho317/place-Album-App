import React from 'react';
import { Link } from 'react-router-dom';
import { Contents, FooterContentsWrapper, FooterWrapper } from './Footer.style';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContentsWrapper>
        <Contents>
          <h1>memorip</h1>
        </Contents>
        <Contents>
          <h3>Pages</h3>
          <ul>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/login'>
                Login
              </Link>
            </li>
            <li>
              <a href='/signup'>
                Signup
              </a>
            </li>
          </ul>
        </Contents>
        <Contents>
          <h3>Source</h3>
          <ul>
            <li>
              <a href='https://www.mapbox.com/' target="_blank" rel="noopener noreferrer">
                mapbox
              </a>
            </li>
            <li>
              <a href='https://dribbble.com/' target="_blank" rel="noopener noreferrer">
                Dribble
              </a>
            </li>
            <li>
              <a href='https://visgl.github.io/react-map-gl/' target="_blank" rel="noopener noreferrer">
                react-map-gl
              </a>
            </li>
          </ul>
        </Contents>
      </FooterContentsWrapper>
      <p>&copy;2022 ShihoN All rights reserved.</p>
    </FooterWrapper>
  )
}

export default Footer