import React, { useRef, useState } from 'react'
import { 
  SignupContents, 
  SignupDetails, 
  SignupForm, 
  SignupImage, 
  SignupWrapper 
} from './Signup.style';
import { Link } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import axios from 'axios';

const Signup = () => {

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [ isImageIcon, setIsImageIcon ] = useState('');

  const signupSubmit = async(e) => {
    e.preventDefault();

    const newUser = {
      username: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      image: isImageIcon,
    };

    try {
      await axios.post("http://localhost:8888/api/users/signup", newUser);
      userNameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
      setIsImageIcon('');
      alert("You have successfully created account.");
      setTimeout(() => {
        window.location.href = '/login'
      },2000)
    } catch (error) {
      console.log(error);
      alert("Something went wrong!")
    }
  }

  return (
    <SignupWrapper>
      <SignupContents>
        <SignupImage>
          <img src='https://cdn.dribbble.com/users/1148081/screenshots/17008012/media/2c7016364ba97baeb63c03ee8ca39427.png?compress=1&resize=1200x900&vertical=top' alt='login-img'/>
        </SignupImage>
        <SignupDetails>
          <h1>Join Us!</h1>
        <SignupForm onSubmit={signupSubmit}>
          <input type='text' id='name' placeholder='NAME' ref={userNameRef}/>
          <input type='email' id='email' placeholder='EMAIL' ref={emailRef}/>
          <input type='text' id='password' placeholder='PASSWORD' min='6' ref={passwordRef}/>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setIsImageIcon(base64)}
          />
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