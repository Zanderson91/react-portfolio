import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Resume from "./components/resume";


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Nav />
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Resume />
      <Footer />
    </main>
  );
}

export default App;
