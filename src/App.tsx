import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";
import Terms from "./pages/Terms.tsx";
import FAQ from "./pages/FAQs.tsx";
import Privacy from "./pages/Privacy.tsx"
import GameOfSkills from './pages/GameOfSkills.tsx'
import About from './pages/AboutUs.tsx'
import HelpAndSupport from './pages/HelpAndSupport.tsx'
import ReturnPolicy from './pages/ReturnPolicy.tsx'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/gameofskills" element={<GameOfSkills />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="/returnpolicy" element={<ReturnPolicy />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/help" element={<HelpAndSupport />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
