import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import { HeaderNav, HeaderWrapper } from './Header.style'

const Header = () => {

  const { loggedIn } = useContext(AppContext);

  return (
    <HeaderWrapper>
      <h3>memorip</h3>
      <HeaderNav>
        <li>
        {loggedIn ? (
          <Link to='/login'>
            LOGOUT
          </Link>
        ) : (
          <Link to='/login'>
            LOGIN
          </Link>
        )}
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