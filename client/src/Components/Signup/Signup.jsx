import React from 'react'
import { 
  SignupContents, 
  SignupDetails, 
  SignupForm, 
  SignupImage, 
  SignupWrapper 
} from './Signup.style';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <SignupWrapper>
      <SignupContents>
        <SignupImage>
          <img src='https://cdn.dribbble.com/users/1148081/screenshots/17008012/media/2c7016364ba97baeb63c03ee8ca39427.png?compress=1&resize=1200x900&vertical=top' alt='login-img'/>
        </SignupImage>
        <SignupDetails>
          <h1>Join Us!</h1>
        <SignupForm>
          <input type='text' id='name' placeholder='NAME'/>
          <input type='email' id='email' placeholder='EMAIL'/>
          <input type='password' id='password' placeholder='PASSWORD'/>
          <input type='text' id='confirm' placeholder='CONFIRM PASSWORD'/>
          <input type='file' id='image' placeholder='ICON IMAGE'/>
          <button type='submit'>SIGNUP</button>
        </SignupForm>
        <p>
          You already have an account?<br/>
          <Link to='/signup'>
            Login from HERE!
          </Link>
        </p>
      </SignupDetails>
    </SignupContents>
  </SignupWrapper>
  )
}

export default Signup