// App.jsx

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Layouts/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Favorites from "./components/Favorites";
import Projects from "./components/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FavoritesProvider from "./context/FavoritesContext";
import DataPortfolioProvider from "./context/DataPorfolioContext";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <Router>
      <FavoritesProvider>
        <DataPortfolioProvider>
      <div className="">
        <Navbar />
        <Hero />
        <Skills />
        <Favorites />
        <Routes>
          <Route path="/" element={<Projects />} />
          {/* Utiliza el parámetro "id" en la ruta */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Testimonials />
        
        <Contact />
        <footer className="p-3 text-center">
          <h6 className="mb-3">Geronimo Benavidez</h6>
          <p>codeaprogram © All CopyRights Reserved 2022</p>
        </footer>
      </div>
      </DataPortfolioProvider>
      </FavoritesProvider>
    </Router>
  );
};

export default App;
