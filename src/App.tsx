import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Main from "./components/Main.tsx";
function Home() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
