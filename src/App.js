import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import "./App.css";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <main className="text-gray-400 bg-gradient-to-br from-gray-900 via-gray-900 to-green-900 body-font">
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
    </BrowserRouter>
  );
}

export default App;
