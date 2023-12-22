// import logo from "./logo.svg";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Navigation";
// import AboutMe from "./pages/AboutMe";
// import Contact from "./pages/Contact";
import React, { useState } from "react";
import PortfolioContainer from "./components/PortfolioContainer";


function App() {
  // State for managing pages in the app
const [pages] = useState([
  { name: "about me" },
  { name: "portfolio" },
  { name: "contact" },
  { name: "resume" },
]);

// State for tracking the currently active page
const [currentPage, setCurrentPage] = useState(pages[0]);


  // Setting up the main page structure
return (
  <div className="App">
    {/* Navigation component */}
    <Nav
      className="App-nav"
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      pages={pages}
    />
    {/* Header component */}
    <Header className="App-header" />
    {/* PortfolioContainer component */}
    <PortfolioContainer currentPage={currentPage} />
    {/* Footer component */}
    <Footer className="App-footer" />
  </div>
);

}

//exporting app
export default App;
