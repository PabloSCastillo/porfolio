import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const lorem =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ullam animi, necessitatibus earum, dolorum, officiis architecto sunt perferendis tempore nam ab vel aliquam! Possimus voluptates commodi debitis magnam officiis atque?";

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
