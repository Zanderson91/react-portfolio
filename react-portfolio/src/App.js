import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Resume from "./components/resume";
import { Route, Switch } from 'react-router';
import "./App.css";


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Nav />

      <Switch>
        <Route path="/" exact>
          <Header />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
