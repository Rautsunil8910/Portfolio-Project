
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WorkExperience />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
