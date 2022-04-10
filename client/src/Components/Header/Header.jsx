import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNav, HeaderWrapper } from './Header.style'

const Header = () => {
  return (
    <HeaderWrapper>
      <h3>memorip</h3>
      <HeaderNav>
        <li>
          <Link to='/login'>
            LOGIN
          </Link>
        </li>
        <li>
          <Link to='/signup'>
            SIGNUP
          </Link>
        </li>
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default Header