import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginContents,
  LoginDetails,
  LoginForm,
  LoginImage,
  LoginWrapper,
} from "./Login.style";
import axios from "axios";
import { AppContext } from "../../App";

const Login = () => {
  const { myStorage, setLoggedIn } = useContext(AppContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const res = await axios.post("/api/users/login", user);
      const userObj = {
        email: res.data.email,
        name: res.data.name,
      };
      myStorage.setItem("user", JSON.stringify(userObj));
      setLoggedIn(true);
      alert("You have successfully logged in.");
      setTimeout(() => {
        navigate("/album");
      }, 500);
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <LoginWrapper>
      <LoginContents>
        <LoginImage>
          <img
            src="https://cdn.dribbble.com/users/1148081/screenshots/17008012/media/2c7016364ba97baeb63c03ee8ca39427.png?compress=1&resize=1200x900&vertical=top"
            alt="login-img"
          />
        </LoginImage>
        <LoginDetails>
          <h1>Welcome, back!</h1>
          <LoginForm onSubmit={loginSubmit}>
            <input
              type="email"
              id="email"
              placeholder="EMAIL"
              ref={emailRef}
              required
            />
            <input
              type="password"
              id="password"
              min="6"
              placeholder="PASSWORD"
              ref={passwordRef}
              required
            />
            <button type="submit">LOGIN</button>
          </LoginForm>
          <p>
            You don't have an account?
            <br />
            <Link to="/signup">Let's create NOW!</Link>
          </p>
        </LoginDetails>
      </LoginContents>
    </LoginWrapper>
  );
};

export default Login;
