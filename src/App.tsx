import React from 'react';

import Navigation from './components/Navigation';
import Header from './sections/Header'
import Services from './sections/Services'
import Reasons from './sections/Reasons';
import Team from './sections/Team';
import Reviews from './sections/Reviews';
import Contact from './sections/Contact'
import Footer from './components/Footer'

import './scss/App.scss'

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Services />
      <Reasons />
      <Team />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
