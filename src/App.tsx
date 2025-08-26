import React, { useState } from 'react';
import Header from './components/Header';
import TeamHero from './components/TeamHero';
import TeamSection from './components/TeamSection';
import TeamProjects from './components/TeamProjects';
import TeamContact from './components/TeamContact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <TeamHero />
      <TeamSection />
      <TeamProjects />
      <TeamContact />
      <Footer />
    </div>
  );
}

export default App;