import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SocialShare from '../components/SocialShare';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <SocialShare />
    </div>
  )
}

export default Home
