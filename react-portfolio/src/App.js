import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Projects from "./components/projects";
import Skills from "./components/skills";


function App() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About Me />
      <Projects />
      <Skills />
      <Contact />
      <Resume />
    </header>
  );
}

export default App;
