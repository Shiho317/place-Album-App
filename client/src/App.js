import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme.style";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Album from "./Components/Album/Album";
import { GlobalStyle } from "./styles/Global.style";

export const AppContext = createContext();

function App() {
  const myStorage = window.localStorage;
  const currentAcc = myStorage.getItem("user");

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{ currentAcc, myStorage, loggedIn, setLoggedIn }}
        >
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/album" element={<Album />} />
            </Routes>
            <Footer />
          </Router>
        </AppContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
