import React from 'react'
import { Link } from 'react-router-dom'
import { LoginContents, LoginDetails, LoginForm, LoginImage, LoginWrapper } from './Login.style'

const Login = () => {
  return (
    <LoginWrapper>
      <LoginContents>
          <LoginImage>
            <img src='https://cdn.dribbble.com/users/1148081/screenshots/17008012/media/2c7016364ba97baeb63c03ee8ca39427.png?compress=1&resize=1200x900&vertical=top' alt='login-img'/>
          </LoginImage>
          <LoginDetails>
            <h1>Welcome, back!</h1>
            <LoginForm>
              <input type='email' id='email' placeholder='EMAIL'/>
              <input type='password' id='password' placeholder='PASSWORD'/>
              <button type='submit'>LOGIN</button>
            </LoginForm>
            <p>
            You don't have an account?<br/>
            <Link to='/signup'>
              Let's create NOW!
            </Link>
            </p>
          </LoginDetails>
      </LoginContents>
    </LoginWrapper>
  )
}

export default Login