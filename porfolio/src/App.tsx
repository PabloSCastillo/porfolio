import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Marquee from "./components/Marquee/Marquee"; // 👈 importa el componente
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const AppContent: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Marquee
        text="Building the future, one elegant line at a time."
        speed={25}
      />
      <Nav />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
