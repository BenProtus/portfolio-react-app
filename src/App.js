import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import resume from "./resume";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header resume={resume} />
      <About resume={resume} />
      <Portfolio portfolio={resume.portfolio} />
      <Testimonials testimonials={resume.testimonials} />
      <Contact resume={resume} />
      <Footer resume={resume} />
    </div>
  );
}

export default App;
